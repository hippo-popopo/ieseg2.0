const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
const fs=require('node:fs');
const root=path.resolve(__dirname,'..');
const courses=[
  ['strategic-change-management',['s1','s2','s3'],'quiz'],
  ['positive-leadership',['task','styles','lmx','trust','motivation','emotions','recap'],'quiz'],
  ['environmental-management',['fondamentaux','biodiversite','scenarios','carbone','adaptation','circularite'],'exam']
];
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const signature=[];
  for(const [name,chapters,practice] of courses){
   const url=pathToFileURL(path.join(root,`revision-${name}.html`)).href;
   await page.goto(url);await page.waitForSelector('.study-chapter-tile');
   assert.deepEqual(await page.locator('.study-tabs a').allTextContents(),['Fiches','Rappel actif','Entraînement','Sources']);
   signature.push(await page.evaluate(()=>Object.fromEntries(['.study-sidebar','.study-toolbar','.study-search','.study-main','.study-heading h1'].map(sel=>{const e=document.querySelector(sel),c=getComputedStyle(e);return [sel,[c.fontFamily,c.fontSize,c.width,c.padding,c.margin,c.color]];}))));
   await page.screenshot({path:`/tmp/study-${name}-desktop.png`,fullPage:true});
   for(const width of [1440,1024,768,390,320]){
    await page.setViewportSize({width,height:900});
    for(const route of ['overview',...chapters,'recall',practice,'sources']){
     await page.goto(url+'#'+route);await page.waitForTimeout(80);
     assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow: ${name} ${width} ${route}`);
     assert.equal(await page.locator('.study-tabs a[aria-current]').count(),1,`tab selection: ${name} ${route}`);
     const links=await page.locator('a[href^="./"]').evaluateAll(as=>as.map(a=>a.href));
     for(const link of links)assert(fs.existsSync(decodeURIComponent(new URL(link).pathname)),link);
    }
   }
   await page.setViewportSize({width:390,height:844});await page.goto(url+'#overview');await page.waitForSelector('.study-heading');await page.screenshot({path:`/tmp/study-${name}-mobile.png`,fullPage:true});
   await page.goto(url+'#'+chapters[0]);await page.locator('input[type="checkbox"]').first().check();await page.reload();await page.waitForSelector('.study-chapters');assert(await page.locator('input[type="checkbox"]').first().isChecked());assert((await page.locator('#progress-label').innerText()).startsWith('1 /'));
   await page.locator('input[type="checkbox"]').first().uncheck();
   await page.locator('#search').fill(name.startsWith('environmental')?'matérialité':name.startsWith('positive')?'confiance':'stratégie');await page.waitForSelector('.study-search-result a, .search-result a');await page.locator('.study-search-result a, .search-result a').first().click();await page.waitForTimeout(100);assert.equal(await page.locator('#search').inputValue(),'');
   await page.goto(url+'#recall');await page.locator('#reveal').click();assert(await page.locator('#recall-answer').isVisible());await page.locator('#known').click();assert((await page.locator('#recall-status').innerText()).startsWith('1 /'));await page.locator('#recall-unseen').check();await page.locator('#shuffle').click();
   await page.goto(url+'#'+practice);
   if(name.startsWith('strategic')){await page.locator('#startBtn').click();await page.locator('#qOptions button').first().click();assert(await page.locator('#nextBtn').isEnabled());await page.locator('#nextBtn').click();assert((await page.locator('#qCounter').innerText()).includes('2 /'));}
   else if(name.startsWith('positive')){await page.locator('#startQuiz').click();await page.locator('#quizAnswers button').first().click();assert(await page.locator('#nextQuestion').isEnabled());await page.locator('#nextQuestion').click();assert((await page.locator('#quizPosition').innerText()).includes('2 /'));}
   else{await page.locator('#answer-short-0').fill('Test conservé');await page.locator('#score-short-0').selectOption('1');await page.reload();assert.equal(await page.locator('#answer-short-0').inputValue(),'Test conservé');await page.goto(url+'#carbone');await page.locator('#calc-amount').fill('1000');assert((await page.locator('#calc-result').innerText()).includes('600'));}
   await page.setViewportSize({width:1440,height:1000});
   await page.goto(url+'#'+chapters[0]);await page.waitForTimeout(100);await page.screenshot({path:`/tmp/study-${name}-chapter.png`});
   await page.goto(url+'#recall');await page.waitForSelector('#reveal');await page.screenshot({path:`/tmp/study-${name}-recall.png`});
   assert.equal(await page.locator('.study-footer a[href="./index.html"]').count(),1);
   console.log('PASS',name);
  }
  assert.deepEqual(signature[0],signature[1],'Strategic and Positive shell dimensions/styles differ');
  assert.deepEqual(signature[0],signature[2],'Strategic and Environmental shell dimensions/styles differ');
  await page.goto(pathToFileURL(path.join(root,'index.html')).href);await page.waitForSelector('.study-sidebar');await page.locator('#courseSearch').fill('environmental');assert.equal(await page.locator('.course.featured:visible').count(),1);await page.screenshot({path:'/tmp/study-hub.png',fullPage:true});
  assert.deepEqual(errors,[]);console.log('PASS identical shell styles, 5 viewports, all routes, search, progress persistence, recall, quizzes, exam persistence, calculator and hub.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
