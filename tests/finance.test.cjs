const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const base=process.env.STUDY_BASE_URL||pathToFileURL(path.resolve(__dirname,'../revision-sustainable-finance.html')).href;
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base,{waitUntil:'domcontentloaded'});await page.waitForSelector('.study-overview');
  assert.equal(await page.locator('#study-course option').count(),4);
  assert.equal(await page.locator('.study-chapter-tile').count(),8);
  assert(await page.locator('.study-heading img').evaluate(i=>i.complete&&i.naturalWidth>0));
  const data=await page.evaluate(()=>({chapters:FIN.chapters.map(c=>({id:c.id,sections:c.sections.map(s=>s.id)})),quiz:FIN_QUIZ,terms:FIN.terms.length}));
  assert.equal(data.terms,193);
  for(const c of data.chapters){
   await page.goto(base+'#'+c.id,{waitUntil:'domcontentloaded'});await page.waitForSelector('#'+c.id+':not([hidden])');
   assert.equal(await page.locator('#'+c.id+' h1').count(),1);
   for(const id of c.sections)assert.equal(await page.locator('#'+id).count(),1);
  }
  await page.goto(base+'#capital',{waitUntil:'domcontentloaded'});await page.locator('[data-chapter="capital"]').check();await page.reload({waitUntil:'domcontentloaded'});assert(await page.locator('[data-chapter="capital"]').isChecked());
  await page.goto(base+'#essentials',{waitUntil:'domcontentloaded'});await page.locator('#fin-term-search').fill('shadow');assert.equal(await page.locator('.fin-term:visible').count(),1);await page.locator('#fin-term-search').fill('zzzzzz');assert(await page.locator('#fin-no-terms').isVisible());await page.locator('#fin-term-search').fill('');
  await page.locator('#search').fill('pioneer');assert((await page.locator('.study-search-result').count())>0);await page.locator('.study-search-result a').last().click();assert.equal(await page.locator('#search').inputValue(),'');
  await page.goto(base+'#recall',{waitUntil:'domcontentloaded'});await page.locator('#reveal').click();assert(await page.locator('#recall-answer').isVisible());await page.locator('#known').click();assert((await page.locator('#recall-status').innerText()).includes('1 / 48'));await page.locator('#recall-filter').selectOption('reporting');assert((await page.locator('.study-flashcard').innerText()).includes('Reporting'));
  await page.goto(base+'#quiz',{waitUntil:'domcontentloaded'});
  for(let i=0;i<data.quiz.length;i++)await page.locator(`input[name="q${i}"][value="${data.quiz[i][4]}"]`).check();
  await page.locator('#fin-quiz-form button[type="submit"]').click();assert((await page.locator('#fin-quiz-score').innerText()).startsWith('30 / 30'));
  await page.reload({waitUntil:'domcontentloaded'});assert((await page.locator('#fin-quiz-score').innerText()).startsWith('30 / 30'));await page.locator('#fin-quiz-filter').selectOption('purpose');assert.equal(await page.locator('.fin-question:visible').count(),3);await page.locator('#fin-quiz-reset').click();assert.equal(await page.locator('#fin-quiz-form input:checked').count(),0);
  await page.goto(base+'#calculator',{waitUntil:'domcontentloaded'});
  const result=async name=>(await page.locator(`[data-result="${name}"]`).innerText()).replace(/[\s%]/g,'').replace(',','.');
  assert(Math.abs(Number(await result('npv'))-78.82)<.01);
  await page.locator('#fin-project').selectOption('b');assert(Math.abs(Number(await result('npv'))-49.18)<.01);
  await page.locator('#fin-rate').fill('0');await page.locator('.fin-calc-form button').click();assert.equal(Number(await result('npv')),400);
  await page.locator('#fin-flows').fill('invalid\n200');await page.locator('.fin-calc-form button').click();assert(await page.locator('#fin-calc-error').isVisible());assert.equal(await page.locator('#fin-flows').getAttribute('aria-invalid'),'true');
  await page.locator('#fin-flows').fill('-1000\n1100,5');await page.locator('#fin-rate').fill('10');await page.locator('.fin-calc-form button').click();assert(Math.abs(Number(await result('npv'))-.4545)<.001);
  await page.locator('[data-calc="wacc"]').click();assert.equal(Number(await result('wacc')),6.52);await page.locator('#fin-re').fill('9.93');await page.locator('.fin-calc-form button').click();assert.equal(Number(await result('wacc')),8.544);
  await page.locator('#fin-debt').fill('0');await page.locator('#fin-equity').fill('0');await page.locator('.fin-calc-form button').click();assert(await page.locator('#fin-calc-error').isVisible());
  await page.locator('[data-calc="ipv"]').click();assert.equal(Number(await result('ipv')),-14);assert.equal(Number(await result('extended')),-31);
  await page.locator('#fin-sp').fill('10');await page.locator('#fin-sn').fill('-10');await page.locator('.fin-calc-form button').click();assert.equal(Number(await result('extended')),-37);
  await page.goto(base+'#sources',{waitUntil:'domcontentloaded'});assert((await page.locator('#sources').innerText()).includes('Documents en attente'));
  if(base.startsWith('https:'))assert.equal(await page.locator('a[href^="./sources/"]').count(),0);
  for(const width of [1440,1024,768,390,320]){
   await page.setViewportSize({width,height:900});
   for(const route of ['overview',...data.chapters.map(c=>c.id),'essentials','calculator','recall','quiz','sources']){
    await page.goto(base+'#'+route,{waitUntil:'domcontentloaded'});await page.waitForTimeout(50);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} ${route} overflow`);
    assert.equal(await page.locator('.study-tabs [aria-current="page"]').count(),1);
    if([1440,390].includes(width)&&['overview','integrated','calculator'].includes(route))await page.screenshot({path:`/tmp/finance-${route}-${width}.png`,fullPage:route==='calculator'});
   }
  }
  const broken=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].filter(a=>{const parts=a.getAttribute('href').slice(1).split('/');return !['overview','recall'].includes(parts[0])&&!document.getElementById(parts[1]||parts[0]);}).map(a=>a.getAttribute('href')));assert.deepEqual(broken,[]);
  const home=new URL('./index.html',base).href;await page.goto(home,{waitUntil:'domcontentloaded'});await page.locator('#courseSearch').fill('sustainable');assert.equal(await page.locator('.course.featured:visible').count(),1);await page.locator('.course.featured:visible').click();await page.waitForSelector('.study-overview');
  assert.deepEqual(errors,[]);console.log('PASS finance: 8 chapters, 193 notions, 48 recall cards, 30 quiz questions, persistence, 3 calculators, 5 viewports, links, sources and hub');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
