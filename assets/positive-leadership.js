const questions = [
  {t:'task',q:'Quelle affirmation décrit le mieux le rapport entre management et leadership ?',a:['Ils sont incompatibles.','Ce sont des fonctions complémentaires qu’une même personne peut exercer.','Tout manager est nécessairement un leader efficace.','Le leadership remplace la planification.'],c:1,e:'Le PowerPoint présente leur opposition comme une fausse opposition : organiser et fiabiliser le travail peut compléter la vision, l’influence et le changement.',s:'PPT, diapo 6'},
  {t:'task',q:'Quelle activité correspond principalement au niveau « équipe » du leadership orienté tâches ?',a:['Définir la stratégie de tout le groupe.','Organiser son sommeil.','Clarifier les rôles et déléguer.','Choisir ses objectifs personnels uniquement.'],c:2,e:'La délégation, les objectifs collectifs, la communication et les décisions de groupe appartiennent au niveau équipe.',s:'PPT, diapos 8 et 22'},
  {t:'task',q:'Quelle combinaison précède l’intention dans le schéma du comportement ?',a:['Attitude, normes subjectives et contrôle comportemental perçu.','Charisme, statut et rémunération.','Émotion, humeur et performance.','Recrutement, sélection et turnover.'],c:0,e:'Le schéma relie ce que je veux faire, les attentes des autres et ce que je me sens capable de faire à mon intention, puis au comportement.',s:'PPT, diapo 21'},
  {t:'task',q:'Dans la planification stratégique du support, quelle étape suit l’analyse SWOT ?',a:['Finaliser immédiatement le plan.','Recruter tous les managers.','Attribuer les récompenses.','Identifier les enjeux prioritaires.'],c:3,e:'La séquence est : facteurs internes/externes → SWOT → enjeux prioritaires → plans d’action → finalisation du plan stratégique.',s:'PPT, diapo 24'},
  {t:'task',q:'Que désigne l’alignement horizontal dans l’analyse du système de management ?',a:['Le lien entre salaire et ancienneté seulement.','La cohérence des pratiques RH entre elles.','La position des employés dans un organigramme.','La conformité de chaque pratique à la seule culture nationale.'],c:1,e:'L’alignement horizontal relie les pratiques entre elles : sélection, formation, organisation du travail, évaluation et récompenses. L’alignement vertical les relie à la stratégie.',s:'PPT, diapos 17–18'},
  {t:'styles',q:'Un manager refuse d’arbitrer un conflit qui exige son intervention et évite de décider. Quel style est illustré ?',a:['Shared leadership.','Transformationnel.','Laissez-faire.','Transactionnel.'],c:2,e:'Le laissez-faire se caractérise par l’évitement des décisions et l’abandon des responsabilités. Ce n’est pas une délégation encadrée.',s:'Leadership, p. PDF 18'},
  {t:'styles',q:'Un responsable clarifie les rôles, fixe les objectifs et lie une prime à leur réalisation. Quel style domine ?',a:['Transactionnel.','Charismatique.','Laissez-faire.','Partagé.'],c:0,e:'Le leadership transactionnel guide vers des objectifs établis au moyen de rôles clairs et de contreparties.',s:'Leadership, p. PDF 18'},
  {t:'styles',q:'Un leader porte une vision commune, encourage à questionner les habitudes et accompagne chacun dans son développement. Quel style ?',a:['Laissez-faire.','Transactionnel uniquement.','LMX uniquement.','Transformationnel.'],c:3,e:'La vision inspirante, la stimulation intellectuelle et la considération individualisée sont des composantes du transformationnel.',s:'Leadership, p. PDF 18'},
  {t:'styles',q:'Les membres attribuent à leur leader des capacités extraordinaires et lui accordent du pouvoir. Quel concept est central ?',a:['La sécurité psychologique.','Le leadership charismatique.','La confiance dispositionnelle.','La planification budgétaire.'],c:1,e:'Le charisme repose notamment sur l’attribution par les collaborateurs de capacités exceptionnelles au leader.',s:'Leadership, p. PDF 18'},
  {t:'styles',q:'Les membres prennent tour à tour la conduite du travail et s’influencent mutuellement. Quel style cela illustre-t-il ?',a:['Laissez-faire nécessairement.','Transactionnel.','Shared leadership.','Un manque de leadership nécessairement.'],c:2,e:'Le leadership partagé distribue les rôles d’influence entre les membres. L’absence de microgestion ne signifie pas un abandon des responsabilités.',s:'Leadership, p. PDF 18'},
  {t:'styles',q:'Quelle approche explique l’efficacité par l’adéquation des traits, des comportements ET de la situation ?',a:['Les théories de contingence.','Les théories des traits seules.','Les théories comportementales seules.','Le leadership comme titre hiérarchique.'],c:0,e:'La contingence introduit explicitement le contexte : il n’existe pas de combinaison efficace indépendamment de la situation.',s:'Leadership, p. PDF 17–19'},
  {t:'lmx',q:'Quel est l’objet central de la théorie LMX ?',a:['Le classement des entreprises par taille.','La personnalité du leader uniquement.','L’égalité automatique de toutes les interactions.','La qualité variable des relations entre un leader et chaque membre.'],c:3,e:'LMX analyse les relations particulières leader-collaborateur, avec des échanges de qualité différente.',s:'Relational, p. 5–6'},
  {t:'lmx',q:'Quel ensemble caractérise plutôt une relation d’in-group ?',a:['Obligations contractuelles seulement.','Interactions fréquentes, confiance et réciprocité.','Aucune nécessité d’investir dans la relation.','Absence de responsabilité du collaborateur.'],c:1,e:'Les relations de haute qualité impliquent des interactions fréquentes et un investissement réciproque. Elles ne sont pas acquises une fois pour toutes.',s:'Relational, p. 6'},
  {t:'lmx',q:'Comment maintenir une relation de haute qualité selon le support ?',a:['Le leader doit agir seul.','Le collaborateur doit agir seul.','Les deux doivent continuer à investir dans la relation.','Le statut d’in-group suffit définitivement.'],c:2,e:'Le support insiste sur la continuité de l’investissement du leader et du membre pour maintenir la relation.',s:'Relational, p. 6'},
  {t:'trust',q:'Faire confiance à une personne encore inconnue parce que l’on fait généralement confiance aux gens relève surtout de…',a:['La confiance dispositionnelle.','La confiance affective déjà établie.','La compétence technique de cette personne.','La sécurité psychologique de l’équipe.'],c:0,e:'La confiance dispositionnelle provient de la propension générale à faire confiance, avant une connaissance approfondie de l’autre.',s:'Relational, p. 9–10'},
  {t:'trust',q:'Un collaborateur pense : « Ma responsable a les compétences pour résoudre ce problème. » Quel pilier évalue-t-il ?',a:['Benevolence.','Integrity.','L’humeur.','Ability.'],c:3,e:'Ability renvoie aux connaissances et compétences techniques et interpersonnelles.',s:'Leadership, p. PDF 39'},
  {t:'trust',q:'« Elle se soucie de mes intérêts et me soutient. » Quel pilier de confiance ?',a:['Ability.','Benevolence.','L’intensité.','L’extraversion.'],c:1,e:'La bienveillance correspond au souci des intérêts de l’autre et aux comportements de soutien.',s:'Leadership, p. PDF 39'},
  {t:'trust',q:'« Il tient parole et ses actes correspondent à ses déclarations. » Quel pilier ?',a:['L’affect positif uniquement.','La confiance dispositionnelle.','Integrity.','La curiosité.'],c:2,e:'L’intégrité associe honnêteté, vérité et cohérence entre paroles et actes.',s:'Leadership, p. PDF 39'},
  {t:'trust',q:'Une personne ose signaler une erreur et contredire une idée dominante sans peur d’être punie. Cela illustre surtout…',a:['La sécurité psychologique.','La disparition des exigences de performance.','La seule confiance dispositionnelle.','Le laissez-faire.'],c:0,e:'La sécurité psychologique permet de prendre des risques interpersonnels dans l’équipe. Elle n’est pas une absence d’exigence.',s:'Relational, p. 14'},
  {t:'trust',q:'Quel comportement a un effet sur la confiance qui varie davantage selon les contextes culturels dans le support ?',a:['La constance comportementale.','La communication exacte et ouverte.','La manifestation de sollicitude.','Le partage et la délégation du contrôle.'],c:3,e:'Le support présente le partage du contrôle comme l’exception parmi les cinq comportements pour la généralisation aux différentes régions culturelles.',s:'Relational, p. 13'},
  {t:'motivation',q:'Quelles dimensions de l’effort la motivation détermine-t-elle ?',a:['Statut, âge et salaire.','Direction, intensité et persistance.','Confiance, intégrité et humeur.','Pouvoir, titre et ancienneté.'],c:1,e:'Direction : quoi faire ; intensité : avec quel effort ; persistance : pendant combien de temps.',s:'Relational, p. 16'},
  {t:'motivation',q:'Une personne apprécie une mission parce que le problème est intéressant à résoudre. Quel motif est illustré ?',a:['EM.','PM uniquement.','IM.','Aucun motif.'],c:2,e:'Le plaisir et l’intérêt de l’activité elle-même correspondent à la motivation intrinsèque.',s:'Relational, p. 17'},
  {t:'motivation',q:'Travailler pour obtenir une promotion ou éviter une sanction correspond principalement à…',a:['EM, la motivation extrinsèque.','IM, la motivation intrinsèque.','PM, la motivation prosociale.','L’affect-based trust.'],c:0,e:'La motivation extrinsèque vise des conséquences externes, positives ou négatives, sociales ou organisationnelles.',s:'Relational, p. 17'},
  {t:'motivation',q:'Un collaborateur s’investit parce qu’il veut améliorer la vie des bénéficiaires de son travail. Quel motif ?',a:['La motivation extrinsèque seulement.','Le leadership charismatique.','La confiance cognitive.','La motivation prosociale.'],c:3,e:'La motivation prosociale correspond au désir de faire bénéficier les autres de son effort.',s:'Relational, p. 17–18'},
  {t:'motivation',q:'Quelle affirmation sur les profils motivationnels est conforme au cours ?',a:['Une personne ne peut avoir qu’un motif.','Les motifs peuvent coexister et le profil évoluer.','Le salaire est toujours le levier le plus efficace.','Un discours enthousiaste remplace l’analyse des motifs.'],c:1,e:'Le leader doit comprendre la combinaison de motifs de chaque personne. Le support décrit PM comme la plus stable et EM comme la moins stable.',s:'Relational, p. 18–19'},
  {t:'emotions',q:'Quel énoncé décrit plutôt une humeur qu’une émotion ?',a:['Une peur intense liée à un événement précis.','Une colère brève dirigée vers quelqu’un.','Un état diffus, moins intense et plus durable.','Une surprise immédiate.'],c:2,e:'L’humeur dure plus longtemps, est moins intense et n’a pas forcément un déclencheur clairement identifié.',s:'Relational, p. 21'},
  {t:'emotions',q:'Où placer la sérénité dans la grille des affects ?',a:['Valence agréable, activation faible.','Valence agréable, activation forte.','Valence désagréable, activation forte.','Valence désagréable, activation faible.'],c:0,e:'La sérénité est agréable mais peu activée, contrairement à l’enthousiasme.',s:'Relational, p. 23'},
  {t:'emotions',q:'Quelle affirmation restitue la nuance du cours sur les émotions positives ?',a:['Elles garantissent la performance dans toute tâche.','Elles n’ont aucun lien avec les relations.','Leur effet est toujours identique à celui des primes.','Le lien avec la performance de tâche est faible ; les liens relationnels et avec la créativité sont plus marqués.'],c:3,e:'Le support distingue performance de tâche, résultats relationnels, créativité et proactivité. Une généralisation à toute performance serait excessive.',s:'Relational, p. 24'},
  {t:'emotions',q:'Quel est l’ordre des quatre étapes d’intelligence émotionnelle ?',a:['Relationship management → Self-management → Social awareness → Self-awareness.','Self-awareness → Self-management → Social awareness → Relationship management.','Social awareness → Relationship management → Self-awareness → Self-management.','Self-management → Relationship management → Self-awareness → Social awareness.'],c:1,e:'Le schéma présente d’abord la conscience de soi, puis la gestion de soi, la conscience sociale et enfin la gestion des relations.',s:'Relational, p. 26'},
  {t:'emotions',q:'Quelle proposition correspond aux leçons du support sur la contagion émotionnelle ?',a:['Les émotions positives sont toujours les plus contagieuses.','Les émotions n’influencent pas les interactions futures.','Les émotions négatives sont plus contagieuses et une trace émotionnelle peut persister.','Les détails factuels sont toujours mieux retenus que les sentiments.'],c:2,e:'Les réactions émotionnelles peuvent survivre au souvenir précis de l’interaction. Le support souligne aussi la plus forte contagion des émotions négatives.',s:'Relational, p. 24 et 27'}
];

