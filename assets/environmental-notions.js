/* One-sentence memory cues drawn from the six existing course chapters. */
const ENV_NOTIONS = [
  {id:'fondamentaux',title:'Durabilité & limites planétaires',groups:[
    {title:'Les bases',source:'sustainability',items:[
      ['Environmental management','Organiser l’activité pour réduire ses impacts environnementaux et s’adapter aux transformations de l’environnement.'],
      ['Weak sustainability · durabilité faible','Le capital naturel peut être remplacé par du capital humain ou produit si le capital total est maintenu.'],
      ['Strong sustainability · durabilité forte','Le capital naturel critique n’est pas substituable et doit être préservé.'],
      ['Critical natural capital','Fonctions et ressources naturelles essentielles que les autres formes de capital ne peuvent pas remplacer.'],
      ['Triple Bottom Line · 3P','Évaluer la performance selon People, Planet et Profit : personnes, planète et résultat économique.'],
      ['Économie encastrée','L’économie dépend de la société, elle-même dépendante de la biosphère.']
    ]},
    {title:'Matérialité',source:'materiality',items:[
      ['Financial materiality · outside-in','Les enjeux environnementaux et sociaux influencent la situation financière de l’entreprise.'],
      ['Impact materiality · inside-out','L’entreprise affecte les personnes et l’environnement par ses activités et sa chaîne de valeur.'],
      ['Double materiality','Un sujet est matériel selon la perspective financière, la perspective d’impact, ou les deux.'],
      ['Dynamic materiality','Un impact environnemental ou social peut devenir un risque financier au fil du temps.']
    ]},
    {title:'Les 9 planetary boundaries',source:'boundaries',items:[
      ['Planetary boundaries','Neuf processus du système Terre délimitant un espace de fonctionnement sûr pour l’humanité.'],
      ['1 · Climate change','Perturbation du climat suivie notamment par la concentration de CO₂ et le forçage radiatif.'],
      ['2 · Biosphere integrity','Préservation de la diversité génétique et du fonctionnement des écosystèmes.'],
      ['3 · Land-system change','Transformation de la couverture des terres, notamment conversion des forêts.'],
      ['4 · Freshwater change','Perturbation de l’eau bleue des rivières et nappes et de l’eau verte des sols.'],
      ['5 · Biogeochemical flows','Perturbation des cycles de l’azote et du phosphore, notamment par les engrais.'],
      ['6 · Ocean acidification','Le CO₂ dissous acidifie l’océan et réduit la disponibilité des carbonates pour les organismes calcaires.'],
      ['7 · Novel entities','Introduction de substances et matériaux nouveaux, notamment produits chimiques et plastiques.'],
      ['8 · Stratospheric ozone depletion','Diminution de la couche d’ozone qui protège le vivant des ultraviolets.'],
      ['9 · Atmospheric aerosol loading','Présence de particules atmosphériques modifiant notamment le climat et les précipitations.']
    ]},
    {title:'Systèmes & justice',source:'justice',items:[
      ['Positive feedback','Boucle qui amplifie une perturbation, sans que « positive » signifie bénéfique.'],
      ['Negative feedback','Boucle qui atténue une perturbation.'],
      ['Tipping point','Seuil au-delà duquel un changement de régime peut devenir difficilement réversible.'],
      ['Safe and just boundaries','Limites combinant stabilité du système Terre et prévention des dommages significatifs aux êtres vivants et aux personnes.'],
      ['3I · Interspecies justice','Prendre en compte les autres espèces dans les décisions.'],
      ['3I · Intergenerational justice','Répartir les responsabilités et préserver les possibilités des générations futures.'],
      ['3I · Intragenerational justice','Répartir équitablement les risques, ressources et bénéfices entre les personnes vivant aujourd’hui.'],
      ['Environmental justice','Examiner l’exposition aux nuisances, la répartition des coûts et bénéfices, et l’accès à l’information et à la participation.'],
      ['Triple inégalité climatique','Les plus pauvres contribuent moins au problème, subissent proportionnellement davantage de pertes et disposent de moins de moyens d’action.']
    ]},
    {title:'Ressources communes & Fishbanks',source:'fishbanks-analysis',items:[
      ['Stock / flow','Le stock est la quantité disponible ; un flux l’augmente ou la diminue au cours du temps.'],
      ['Regeneration rate','Vitesse de renouvellement d’une ressource, qui limite les prélèvements durables.'],
      ['Tragedy of the commons','Des décisions individuellement avantageuses conduisent à la surexploitation d’une ressource commune.'],
      ['Path dependency','Les décisions passées enferment progressivement l’activité dans une trajectoire difficile à modifier.'],
      ['Sunk costs','Coûts déjà engagés et irrécupérables pouvant inciter à poursuivre une activité devenue non viable.'],
      ['MSY · Maximum Sustainable Yield','Capture moyenne maximale compatible avec la productivité à long terme d’un stock dans des conditions données.'],
      ['Catch per unit effort','Captures rapportées à l’effort de pêche, dont la baisse peut révéler la dégradation du stock.'],
      ['Fishbanks','Simulation montrant que profits et investissement dans les navires ne garantissent pas la préservation du stock de poissons.']
    ]}
  ]},
  {id:'biodiversite',title:'Biodiversité & dépendances à la nature',groups:[
    {title:'Les bases',source:'biodiversity',items:[
      ['Biodiversity','Diversité du vivant à trois niveaux : gènes, espèces et écosystèmes.'],
      ['Genetic diversity','Variété génétique au sein d’une espèce.'],
      ['Species diversity','Variété des espèces présentes dans un milieu.'],
      ['Ecosystem diversity','Variété des écosystèmes et de leurs interactions.'],
      ['Direct drivers','Pressions agissant directement sur la biodiversité.'],
      ['Indirect drivers','Causes sous-jacentes des pressions : consommation, production, commerce, démographie, gouvernance et valeurs.']
    ]},
    {title:'Les 5 direct drivers · IPBES',source:'biodiversity',items:[
      ['1 · Land and sea-use change','Transformation, destruction ou fragmentation des habitats terrestres et marins.'],
      ['2 · Direct exploitation','Prélèvement d’organismes vivants supérieur à leur renouvellement.'],
      ['3 · Climate change','Modification des températures et précipitations qui perturbe les espèces et leurs habitats.'],
      ['4 · Pollution','Dégradation des milieux par des substances ou nuisances, notamment produits toxiques, nutriments, bruit et lumière.'],
      ['5 · Invasive alien species','Espèces introduites hors de leur aire naturelle qui menacent les espèces et écosystèmes locaux.']
    ]},
    {title:'Capital naturel & services',source:'ecosystem-services',items:[
      ['Natural capital','Stocks de composants naturels qui soutiennent les fonctions écologiques et les bénéfices pour les sociétés.'],
      ['Ecosystem services','Bénéfices que les personnes et les activités tirent du fonctionnement des écosystèmes.'],
      ['Provisioning services','Biens fournis par la nature, comme eau, nourriture, bois et fibres.'],
      ['Regulating services','Processus régulant les conditions de vie, comme pollinisation, climat et purification de l’eau.'],
      ['Cultural services','Bénéfices non matériels, comme récréation, éducation, identité et spiritualité.'],
      ['Supporting services','Fonctions permettant les autres services, comme formation des sols et cycles nutritifs.'],
      ['Dependency','Besoin d’un service écosystémique pour réaliser une activité économique.'],
      ['Impact / pressure','Une pression exercée par l’activité peut modifier l’état de la nature et produire un impact.'],
      ['Upstream / downstream','L’amont concerne les fournisseurs ; l’aval concerne les activités suivant l’entreprise, notamment usage et fin de vie.']
    ]},
    {title:'ENCORE',source:'encore-taxonomy',items:[
      ['ENCORE','Exploring Natural Capital Opportunities, Risks and Exposure : outil de repérage sectoriel des dépendances et pressions sur la nature.'],
      ['ISIC','Classification des activités économiques en sections, divisions, groupes et classes.'],
      ['Dependency pathway','Activité économique → service écosystémique → composants naturels nécessaires.'],
      ['Impact pathway','Activité économique → pression → changement d’état → composants naturels affectés.'],
      ['VL / L / M / H / VH','Niveaux potentiels de matérialité, de très faible à très élevé, et non mesures d’un dommage réel.'],
      ['Les 8 composants naturels','Atmosphère, géomorphologie terrestre, minéraux, géomorphologie océanique, sols et sédiments, espèces, intégrité structurelle et biotique, eau.'],
      ['ENCORE · 4 services d’approvisionnement','Biomasse, ressources génétiques, eau et énergie animale.'],
      ['ENCORE · 17 services de régulation','Climat mondial, climat local, pluies sous-continentales, filtration de l’air, qualité du sol, rétention des sols/sédiments, remédiation des déchets solides, purification de l’eau, débits, crues, tempêtes, bruit, pollinisation, contrôle biologique, habitats/nurseries, dilution et atténuation d’impacts sensoriels.'],
      ['ENCORE · 4 services culturels','Récréation, agrément visuel, éducation/science et services spirituels, artistiques et symboliques.'],
      ['ENCORE · 13 pressions','Perturbations bruit/lumière, surfaces d’eau douce, de fonds marins et de terres utilisées, GES, autres polluants atmosphériques, extractions biotiques et abiotiques, déchets solides, polluants toxiques eau/sol, nutriments eau/sol, volume d’eau utilisé et espèces envahissantes.'],
      ['Limite d’ENCORE','Un repérage sectoriel doit être complété par des données locales sur les sites, les volumes et l’état des écosystèmes.']
    ]},
    {title:'Cadres & acronymes',source:'nature-frameworks',items:[
      ['IPBES','Plateforme intergouvernementale évaluant les connaissances scientifiques sur la biodiversité et les services écosystémiques.'],
      ['CBD','Convention sur la diversité biologique : conservation, usage durable et partage équitable des avantages des ressources génétiques.'],
      ['Kunming-Montréal GBF · Target 15','Objectif portant sur l’évaluation et la divulgation des dépendances, impacts et risques des entreprises et institutions financières.'],
      ['CSRD / ESRS','Cadre européen de reporting de durabilité et standards associés fondés sur la double matérialité.'],
      ['ESRS E4','Standard consacré à la biodiversité et aux écosystèmes.'],
      ['SFDR','Cadre de transparence sur la durabilité des acteurs et produits financiers.'],
      ['Article 29 · loi Énergie-Climat','Reporting climat, biodiversité et ESG des investisseurs institutionnels et sociétés de gestion présenté dans le cours.'],
      ['EU Nature Restoration Law','Cadre européen visant la restauration des écosystèmes dégradés.'],
      ['TNFD','Recommandations de gestion et de divulgation des dépendances, impacts, risques et opportunités liés à la nature.'],
      ['TNFD · 4 piliers','Gouvernance, stratégie, gestion des risques et impacts, métriques et cibles.'],
      ['LEAP','Locate : localiser ; Evaluate : évaluer dépendances et impacts ; Assess : analyser risques et opportunités ; Prepare : préparer réponse et reporting.'],
      ['GRI','Standards de reporting centrés sur les impacts de l’organisation sur l’économie, l’environnement et les personnes.'],
      ['CDP','Dispositif de divulgation d’informations environnementales des entreprises.'],
      ['ISSB / SASB / TCFD','Référentiels cités dans le cours pour leur perspective sur les informations de durabilité ou climatiques utiles aux investisseurs.'],
      ['ESG','Environmental, Social and Governance : critères environnementaux, sociaux et de gouvernance.']
    ]}
  ]},
  {id:'scenarios',title:'Scénarios climatiques & neutralité',groups:[
    {title:'Lire un scénario',source:'rcp',items:[
      ['Weather / climate','La météo décrit le court terme ; le climat décrit la distribution des conditions sur des périodes longues.'],
      ['Climate scenario','Futur cohérent construit à partir d’hypothèses, et non prévision certaine.'],
      ['Exploratory scenario','Explorer ce qui pourrait se produire à partir d’hypothèses de départ.'],
      ['Normative scenario','Partir d’un objectif pour identifier les transformations nécessaires pour l’atteindre.'],
      ['SSP · Shared Socioeconomic Pathway','Récit de développement décrivant population, économie, institutions, inégalités, technologies et modes de vie.'],
      ['RCP · Representative Concentration Pathway','Trajectoire de concentrations de GES et de forçage radiatif.'],
      ['Radiative forcing','Modification du bilan énergétique terrestre, exprimée en W/m².'],
      ['SSPx-y','Le premier nombre désigne le récit socioéconomique ; le second le forçage radiatif vers 2100, pas une température.'],
      ['Paris Agreement','Objectif de réchauffement bien inférieur à 2 °C et poursuite des efforts vers 1,5 °C à long terme.'],
      ['NDC · Nationally Determined Contribution','Engagement climatique national soumis dans le cadre de l’Accord de Paris.']
    ]},
    {title:'Les 5 SSP',source:'ssp',items:[
      ['SSP1 · Sustainability','Coopération, sobriété et inclusion : faibles défis d’atténuation et d’adaptation.'],
      ['SSP2 · Middle of the Road','Poursuite des tendances avec progrès inégaux : défis intermédiaires d’atténuation et d’adaptation.'],
      ['SSP3 · Regional Rivalry','Fragmentation et faible coopération : défis élevés d’atténuation et d’adaptation.'],
      ['SSP4 · Inequality','Fortes inégalités entre élites et populations vulnérables : faibles défis d’atténuation, élevés d’adaptation.'],
      ['SSP5 · Fossil-fueled Development','Développement riche et technologique mais fossile : défis élevés d’atténuation, faibles d’adaptation dans les hypothèses socioéconomiques.'],
      ['Les 5 trajectoires illustratives AR6','SSP1-1.9, SSP1-2.6, SSP2-4.5, SSP3-7.0 et SSP5-8.5 vont de très faibles à très fortes émissions.']
    ]},
    {title:'Indicateurs d’émissions',source:'emissions-reading',items:[
      ['Annual absolute emissions','Quantité totale émise pendant une année.'],
      ['Per-capita emissions','Émissions divisées par le nombre d’habitants.'],
      ['Cumulative emissions','Somme des émissions sur une période historique définie.'],
      ['Territorial emissions','Émissions produites sur un territoire donné.'],
      ['Consumption footprint','Émissions attribuées à la demande finale, en tenant compte des échanges commerciaux.']
    ]},
    {title:'Net zero & retraits',source:'net-zero',items:[
      ['Net zero CO₂','Émissions anthropiques de CO₂ équilibrées par les retraits anthropiques de CO₂ sur une période définie.'],
      ['Net zero GHG','Émissions et retraits de l’ensemble des GES équilibrés selon une métrique commune.'],
      ['Net negative emissions','Les retraits atmosphériques dépassent les émissions.'],
      ['Residual emissions','Émissions restant après des réductions profondes.'],
      ['Avoided emissions','Émissions non produites par rapport à un scénario de référence, sans retrait du CO₂ déjà présent dans l’air.'],
      ['CDR · Carbon Dioxide Removal','Retrait du CO₂ atmosphérique et stockage durable.'],
      ['Reforestation / restoration','Retrait de carbone par la croissance de la biomasse et la restauration des écosystèmes.'],
      ['Soil carbon / biochar','Stockage de carbone dans les sols ou sous une forme carbonée plus stable.'],
      ['BECCS','Utilisation de biomasse associée à la capture et au stockage géologique du CO₂.'],
      ['DACCS','Capture directe du CO₂ dans l’air suivie de son stockage.'],
      ['Enhanced weathering','Altération accélérée de minéraux par des réactions consommant du CO₂.'],
      ['Permanence','Durée et robustesse du stockage face au risque de relargage du carbone.'],
      ['Overshoot','Dépassement temporaire d’un seuil de réchauffement avant un retour ultérieur, sans garantie d’annuler les dommages.'],
      ['CCKP','Climate Change Knowledge Portal de la Banque mondiale : outil de comparaison des projections climatiques par territoire, scénario et horizon.'],
      ['En-ROADS','Simulateur reliant des leviers mondiaux de politique climatique à des trajectoires d’émissions et de température.']
    ]}
  ]},
  {id:'carbone',title:'Comptabilité & stratégie carbone',groups:[
    {title:'Gaz, unités & périmètres',source:'ghg-basics',items:[
      ['GHG / GES','Greenhouse gases / gaz à effet de serre contribuant au réchauffement de l’atmosphère.'],
      ['CO₂','Dioxyde de carbone provenant notamment des combustibles fossiles, du ciment et des changements d’usage des terres.'],
      ['CH₄','Méthane provenant notamment de l’élevage, de la riziculture, des déchets et des fuites d’hydrocarbures.'],
      ['N₂O','Protoxyde d’azote provenant notamment des engrais et de procédés chimiques.'],
      ['Fluorinated gases','Gaz fluorés utilisés notamment en réfrigération, climatisation et procédés industriels.'],
      ['GWP / PRG','Pouvoir réchauffant d’un gaz relativement au CO₂ pour un horizon donné.'],
      ['CO₂ equivalent · CO₂e','Masse de CO₂ équivalente calculée par masse du gaz × PRG.'],
      ['BEGES / carbon inventory','Inventaire des émissions directes et indirectes d’une organisation sur un périmètre et une période définis.'],
      ['Organizational boundary','Entités et activités intégrées à l’inventaire selon le contrôle ou la participation.'],
      ['Operational boundary','Sources directes et indirectes d’émissions retenues dans l’inventaire.'],
      ['Power / energy','La puissance est un débit d’énergie ; énergie = puissance × durée.'],
      ['Primary / final energy','L’énergie primaire est disponible avant conversion ; l’énergie finale est livrée à l’utilisateur.']
    ]},
    {title:'Les 3 scopes',source:'scopes',items:[
      ['Scope 1','Émissions directes de sources détenues ou contrôlées : combustion, procédés et fuites.'],
      ['Scope 2','Émissions indirectes de production de l’électricité, vapeur, chaleur ou froid achetés et consommés.'],
      ['Scope 3','Autres émissions indirectes de la chaîne de valeur, en amont et en aval.'],
      ['Fugitive emissions','Rejets involontaires de gaz, comme les fuites de réfrigérants.'],
      ['GHG Protocol','Référentiel de comptabilité GES distinguant notamment trois scopes et quinze catégories de scope 3.']
    ]},
    {title:'Les 15 catégories du scope 3',source:'scope3-categories',items:[
      ['1 · Purchased goods and services','Émissions amont des biens et services achetés.'],
      ['2 · Capital goods','Émissions amont des biens d’équipement acquis.'],
      ['3 · Fuel- and energy-related activities','Émissions liées aux combustibles et à l’énergie non incluses dans les scopes 1 et 2.'],
      ['4 · Upstream transportation and distribution','Transport et distribution amont ainsi que prestations de transport achetées couvertes par cette catégorie.'],
      ['5 · Waste generated in operations','Traitement externalisé des déchets issus des opérations.'],
      ['6 · Business travel','Déplacements professionnels réalisés dans des moyens de transport non détenus ou contrôlés.'],
      ['7 · Employee commuting','Trajets des salariés entre domicile et lieu de travail.'],
      ['8 · Upstream leased assets','Exploitation des actifs loués par l’entreprise, hors scopes 1 et 2.'],
      ['9 · Downstream transportation and distribution','Transport et distribution aval non pris en charge dans les catégories précédentes.'],
      ['10 · Processing of sold products','Transformation des produits intermédiaires vendus par d’autres entreprises.'],
      ['11 · Use of sold products','Émissions liées à l’usage des produits vendus pendant leur durée de vie.'],
      ['12 · End-of-life treatment of sold products','Traitement en fin de vie des produits vendus.'],
      ['13 · Downstream leased assets','Exploitation des actifs appartenant à l’entreprise et loués à d’autres, hors scopes 1 et 2.'],
      ['14 · Franchises','Émissions d’exploitation des franchises hors scopes 1 et 2 de l’entreprise déclarante.'],
      ['15 · Investments','Émissions associées aux investissements non incluses dans les scopes 1 et 2.']
    ]},
    {title:'Données & formules',source:'carbon-data',items:[
      ['Activity data','Quantité d’activité émettrice mesurée en litres, kWh, tonnes, kilomètres ou autres unités adaptées.'],
      ['Emission factor · FE','Quantité de GES par unité d’activité, exprimée dans une unité compatible avec la donnée utilisée.'],
      ['Calcul carbone','Émissions = donnée d’activité × facteur d’émission ; le total additionne les postes dans la même unité.'],
      ['Primary / secondary data','Les données primaires décrivent l’activité étudiée ; les secondaires viennent de bases, moyennes ou estimations externes.'],
      ['Monetary emission factor','Ratio permettant d’estimer des émissions à partir de dépenses, généralement moins précis qu’une donnée physique adaptée.'],
      ['Tonne-kilometre · t.km','Masse transportée en tonnes × distance parcourue en kilomètres.'],
      ['Carbon intensity','Émissions rapportées à une unité de produit, de service ou d’activité.'],
      ['Absolute reduction','Baisse du total des émissions, à distinguer d’une simple baisse des émissions par unité.'],
      ['Volume × intensity','Les émissions totales dépendent à la fois du volume d’activité et de l’intensité carbone.'],
      ['Reductions on the same base','Deux réductions successives a et b donnent 1 − (1 − a) × (1 − b), et non automatiquement a + b.'],
      ['Linear target · exercice Kiloutou','Réduction annuelle de 2,5 % de la base 2025 : Eₜ = E₂₀₂₅ × [1 − 0,025 × (t − 2025)].'],
      ['Life-cycle perspective','Comparer les impacts de la production à la fin de vie pour une même fonction rendue.'],
      ['Kiloutou','Activité consistant à compléter le bilan, intégrer l’usage des produits vendus et comparer les actions à une trajectoire de réduction.']
    ]},
    {title:'Agir & comptabiliser séparément',source:'nzi',items:[
      ['Sobriety · sobriété','Réduire les besoins et volumes d’activités mobilisant énergie et ressources.'],
      ['Efficiency · efficacité','Réduire les ressources nécessaires pour une même fonction ou unité produite.'],
      ['Substitution','Remplacer une énergie, matière ou technologie par une alternative à impacts plus faibles dans le périmètre étudié.'],
      ['SBTi','Science Based Targets initiative : méthodes de définition et de validation de cibles climatiques alignées sur la science.'],
      ['NZI · Net Zero Initiative','Cadre de contribution à la neutralité mondiale distinguant trois comptes non soustractibles.'],
      ['NZI A · Induced emissions','Réduire les émissions de sa propre chaîne de valeur, scopes 1, 2 et 3.'],
      ['NZI B · Avoided emissions','Contribuer à réduire les émissions des autres par rapport à une référence.'],
      ['NZI C · Removed emissions','Développer les retraits atmosphériques et les puits de carbone.'],
      ['Carbon credit','Unité représentant une réduction ou un retrait selon un dispositif donné, et non automatiquement une neutralisation de ses émissions.'],
      ['KPI','Indicateur de suivi des résultats d’une action par rapport à une cible.'],
      ['Greenwashing','Communication présentant une performance environnementale plus favorable que ne le justifient les preuves.']
    ]}
  ]},
  {id:'adaptation',title:'Adaptation & risques climatiques',groups:[
    {title:'Les bases',source:'mitigation-adaptation',items:[
      ['Mitigation · atténuation','Réduire les causes du changement climatique en diminuant les émissions ou en renforçant les puits.'],
      ['Adaptation','S’ajuster au climat observé ou attendu pour réduire les dommages et saisir certaines opportunités.'],
      ['Resilience','Capacité à faire face à une perturbation en préservant ou réorganisant les fonctions essentielles.'],
      ['Incremental adaptation','Adapter le système sans changer ses caractéristiques fondamentales.'],
      ['Transformational adaptation','Modifier les attributs fondamentaux du système, de l’activité ou de sa localisation.'],
      ['Maladaptation','Action d’adaptation qui accroît les risques, les émissions, les inégalités ou la vulnérabilité pour soi ou pour d’autres.']
    ]},
    {title:'Risques & diagnostic',source:'risk-types',items:[
      ['Acute physical risk','Risque lié à un événement extrême, comme crue, tempête, canicule ou incendie.'],
      ['Chronic physical risk','Risque lié à une évolution durable du climat, comme la montée des eaux ou le réchauffement moyen.'],
      ['Transition risk','Risque résultant des transformations vers une économie bas-carbone.'],
      ['Policy / legal risk','Effets des normes, prix du carbone, politiques publiques et contentieux.'],
      ['Technology risk','Obsolescence ou pertes liées aux substitutions et innovations technologiques.'],
      ['Market risk','Évolution de la demande, des prix des intrants et des préférences des clients.'],
      ['Reputation risk','Perte de confiance ou de légitimité liée aux pratiques et engagements climatiques.'],
      ['Stranded asset','Actif perdant sa valeur économique avant la fin prévue de sa durée de vie.'],
      ['Hazard · aléa','Événement ou tendance climatique susceptible de provoquer un dommage.'],
      ['Exposure · exposition','Présence de personnes, d’actifs ou d’activités dans une situation où ils peuvent être touchés.'],
      ['Vulnerability · vulnérabilité','Propension à subir des dommages, liée à la sensibilité et au manque de capacité d’adaptation.'],
      ['Sensitivity','Degré auquel une activité ou un actif est affecté par un aléa.'],
      ['Adaptive capacity','Moyens et aptitudes permettant de s’ajuster, de répondre et de limiter les dommages.'],
      ['Cascading risks','Propagation d’un choc entre activités, infrastructures et maillons de la chaîne de valeur.'],
      ['Climate opportunities','Opportunités d’efficacité des ressources, d’énergie, de produits/services, de marchés et de résilience.']
    ]},
    {title:'Options d’adaptation',source:'adaptation-options',items:[
      ['Structural / technical adaptation','Modifier les infrastructures, équipements ou procédés pour réduire les dommages.'],
      ['Ecological adaptation','Protéger ou restaurer les fonctions des écosystèmes pour faire face aux effets du climat.'],
      ['Social / informational adaptation','Agir par la formation, la santé, l’information, les horaires et la préparation aux crises.'],
      ['Institutional / economic adaptation','Agir par les règles, la coordination, l’assurance, les incitations et le financement.'],
      ['Nature-based Solutions · NbS','Protection, restauration ou gestion des écosystèmes répondant à un défi sociétal avec des bénéfices pour la biodiversité et le bien-être.'],
      ['Robust decision','Décision restant pertinente dans plusieurs scénarios plutôt que seulement dans un futur supposé certain.'],
      ['Climate lock-in','Choix durable qui enferme une activité dans une forte dépendance carbone ou une vulnérabilité difficile à corriger.']
    ]},
    {title:'Scénarios & outils de transition',source:'tracc',items:[
      ['TRACC','Trajectoire française de référence pour l’adaptation ; le repère du cours est +4 °C en France métropolitaine en 2100.'],
      ['Transition scenario','Récit des transformations possibles de la société, de l’énergie et de l’économie.'],
      ['ADEME S1 · Génération frugale','Neutralité recherchée principalement par sobriété, proximité et transformation des usages.'],
      ['ADEME S2 · Coopérations territoriales','Neutralité fondée sur la coordination territoriale, la sobriété et l’efficacité.'],
      ['ADEME S3 · Technologies vertes','Neutralité fondée davantage sur l’innovation et l’efficacité technologique.'],
      ['ADEME S4 · Pari réparateur','Maintien d’une consommation forte avec un recours important aux technologies et aux puits de carbone.'],
      ['négaWatt','Démarche associant sobriété, efficacité énergétique et énergies renouvelables.'],
      ['ACT · Assessing low-Carbon Transition','Cadre portant sur la transition bas-carbone des entreprises.'],
      ['ACT Step-by-Step · 5 étapes','Situation actuelle → enjeux et défis → vision → nouvelle stratégie → plan d’action.'],
      ['Risk matrix','Outil de priorisation selon possibilité et impact, qui ne remplace pas un test de robustesse dans plusieurs scénarios.']
    ]}
  ]},
  {id:'circularite',title:'Business models & économie circulaire',groups:[
    {title:'Valeur & parties prenantes',source:'business-model',items:[
      ['Business model','Logique par laquelle une organisation propose, crée, délivre et capte de la valeur.'],
      ['Value proposition','Valeur proposée et besoins auxquels l’organisation répond.'],
      ['Value creation & delivery','Ressources, activités et partenaires permettant de produire et délivrer cette valeur.'],
      ['Value capture','Manière de récupérer les bénéfices de l’activité et de répartir revenus, coûts et impacts.'],
      ['Sustainable business model','Modèle économiquement viable intégrant finalités sociales et écologiques, parties prenantes et limites de la biosphère.'],
      ['Stakeholders','Acteurs affectant l’activité ou affectés par elle, au-delà des seuls actionnaires.'],
      ['Instrumental value','Valeur de la nature comme moyen de répondre à une finalité humaine.'],
      ['Relational value','Valeur liée aux attachements, identités, responsabilités et relations avec la nature.'],
      ['Intrinsic value','Valeur de la nature indépendamment de son utilité pour les humains.'],
      ['Ecological fallacy · sens du cours','Supposer que l’optimisation de chaque entreprise garantit la durabilité du système global.']
    ]},
    {title:'Principes & cycles',source:'circular-principles',items:[
      ['Linear economy','Extraire → produire → consommer → jeter.'],
      ['Circular economy','Concevoir des systèmes évitant déchets et pollution, conservant la valeur et régénérant la nature.'],
      ['Principe 1 · Eliminate waste and pollution','Éviter déchets et pollution dès la conception.'],
      ['Principe 2 · Circulate products and materials','Maintenir produits et matériaux à leur plus haute valeur possible.'],
      ['Principe 3 · Regenerate nature','Soutenir le renouvellement des systèmes naturels.'],
      ['Biological cycle','Faire circuler les nutriments biologiques puis permettre leur retour adapté aux systèmes vivants.'],
      ['Technical cycle','Conserver produits, composants et matériaux par partage, maintenance, réemploi, remise à niveau et recyclage.'],
      ['Cascading use','Enchaîner plusieurs usages d’une ressource biologique avant son retour au sol.'],
      ['Inner loops','Boucles courtes qui préservent davantage de fonctionnalité et de valeur incorporée que le retour à la matière.'],
      ['Value Hill','Valeur ajoutée avant l’usage, conservée pendant l’usage et récupérée après l’usage.']
    ]},
    {title:'Les 10R · R0 à R9',source:'ten-r',items:[
      ['R0 · Refuse','Supprimer le besoin d’un produit ou le rendre superflu.'],
      ['R1 · Rethink','Repenser ou intensifier l’usage d’un produit, notamment par mutualisation.'],
      ['R2 · Reduce','Réduire les ressources et l’énergie nécessaires à une fonction.'],
      ['R3 · Reuse','Réutiliser un produit pour la même fonction.'],
      ['R4 · Repair','Réparer ou maintenir un produit pour prolonger son fonctionnement.'],
      ['R5 · Refurbish','Restaurer ou remettre à niveau un produit.'],
      ['R6 · Remanufacture','Reconstruire un produit de même fonction en réutilisant des composants.'],
      ['R7 · Repurpose','Donner une autre fonction à un produit ou à ses composants.'],
      ['R8 · Recycle','Retraiter les matières pour les réutiliser.'],
      ['R9 · Recover','Récupérer l’énergie contenue dans les déchets en dernier recours.']
    ]},
    {title:'Les 5 circular business models',source:'circular-models',items:[
      ['1 · Circular supplies','Utiliser des intrants renouvelables, biosourcés ou récupérés.'],
      ['2 · Resource recovery','Valoriser les déchets et sous-produits comme ressources.'],
      ['3 · Product life extension','Prolonger la vie des produits par durabilité, réparation, réemploi et remise à niveau.'],
      ['4 · Sharing','Augmenter l’utilisation d’actifs existants par partage ou mutualisation.'],
      ['5 · Product-Service Systems','Fournir une combinaison de produits et de services, pouvant privilégier l’accès ou la performance plutôt que la vente.'],
      ['Industrial symbiosis','Les ressources ou sous-produits d’une organisation deviennent des intrants pour une autre.']
    ]},
    {title:'PSS · produits, usages et résultats',source:'pss',items:[
      ['Product-oriented PSS','Vente d’un produit accompagnée de services comme entretien, réparation ou conseil.'],
      ['Use-oriented PSS','Vente d’un accès ou d’un usage, avec propriété généralement conservée par le fournisseur.'],
      ['Result-oriented PSS','Vente d’un résultat ou d’une performance plutôt que d’un équipement déterminé.'],
      ['Smoothing services','Services facilitant la vente ou l’usage d’un produit.'],
      ['Adapting services','Services étendant ou adaptant les fonctions, notamment par formation et conseil.'],
      ['Substituting services','Services remplaçant l’achat d’un produit.'],
      ['Reverse logistics','Organisation des retours pour entretenir, réemployer, reconditionner ou recycler les produits.']
    ]},
    {title:'Conception & limites',source:'circular-limits',items:[
      ['Circular Business Model Canvas','Grille reliant mission, valeur, usagers, partenaires, activités, ressources, distribution, prochain usage, revenus, coûts et impacts.'],
      ['Circular Redesign Sprint','Diagnostic d’un produit → idées 10R/Value Hill → modèle circulaire → évaluation → risques d’échec.'],
      ['CPI','Outil d’autoévaluation de circularité utilisé dans l’activité, sans prouver à lui seul une réduction absolue des impacts.'],
      ['Pre-mortem','Imaginer les causes plausibles d’un échec futur pour préparer des réponses.'],
      ['Rebound effect','Les gains d’efficacité ou de coût stimulent des usages supplémentaires qui réduisent ou annulent le bénéfice attendu.'],
      ['Downcycling','Recyclage conduisant à une matière de qualité ou d’usage inférieur.'],
      ['Dissipation','Perte ou dispersion d’une partie des matières à chaque cycle.'],
      ['Burden shifting','Réduction d’un impact accompagnée de son déplacement vers un autre milieu, lieu, acteur ou stade du cycle de vie.'],
      ['Circularity ≠ sustainability','Une boucle circulaire n’est durable que si ses effets réels sont compatibles avec les limites écologiques et la justice.']
    ]}
  ]}
];
