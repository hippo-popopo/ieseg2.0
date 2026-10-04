(() => {
  'use strict';
  const courses = [
    {key:'strategic',title:'Strategic Change Management',file:'revision-strategic-change-management.html',art:'strategy-transparent.png',lead:'Niveaux de changement, temporalité et innovation des business models.',chapters:[['s1','Niveaux de changement','Session 1'],['s2','Temporalité & histoire','Session 2'],['s3','BMI & disruption','Session 3']]},
    {key:'positive',title:'Positive Leadership',file:'revision-positive-leadership.html',art:'leadership-transparent.png',lead:'Structurer l’action, comprendre les personnes et construire des relations de confiance.',chapters:[['task','Tâches & stratégie','Task-oriented leadership'],['styles','Styles de leadership','Leadership styles'],['lmx','Relations & LMX','Relational leadership'],['trust','Confiance','Trust & psychological safety'],['motivation','Motivation','Motivation profiles'],['emotions','Émotions & EI','Emotional intelligence']]},
    {key:'environmental',title:'Environmental Management',file:'revision-environmental-management.html',art:'environmental-transparent.png',lead:'Des limites planétaires aux décisions de l’entreprise.',chapters:[]}
  ];
  const course=courses.find(c=>location.pathname.endsWith(c.file));
  const env=course?.key==='environmental';
  if(env) course.chapters=ENV.chapters.map(c=>[c.id,c.title,c.subtitle]);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon=name=>`<i data-lucide="${name}" aria-hidden="true"></i>`;
  function publicationLinks(){
    if(location.protocol==='file:')return;
    document.querySelectorAll('a[href^="./sources/"]').forEach(link=>{
      const unavailable=document.createElement('span');unavailable.className='study-local-source';unavailable.textContent=link.textContent+' · document local';unavailable.title='Le document original est conservé dans la version locale du site.';link.replaceWith(unavailable);
    });
    if(location.hash==='#sources'&&!document.getElementById('study-publication-note')){
      const heading=document.querySelector('main h1,main #sources h2');
      if(heading){const note=document.createElement('p');note.id='study-publication-note';note.className='study-publication-note';note.textContent='Les documents originaux de l’école ne sont pas publiés. Ils restent accessibles depuis la version locale ; les fiches et exercices sont disponibles ici.';heading.after(note);}
    }
  }
  const icons=()=>{if(env){const stats=document.querySelector('.study-overview .study-stats');if(stats&&!document.querySelector('.learning-shortcuts')){const shortcuts=document.createElement('nav');shortcuts.className='learning-shortcuts';shortcuts.setAttribute('aria-label','Révision ciblée');shortcuts.innerHTML='<a href="#priorities"><i data-lucide="bookmark-check" aria-hidden="true"></i>Incontournables</a><a href="#rebuild"><i data-lucide="list-checks" aria-hidden="true"></i>Listes à reconstruire</a><a href="#concept-map"><i data-lucide="network" aria-hidden="true"></i>Carte des notions</a>';stats.after(shortcuts);}}window.lucide?.createIcons({attrs:{'aria-hidden':'true','stroke-width':1.7}});publicationLinks();};
  const exam=env?'exam':'quiz';
  let main=document.querySelector('main');
  let saved={done:{},known:{}};
  const key=course?`ieseg-${course.key}-study-v1`:'';
  try {const data=JSON.parse(localStorage.getItem(key));if(data&&typeof data==='object')saved={...saved,...data};}catch{}
  for(const field of ['done','known'])if(!saved[field]||typeof saved[field]!=='object'||Array.isArray(saved[field]))saved[field]={};
  const persist=()=>{try{localStorage.setItem(key,JSON.stringify(saved));}catch{document.getElementById('study-storage').hidden=false;}};
  const originalNav=env?document.getElementById('chapter-nav'):null;
  const originalProgress=env?document.querySelector('.side-progress'):null;
  const originalSearch=env?document.getElementById('search'):null;
  const originalCount=env?document.getElementById('search-count'):null;
  const side=document.createElement('aside');side.className='study-sidebar';
  side.innerHTML=`<a class="study-brand" href="./index.html"><span class="study-mark">I2</span><span><b>IÉSEG 2.0</b><small>Révisions</small></span></a>${course?`<a class="study-home" href="./index.html">${icon('arrow-left')}Tous mes cours</a><label class="study-label" for="study-course">Cours</label><select id="study-course" aria-label="Changer de cours">${courses.map(c=>`<option value="${c.file}" ${c===course?'selected':''}>${c.title}</option>`).join('')}</select><a class="study-course-name" href="#overview">${course.title}</a><div id="study-nav-slot"></div><div id="study-progress-slot"></div>`:`<span class="study-label">Mes cours</span><nav class="study-course-list" aria-label="Cours">${courses.map((c,i)=>`<a href="./${c.file}"><span>${String(i+1).padStart(2,'0')}</span>${c.title}</a>`).join('')}</nav>`}<div class="study-side-foot">Mon espace de révision</div>`;
  document.querySelector('.sidebar')?.replaceWith(side);
  document.body.classList.add('study-site');
  if(!course){document.body.classList.add('study-hub');icons();return;}
  document.body.classList.add('study-course',`study-${course.key}`);
  document.getElementById('study-course').onchange=e=>{location.href='./'+e.target.value;};
  document.getElementById('menuToggle')?.remove();
  document.querySelector('.mobile-nav')?.remove();
  const nav=originalNav||document.createElement('nav');nav.id='chapter-nav';nav.setAttribute('aria-label','Chapitres');nav.className='study-chapters';
  document.getElementById('study-nav-slot').replaceWith(nav);
  if(env){const memo=document.createElement('a');memo.href='#essentials';memo.className='study-memo-link';memo.innerHTML=icon('list')+'Toutes les notions';nav.before(memo);}
  if(env){const learning=document.createElement('a');learning.href='#priorities';learning.className='study-memo-link study-learning-link';learning.innerHTML=icon('bookmark-check')+'Révision ciblée';nav.before(learning);}
  const progress=originalProgress||document.createElement('div');progress.className='study-progress';
  if(!env)progress.innerHTML=`<label for="course-progress">Chapitres révisés <span id="progress-label"></span></label><progress id="course-progress" max="${course.chapters.length}" value="0"></progress>`;
  document.getElementById('study-progress-slot').replaceWith(progress);
  let page;
  if(env){page=document.querySelector('.page');document.querySelector('.toolbar').remove();document.querySelector('.search-wrap').remove();document.querySelector('.page-footer').remove();}
  else{page=document.createElement('div');main.before(page);page.append(main);}
  page.classList.add('study-page');main.classList.add('study-main');main.id='main';main.tabIndex=-1;
  document.querySelector('.shell')?.classList.add('study-shell');
  const toolbar=document.createElement('header');toolbar.className='study-toolbar';
  toolbar.innerHTML=`<nav aria-label="Espaces de révision" class="study-tabs">${[['overview','Fiches'],['recall','Rappel actif'],[exam,'Entraînement'],['sources','Sources']].map(([id,label])=>`<a href="#${id}" data-view="${id}">${label}</a>`).join('')}</nav><button type="button" class="study-icon" id="study-print" title="Imprimer la vue" aria-label="Imprimer la vue">${icon('printer')}</button>`;
  page.prepend(toolbar);
  const searchBar=document.createElement('div');searchBar.className='study-search';
  searchBar.innerHTML=`${icon('search')}<label class="study-sr" for="${env?'study-search-input':'search'}">Rechercher une notion</label><input type="search" id="${env?'study-search-input':'search'}" placeholder="Rechercher une notion…" autocomplete="off"><span id="study-search-count" role="status"></span>`;
  toolbar.after(searchBar);
  // Keep the environmental search input and its existing event handlers.
  if(env){searchBar.querySelector('input').replaceWith(originalSearch);searchBar.querySelector('label').htmlFor='search';searchBar.querySelector('[role="status"]').replaceWith(originalCount);}
  const footer=document.createElement('footer');footer.className='study-footer';footer.innerHTML=`<a href="./index.html">${icon('arrow-left')}Tous mes cours</a><a href="#overview">Sommaire</a><a href="#sources">Sources${icon('arrow-up-right')}</a>`;page.append(footer);
  const status=document.createElement('p');status.id='study-storage';status.className='study-storage';status.hidden=true;status.setAttribute('role','status');status.textContent='Sauvegarde locale indisponible. Ta progression reste disponible pendant cette session.';page.append(status);
  if(!document.querySelector('.skip')){const skip=document.createElement('a');skip.href='#main';skip.className='skip';skip.textContent='Aller au contenu';document.body.prepend(skip);}
  document.getElementById('study-print').onclick=()=>window.print();
  const overview=()=>`<section class="study-overview"><header class="study-heading"><div class="study-eyebrow">Cours ${String(courses.indexOf(course)+1).padStart(2,'0')}</div><h1>${course.title}</h1><p>${course.lead}</p><img src="./assets/${course.art}" alt="" width="180" height="180"></header><div class="study-stats"><span><b>${course.chapters.length}</b> chapitres</span><span><b>${env?46:course.key==='positive'?30:41}</b> rappels actifs</span><a href="#${exam}">${env?'Examen blanc · 20 points':'Quiz corrigé'}</a></div><div class="study-chapter-list">${course.chapters.map(([id,title,sub],i)=>`<a class="study-chapter-tile" href="#${id}"><span class="study-number">${String(i+1).padStart(2,'0')}</span><div><h2>${title}</h2><p>${sub}</p></div>${icon('arrow-up-right')}</a>`).join('')}</div>${course.key==='positive'?'<a class="study-extra" href="#recap">Les huit repères pour l’examen →</a>':''}</section>`;
  window.StudyUI={overview,icons};
  function sync(){
    const active=(location.hash.slice(1)||'overview').split('/')[0];
    const view=active==='rebuild'?exam:['recall',exam,'sources'].includes(active)?active:'overview';
    const memoLink=document.querySelector('.study-memo-link');if(memoLink){if(active==='essentials')memoLink.setAttribute('aria-current','page');else memoLink.removeAttribute('aria-current');}
    const learningLink=document.querySelector('.study-learning-link');if(learningLink){if(['priorities','rebuild','concept-map'].includes(active))learningLink.setAttribute('aria-current','page');else learningLink.removeAttribute('aria-current');}
    document.querySelectorAll('.study-tabs a').forEach(a=>{if(a.dataset.view===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    if(!env){
      nav.innerHTML=course.chapters.map(([id,title],i)=>`<a href="#${id}" ${id===active?'aria-current="page"':''}><span class="nav-number">${String(i+1).padStart(2,'0')}</span><span>${title}</span><span class="nav-check">${saved.done[id]?'✓':''}</span></a>`).join('');
      const done=course.chapters.filter(c=>saved.done[c[0]]).length;document.getElementById('course-progress').value=done;document.getElementById('progress-label').textContent=`${done} / ${course.chapters.length}`;
    }
    icons();
  }
  if(env){
    // The course renderer owns its content and saved exam state; the shell owns navigation.
    if(!location.hash||location.hash==='#overview')main.innerHTML=overview();
    new MutationObserver(()=>icons()).observe(main,{childList:true});
    window.addEventListener('hashchange',sync);sync();return;
  }
  const sections=new Map([...main.querySelectorAll(':scope > section[id]')].map(s=>[s.id,s]));
  const oldHero=main.querySelector('.hero');if(oldHero&&!sections.has(oldHero.id))sections.set(oldHero.id,oldHero);
  for(const el of main.querySelectorAll('.pagefoot,.page-foot'))el.remove();
  oldHero?.remove();sections.delete('home');sections.delete('overview');
  const renderArea=document.createElement('div');renderArea.id='study-view';main.prepend(renderArea);
  const search=document.getElementById('search');
  const normalized=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const index=course.chapters.flatMap(([id,title])=>{
    const section=sections.get(id);const headings=[...section.querySelectorAll('h3,h4')];
    return [{id,title,text:section.textContent},...headings.map((h,i)=>{h.id=h.id||`${id}-notion-${i}`;let text=h.textContent,next=h.nextElementSibling;while(next&&!/^H[234]$/.test(next.tagName)){text+=' '+next.textContent;next=next.nextElementSibling;}return {id,title:h.textContent,text,anchor:h.id};})];
  });
  const questionsForRecall=course.key==='strategic'?QUESTIONS.map((q,i)=>({id:String(i),chapter:'s'+q.s,q:q.q,a:q.o[q.a]+' '+q.e})):questions.map((q,i)=>({id:String(i),chapter:q.t,q:q.q,a:q.a[q.c]+' '+q.e}));
  let recallIndex=0,filter='all',unseen=false,order=questionsForRecall.slice();
  function recall(){
    renderArea.innerHTML=`<div class="study-eyebrow">Rappel actif</div><h1>Ce qui reste en mémoire.</h1><div class="study-recall-tools"><label class="study-sr" for="recall-filter">Chapitre à réviser</label><select id="recall-filter"><option value="all">Tous les chapitres</option>${course.chapters.map(([id,title])=>`<option value="${id}" ${id===filter?'selected':''}>${title}</option>`).join('')}</select><label><input id="recall-unseen" type="checkbox" ${unseen?'checked':''}> À revoir seulement</label><button id="shuffle" type="button">Mélanger</button></div><div id="study-card"></div><p id="recall-status" class="study-muted"></p>`;
    document.getElementById('recall-filter').onchange=e=>{filter=e.target.value;recallIndex=0;card();};
    document.getElementById('recall-unseen').onchange=e=>{unseen=e.target.checked;recallIndex=0;card();};
    document.getElementById('shuffle').onclick=()=>{for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}recallIndex=0;card();};card();
  }
  function card(){
    const list=order.filter(q=>(filter==='all'||filter===q.chapter)&&(!unseen||!saved.known[q.id]));recallIndex=Math.max(0,Math.min(recallIndex,list.length-1));const q=list[recallIndex];
    document.getElementById('recall-status').textContent=`${questionsForRecall.filter(q=>saved.known[q.id]).length} / ${questionsForRecall.length} réponses marquées comme acquises · autoévaluation`;
    document.getElementById('study-card').innerHTML=q?`<article class="study-flashcard"><div class="study-eyebrow">${course.chapters.find(c=>c[0]===q.chapter)?.[1]||''}</div><h2>${esc(q.q)}</h2><button id="reveal" aria-expanded="false" aria-controls="recall-answer">Voir la réponse</button><div id="recall-answer" hidden><p>${esc(q.a)}</p><a href="#${q.chapter}">Revoir la fiche</a></div></article><div class="study-card-footer"><div><button id="prev-card" class="study-icon" title="Question précédente" aria-label="Question précédente" ${recallIndex===0?'disabled':''}>${icon('arrow-left')}</button><span>${recallIndex+1} / ${list.length}</span><button id="next-card" class="study-icon" title="Question suivante" aria-label="Question suivante" ${recallIndex===list.length-1?'disabled':''}>${icon('arrow-right')}</button></div><div><button id="not-known">À revoir</button><button id="known" class="study-primary">Je savais</button></div></div>`:'<article class="study-flashcard"><h2>Tout est marqué comme acquis.</h2><p>Tu peux reprendre toutes les notions en désactivant « À revoir seulement ».</p></article>';
    if(!q)return;
    document.getElementById('reveal').onclick=e=>{const answer=document.getElementById('recall-answer');answer.hidden=!answer.hidden;e.currentTarget.setAttribute('aria-expanded',!answer.hidden);e.currentTarget.textContent=answer.hidden?'Voir la réponse':'Masquer la réponse';};
    const move=delta=>{recallIndex+=delta;card();document.getElementById('reveal')?.focus({preventScroll:true});};
    document.getElementById('prev-card').onclick=()=>move(-1);document.getElementById('next-card').onclick=()=>move(1);
    document.getElementById('known').onclick=()=>{saved.known[q.id]=true;persist();move(unseen?0:1);};document.getElementById('not-known').onclick=()=>{delete saved.known[q.id];persist();move(1);};icons();
  }
  if(!sections.has('sources')){
    const section=document.createElement('section');section.id='sources';section.className='section';section.innerHTML='<div class="study-eyebrow">Sources</div><h1>Références du cours</h1>';
    course.chapters.forEach(([id,title])=>{const original=sections.get(id);const group=document.createElement('div');group.className='study-source-group';const h=document.createElement('h2');h.textContent=title;group.append(h);const intro=original.querySelector('.section-intro');if(intro)group.append(intro.cloneNode(true));const refs=original.querySelector('.refs');if(refs)group.append(refs.cloneNode(true));section.append(group);});
    const note=document.createElement('p');note.textContent='Références conservées dans la fiche existante. Aucun fichier source original supplémentaire n’est joint à ce cours.';section.append(note);main.append(section);sections.set('sources',section);
  }
  for(const [id,section] of sections){
    if(!course.chapters.some(c=>c[0]===id))continue;
    const controls=document.createElement('div');controls.className='study-chapter-actions';controls.innerHTML=`<label><input type="checkbox" data-chapter="${id}" ${saved.done[id]?'checked':''}> Chapitre révisé</label><a href="#overview">Sommaire</a>`;
    const heading=document.createElement('header');heading.className='study-chapter-head';
    const title=section.querySelector('h2');const kicker=section.querySelector('.kicker');const intro=section.querySelector('.section-intro');const source=section.querySelector(':scope > .source');
    const h1=document.createElement('h1');h1.innerHTML=title.innerHTML;title.replaceWith(h1);
    if(kicker)heading.append(kicker);heading.append(h1);if(intro)heading.append(intro);heading.append(controls);if(source)heading.append(source);
    const headings=[...section.querySelectorAll('h3')];
    if(headings.length){const toc=document.createElement('ul');toc.className='study-toc';toc.innerHTML=headings.map(h=>`<li><a href="#${id}/${h.id}">${esc(h.textContent)}</a></li>`).join('');heading.append(toc);}
    section.prepend(heading);
    controls.querySelector('input').onchange=e=>{saved.done[id]=e.target.checked;persist();sync();};
    const i=course.chapters.findIndex(c=>c[0]===id);const previous=course.chapters[i-1],next=course.chapters[i+1];const links=document.createElement('nav');links.className='study-next';links.setAttribute('aria-label','Navigation entre chapitres');links.innerHTML=`<a href="#${previous?.[0]||'overview'}">← ${previous?.[1]||'Toutes les fiches'}</a><a href="#${next?.[0]||'quiz'}">${next?.[1]||'Entraînement'} →</a>`;section.append(links);
  }
  function searchResults(){
    const query=normalized(search.value.trim());if(!query){render(false);return;}
    sections.forEach(s=>s.hidden=true);renderArea.hidden=false;
    const found=index.filter(item=>normalized(item.title+' '+item.text).includes(query));
    document.getElementById('study-search-count').textContent=`${found.length} résultat${found.length!==1?'s':''}`;
    renderArea.innerHTML=`<div class="study-eyebrow">Recherche</div><h1>${found.length?'Notions trouvées':'Aucun résultat'}</h1>${found.map(item=>{const at=normalized(item.text).indexOf(query);const start=Math.max(0,at-60);return `<article class="study-search-result"><a href="#${item.id}${item.anchor?'/'+item.anchor:''}">${esc(item.title)}</a><p>${esc(item.text.slice(start,start+220))}…</p></article>`;}).join('')}`;
  }
  function render(focus=true){
    if(search.value.trim()){searchResults();return;}
    const [raw,anchor]=(location.hash.slice(1)||'overview').split('/');const active=raw==='home'?'overview':raw;
    sections.forEach(s=>s.hidden=true);renderArea.hidden=false;renderArea.replaceChildren();
    if(active==='recall')recall();else if(sections.has(active)){renderArea.hidden=true;sections.get(active).hidden=false;}else renderArea.innerHTML=overview();
    document.title=`${course.title} · IÉSEG 2.0`;sync();
    if(focus){main.focus({preventScroll:true});if(anchor&&sections.get(active)?.querySelector(`[id="${CSS.escape(anchor)}"]`))document.getElementById(anchor).scrollIntoView({behavior:'instant'});else window.scrollTo({top:0,behavior:'instant'});}
  }
  search.addEventListener('input',searchResults);
  main.addEventListener('click',e=>{const link=e.target.closest('a');if(link?.getAttribute('href')?.startsWith('#')&&search.value){search.value='';document.getElementById('study-search-count').textContent='';if(link.hash===location.hash)render();}});
  window.addEventListener('hashchange',()=>{search.value='';document.getElementById('study-search-count').textContent='';render();});
  render(false);
})();