const $ = id => document.getElementById(id);
let deck = [], index = 0, score = 0, missed = [], answered = false;

function startQuiz(onlyMissed){
  const topic = $('quizTopic').value;
  deck = onlyMissed ? [...onlyMissed] : questions.filter(q => topic === 'all' || q.t === topic);
  index = 0; score = 0; missed = [];
  $('quizRun').hidden = false;
  $('quizResult').hidden = true;
  $('quizProgress').max = deck.length;
  renderQuestion();
}

function renderQuestion(){
  answered = false;
  const q = deck[index];
  $('quizPosition').textContent = `Question ${index + 1} / ${deck.length}`;
  $('quizScore').textContent = `${score} bonne${score === 1 ? '' : 's'} réponse${score === 1 ? '' : 's'}`;
  $('quizProgress').value = index;
  $('quizQuestion').textContent = q.q;
  $('quizFeedback').hidden = true;
  $('quizFeedback').replaceChildren();
  $('nextQuestion').disabled = true;
  $('nextQuestion').textContent = index === deck.length - 1 ? 'Voir mon résultat' : 'Question suivante';
  $('quizAnswers').replaceChildren();
  q.a.forEach((label, answerIndex) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'answer';
    const letter = document.createElement('span');
    letter.className = 'answer-letter'; letter.textContent = String.fromCharCode(65 + answerIndex); letter.setAttribute('aria-hidden','true');
    const text = document.createElement('span'); text.textContent = label;
    button.append(letter,text);
    button.addEventListener('click',() => answerQuestion(answerIndex));
    $('quizAnswers').append(button);
  });
  $('quizQuestion').focus({preventScroll:true});
}

