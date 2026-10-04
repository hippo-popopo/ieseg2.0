const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const base=process.env.STUDY_BASE_URL||pathToFileURL(path.resolve(__dirname,'../revision-environmental-management.html')).href;
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'#priorities',{waitUntil:'domcontentloaded'});await page.waitForSelector('.priority-list');
  assert.equal(await page.locator('[data-priority]').count(),13);
  await page.locator('[data-priority]').first().check();await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.priority-list');assert(await page.locator('[data-priority]').first().isChecked());assert.equal(await page.locator('#priority-count').innerText(),'1 / 13');
  await page.locator('details').first().locator('summary').click();assert(await page.locator('details').first().locator('p').isVisible());
  await page.goto(base+'#rebuild',{waitUntil:'domcontentloaded'});await page.waitForSelector('#learn-list');
  const definitions=await page.evaluate(()=>ENV_LEARNING.lists);
  for(const list of definitions){
   await page.locator('#learn-list').selectOption(list.id);
   const answers=list.ordered?list.items:[...list.items].reverse();
   for(let i=0;i<answers.length;i++)await page.locator('#rebuild-'+i).fill(answers[i].name);
   await page.locator('button[type="submit"]').click();assert((await page.locator('#list-score').innerText()).startsWith(`${answers.length} / ${answers.length}`),list.id);
  }
  await page.locator('#learn-list').selectOption('boundaries');
  await page.locator('#list-reset').click();await page.locator('#rebuild-0').fill('CLIMAT');await page.locator('#rebuild-1').fill('climat');await page.locator('button[type="submit"]').click();assert((await page.locator('#list-score').innerText()).startsWith('1 / 9'));
  await page.locator('#rebuild-1').fill('ma formulation');await page.locator('button[type="submit"]').click();await page.locator('[data-manual="1"]').check();assert((await page.locator('#list-score').innerText()).includes('1 validée par toi'));
  await page.locator('#list-correction').click();assert(await page.locator('#list-answer').isVisible());assert((await page.locator('#list-score').innerText()).includes('corrigé consulté'));
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('#rebuild-0');assert.equal(await page.locator('#rebuild-0').inputValue(),'CLIMAT');assert(await page.locator('#list-answer').isVisible());
  await page.locator('#list-reset').click();assert.equal(await page.locator('#rebuild-0').inputValue(),'');assert(!await page.locator('#list-answer').isVisible());
  await page.goto(base+'#concept-map',{waitUntil:'domcontentloaded'});await page.waitForSelector('[data-node]');await page.locator('[data-node="nature"]').click();assert((await page.locator('#map-detail').innerText()).includes('pollinisation'));
  await page.locator('#map-fill').click();const ids=await page.locator('[data-map]').evaluateAll(es=>es.map(e=>e.dataset.map));for(const id of ids)await page.locator(`[data-map="${id}"]`).selectOption(id);await page.locator('#map-check').click();assert((await page.locator('#map-score').innerText()).startsWith('8 / 8'));
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('#map-fill');await page.locator('#map-fill').click();assert.equal(await page.locator('#map-nature').inputValue(),'nature');await page.locator('#map-reset').click();assert.equal(await page.locator('#map-nature').inputValue(),'');
  for(const width of [1440,1024,768,390,320]){
   await page.setViewportSize({width,height:900});
   for(const route of ['priorities','rebuild','concept-map']){
    await page.goto(base+'#'+route,{waitUntil:'domcontentloaded'});await page.waitForSelector('.learning');await page.waitForTimeout(100);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} ${route}`);
    assert.equal(await page.locator('.learn-tabs a[aria-current]').count(),1);assert.equal(await page.locator('.study-tabs a[aria-current]').count(),1);
    if(route==='concept-map'){await page.locator('#map-fill').click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.locator('#map-read').click();}
    if(width===1440||width===390)await page.screenshot({path:`/tmp/learning-${route}-${width}.png`,fullPage:route==='concept-map'});
   }
  }
  const broken=await page.evaluate(()=>[...ENV_LEARNING.priorities.map(p=>p[0]),...ENV_LEARNING.lists.map(l=>l.source),...ENV_LEARNING.nodes.map(n=>n.source)].filter(id=>!ENV.chapters.some(c=>c.sections.some(s=>s.id===id))));assert.deepEqual(broken,[]);
  await page.goto(base+'#overview',{waitUntil:'domcontentloaded'});await page.waitForSelector('.learning-shortcuts');assert.equal(await page.locator('.learning-shortcuts a').count(),3);await page.locator('.learning-shortcuts a').first().click();await page.waitForSelector('.priority-list');
  assert.deepEqual(errors,[]);console.log('PASS priorities, 8 lists, aliases, duplicate prevention, self-grading, reset, persistence, both map modes, all links and 5 viewport widths');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