function answerQuestion(choice){
  if(answered) return;
  answered = true;
  const q = deck[index];
  const correct = choice === q.c;
  if(correct) score++; else missed.push(q);
  [...$('quizAnswers').children].forEach((button,i) => {
    button.disabled = true;
    if(i === q.c) button.classList.add('correct');
    if(i === choice && !correct) button.classList.add('wrong');
  });
  const feedback = $('quizFeedback');
  feedback.hidden = false;
  const title = document.createElement('strong');
  title.textContent = correct ? 'Bonne réponse. ' : `Réponse correcte : ${String.fromCharCode(65+q.c)}. `;
  feedback.append(title,document.createTextNode(q.e+' '));
  const source = document.createElement('div'); source.className = 'source'; source.textContent = q.s;
  const link = document.createElement('a'); link.href = '#'+q.t; link.textContent = 'Revoir la notion';
  feedback.append(source,link);
  $('quizScore').textContent = `${score} / ${index+1} correct`;
  $('quizProgress').value = index + 1;
  $('nextQuestion').disabled = false;
}

$('startQuiz').addEventListener('click',() => startQuiz());
$('restartQuiz').addEventListener('click',() => startQuiz());
$('retryMissed').addEventListener('click',() => {if(missed.length) startQuiz(missed);});
$('nextQuestion').addEventListener('click',() => {
  if(!answered) return;
  index++;
  if(index < deck.length){renderQuestion();return;}
  $('quizRun').hidden = true;
  $('quizResult').hidden = false;
  $('finalScore').textContent = `${score} / ${deck.length}`;
  $('resultMessage').textContent = missed.length ? `${missed.length} notion${missed.length === 1 ? '' : 's'} à revoir. Tu peux reprendre uniquement les questions manquées.` : 'Toutes les réponses sont correctes.';
  $('retryMissed').hidden = !missed.length;
  $('quizResult').focus({preventScroll:true});
});
