window.FONDATION_SUPPORT = {
  meta: {
    id: "fondation-support",
    title: "FONDATION",
    subtitle: "La base pour évoluer sereinement",
    storageKey: "fondation_support_completed_sections_v2",
    formStorageKey: "fondation_support_forms_v2"
  },

  sections: [
    {
      id: "intro",
      label: "Fondation",
      shortLabel: "Introduction",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="intro">
          <p class="support-kicker">Bonus - Fondation</p>
          <h1>La base pour évoluer sereinement</h1>
          <div class="support-card support-card--soft">
            <p>
              Ce support accompagne ton parcours FONDATION. Il te permet de prendre du recul sur
              ton environnement, ton entourage, tes schémas relationnels, ton rapport à toi-même
              et la façon dont tu soutiens — ou non — ta propre expansion.
            </p>
          </div>
        </section>
      `
    },

    {
      id: "je-fais-le-point",
      label: "I - Je fais le point",
      shortLabel: "I - Je fais le point",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="je-fais-le-point">
          <h1>I - Je fais le point</h1>

          <p>
            Avant de commencer à analyser en détail, je te propose de commencer par un point très
            concret sur la qualité de ton environnement : pour chaque question préparée ici,
            liste en vrac ce qui te vient à l’esprit.
          </p>

          <p>
            L’idée est de te donner un recul objectif général sur ton environnement et ton rapport à lui.
          </p>

          <div class="support-card support-card--practice support-dynamic-form" data-support-form="checkin-home">
            <h3>Exercice Pratique - Je fais le point</h3>
            <div class="support-form-stack">
              <label class="support-field">
                <span class="support-field-label">Actuellement, comment te sens-tu chez toi, à ton domicile ?</span>
                <textarea class="support-textarea" rows="4" data-support-input="feelingsHome"></textarea>
              </label>

              <label class="support-field">
                <span class="support-field-label">Qu’est-ce qui t’y plaît ?</span>
                <textarea class="support-textarea" rows="4" data-support-input="likesHome"></textarea>
              </label>

              <label class="support-field">
                <span class="support-field-label">Y a-t-il quelque chose qui t’y pèse ? Si oui, comment peux-tu agir pour que cela ne te pèse plus ?</span>
                <textarea class="support-textarea" rows="5" data-support-input="heavinessHome"></textarea>
              </label>

              <label class="support-field">
                <span class="support-field-label">À quelle fréquence vas-tu dans un milieu de verdure ? Que pourrais-tu mettre en place pour te ressourcer efficacement au moins une fois par semaine ?</span>
                <textarea class="support-textarea" rows="5" data-support-input="greenery"></textarea>
              </label>

              <label class="support-field">
                <span class="support-field-label">Si tu devais charger de l’eau avec une pensée, que choisirais-tu ?</span>
                <textarea class="support-textarea" rows="3" data-support-input="waterMantra"></textarea>
              </label>
            </div>

            <div class="support-card support-card--note support-inline-note">
              <p>
                <strong>Rappel :</strong> tu peux choisir une bouteille en verre à laquelle tu répéteras 9 fois ton mantra
                au moins 10 minutes avant de boire son eau : 3 fois à voix haute, 3 fois à voix basse
                et 3 fois dans ta tête.
              </p>
            </div>

            <div class="support-form-meta" data-support-save-status="checkin-home"></div>
          </div>
        </section>
      `
    },

    {
      id: "influence-entourage",
      label: "II - Le facteur humain / 1. L’influence consciente, inconsciente et subtile de notre entourage",
      shortLabel: "II / 1. Influence de l’entourage",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="influence-entourage">
          <h1>II - Le facteur humain : observe ton approche à ton entourage et à tes aspirations</h1>
          <h2>1. L’influence consciente, inconsciente et subtile de notre entourage</h2>

          <p>
            D’après les recherches de l’Institut HeartMath (cf. Sources), les êtres humains diffusent
            un rayonnement électromagnétique en fonction de leurs émotions. Ces émissions se propagent
            dans un rayon de plusieurs mètres autour du corps. Nos contacts humains vont donc non seulement
            nous affecter dans notre conscient, par les relations conscientes que l’on entretient,
            mais aussi au niveau subtil.
          </p>

          <p>
            L’approche consciente te permet d’estimer si ton entourage t’apporte réellement ce que tu recherches
            au plus profond de toi. Te freine-t-il ou te porte-t-il vers tes objectifs ? T’offre-t-il un regard
            complémentaire ? En quelle mesure acceptes-tu ou peux-tu t’ouvrir aux personnes de ton entourage
            pour discuter de tes aspirations afin de prendre un recul bienveillant sur ta vie ?
            Couche ces questions sur le papier pour chaque membre de ton entourage.
          </p>

          <p>
            On parlera davantage de l’impact de l’entourage dans le chapitre suivant.
            On part du principe que ce qui t’énerve chez les autres n’est pas résolu chez toi :
            ça te permettra de réfléchir déjà à ton rapport à autrui avant de l’explorer en détail. 😉
          </p>
        </section>
      `
    },

    {
      id: "effet-miroir",
      label: "2. Effet miroir : faisons le point sur ton entourage passé et présent",
      shortLabel: "2. Effet miroir",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="effet-miroir">
          <h2>2. Effet miroir : faisons le point sur ton entourage passé et présent</h2>

          <p>
            Dans les fichiers joints, tu trouveras un fichier qui s’appelle
            <strong>« Fondements relationnels »</strong>. Imprime-le, on va faire un point ensemble.
          </p>

          <p>
            Prends d’abord un petit recul sur ton parcours avec les premiers encadrés : quelles qualités et quels
            défauts avais-tu dans ton enfance et dans ton adolescence ? Quelles sont les qualités que tu as cultivées
            avec l’âge et les défauts que tu as transcendés ?
          </p>

          <p>
            Une fois que tu as un premier regard sur ton propre parcours, nous allons observer ce que tu penses
            de ton entourage. Dans les rectangles marqués de 1 à 18 en haut des tableaux, liste l’ensemble
            des personnes que tu as le plus côtoyées dans ton passé et ton présent.
          </p>

          <p>
            Dans la colonne la plus à gauche, liste leurs qualités sur la fiche <strong>« Qualités »</strong>
            et leurs défauts sur la fiche <strong>« Bagages »</strong> : dans chaque colonne, fais une marque
            pour toutes les personnes concernées, et pas juste celle à laquelle tu pensais initialement.
          </p>

          <p>
            Une fois la liste complète et les colonnes cochées, observe les qualités qui semblent récurrentes
            dans ton entourage et comment tu te sens par rapport à elles. Souvent, ce sont des choses que l’on aspire
            à développer. Les défauts, quant à eux, sont souvent des défauts que nous avons aussi en nous.
          </p>

          <div class="support-card support-card--note">
            <p><strong>Note :</strong> Préviens-moi quand tu as terminé ce tableau et n’hésite pas à me l’envoyer si tu as envie d’un œil extérieur sur tes réponses.</p>
          </div>
        </section>
      `
    },

    {
      id: "qualite-entourage",
      label: "2. Exercice Pratique - Je fais le point sur la qualité de mon entourage",
      shortLabel: "2. Exercice Pratique - Entourage",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="qualite-entourage">
          <h2>2. Exercice Pratique - Je fais le point sur la qualité de mon entourage</h2>

          <p>
            Je te propose de lister les personnes qui te sont proches : famille, collègues, amis d’enfance,
            amis de hobby… Faisons le point sur ce qu’elles t’apportent et ce qu’elles font peser sur toi.
          </p>

          <div class="support-card support-card--practice support-dynamic-form" data-support-form="entourage-quality">
            <div class="support-people-list" data-support-people-list></div>

            <div class="support-form-actions">
              <button type="button" class="support-btn support-btn--ghost support-add-person-btn" data-support-action="add-person">
                + Ajouter une personne
              </button>
            </div>

            <div class="support-card support-card--note support-inline-note">
              <p>
                Le but est de voir en quoi ton entourage te sécurise et te stabilise, ou s’il est plus toxique
                que bénéfique. Il ne s’agit pas de couper les ponts automatiquement, mais de te protéger
                et de créer un terreau fertile pour la belle plante que tu vas devenir.
              </p>
            </div>

            <div class="support-form-meta" data-support-save-status="entourage-quality"></div>
          </div>
        </section>
      `
    },

    {
      id: "victime-sauveur-bourreau",
      label: "3. Victime ? Sauveur ? Bourreau ?",
      shortLabel: "3. Victime / Sauveur / Bourreau",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="victime-sauveur-bourreau">
          <h2>3. Victime ? Sauveur ? Bourreau ?</h2>

          <p>
            La responsabilisation est quelque chose de difficile : elle implique que les conséquences de tes actes
            et de tes choix ne sont pas seulement extérieures. Elle demande de la lucidité, mais aussi de la force
            pour prendre les mesures nécessaires à une situation saine.
          </p>

          <p>
            Pour éviter de te responsabiliser, tu peux choisir une position de « victime », qui te permet de rejeter
            la faute sur une ou plusieurs autres personnes. C’est sécurisant puisque tu te dis que « ce n’est pas ta faute ».
          </p>

          <p>
            Le besoin de reconnaissance et de don de soi peuvent aussi te pousser à aider des personnes
            qui s’auto-flagellent pour telle ou telle situation ou relation déplaisante. Parfois elles ont réellement besoin d’aide,
            mais parfois elles puisent surtout ton énergie sans se prendre en main.
          </p>

          <p>
            En essayant d’aider les victimes sans les remettre en question, les sauveurs les confortent dans leur illusion.
            La victime peut aussi devenir un bourreau, quand la frustration se fait trop grande.
            Souvent, on peut être les trois à la fois.
          </p>

          <div class="support-card support-card--exercise">
            <h3>Victime</h3>
            <ul>
              <li>Exprimer sur un papier ce que je ressens de la situation.</li>
              <li>Puis-je exprimer mes propres torts sans me sentir vulnérable ou sur la défensive ?</li>
              <li>Que dit mon entourage de ma situation ? Y a-t-il quelque chose que je n’accepte pas ?</li>
              <li>La personne que je perçois comme un bourreau serait-elle prête à changer si je lui parlais avec lucidité ?</li>
            </ul>
          </div>

          <div class="support-card support-card--practice">
            <p><strong>Exercice Pratique - </strong>Imagine une situation de dialogue jusqu’à ressentir la posture intérieure qui te permet de t’exprimer avec lucidité et intégrité.</p>
          </div>

          <div class="support-card support-card--note">
            <p><strong>Note :</strong> quand tu te mets en position de victime, ce que tu émets par ton comportement peut inviter à t’écraser. Si tu changes de posture, tu changes le dialogue.</p>
          </div>

          <div class="support-card support-card--exercise">
            <h3>Sauveur</h3>
            <ul>
              <li>Quelles sont mes émotions et mes ressentis physiques lorsque je prends en charge quelqu’un ?</li>
              <li>La situation d’aide me draine-t-elle ou me donne-t-elle de l’énergie ?</li>
              <li>Pourquoi est-ce que j’aide cette ou ces personnes ? Est-ce que j’attends quelque chose en retour ?</li>
              <li>Comment pourrais-je ressentir naturellement de la reconnaissance envers moi-même ?</li>
            </ul>
          </div>

          <div class="support-card support-card--exercise">
            <h3>Bourreau</h3>
            <ul>
              <li>De quoi est-ce que j’accuse les autres ?</li>
              <li>Pourquoi est-ce que je choisis cette personne ou ce groupe en particulier ?</li>
              <li>Si je renvoyais ces accusations contre moi-même, à quoi feraient-elles allusion ?</li>
            </ul>
          </div>
        </section>
      `
    },

    {
      id: "qualite-relations",
      label: "4. Qualité des relations",
      shortLabel: "4. Qualité des relations",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="qualite-relations">
          <h2>4. Qualité des relations</h2>

          <p>
            La qualité de tes relations est cruciale : elles peuvent te rassurer, te porter,
            te faire plonger dans l’incompréhension et la peine, t’enchaîner, ou juste te faire stagner.
          </p>

          <p>
            Les relations sont vivantes et peuvent changer d’une semaine ou d’une année à l’autre.
            Certaines évoluent avec toi, d’autres te freinent, d’autres encore deviennent plus fécondes avec le temps.
          </p>

          <p>
            Passe en revue les membres de ton entourage : les personnes avec qui tu as gardé contact,
            celles que tu rejettes et celles qui restent présentes même sans contact régulier.
          </p>

          <div class="support-card support-card--exercise">
            <h3>Pour chaque personne avec qui tu es actuellement en contact :</h3>
            <ul>
              <li>Pourquoi restes-tu en contact avec cette personne ?</li>
              <li>Te sens-tu obligé.e de garder contact avec cette personne ? Pourquoi ?</li>
              <li>Que t’apporte cette personne ?</li>
              <li>Te fait-elle subir un poids quelconque ?</li>
            </ul>
          </div>

          <div class="support-card support-card--exercise">
            <h3>Pour chaque personne avec qui tu es actuellement en froid :</h3>
            <ul>
              <li>Cultives-tu de la rancœur envers cette personne ?</li>
              <li>Quelles émotions ressens-tu quand tu penses à elle ?</li>
              <li>Quelle est ta part de responsabilité dans ce froid ?</li>
              <li>Gagnerais-tu à rétablir la situation ou à la laisser derrière toi ?</li>
            </ul>
          </div>
        </section>
      `
    },

    {
      id: "bonhommes-allumettes",
      label: "4. Exercice pratique - Les « Petits Bonhommes aux Allumettes » : couper les liens toxiques",
      shortLabel: "4. Exercice pratique - Bonhommes",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="bonhommes-allumettes">
          <h2>4. Exercice pratique - Les « Petits Bonhommes aux Allumettes » : couper les liens toxiques</h2>

          <p>
            Pour accompagner la décision de faire le ménage dans les liens nocifs que tu as pu vivre jusqu’à aujourd’hui,
            je te propose un petit rituel appelé « les Bonhommes aux allumettes ».
          </p>

          <p>
            Pour chaque personne, prends un quart de feuille A4 ou une demi-feuille. Dans l’idéal, utilise un stylo ou feutre noir
            et des couleurs violet, bleu foncé, bleu ciel, vert clair, jaune, orange, rouge et doré.
            Sinon, tout peut être fait au stylo uni.
          </p>

          <div class="support-bonhommes-steps">
            <div class="support-bonhommes-step">
              <picture class="support-bonhommes-media">
                <source srcset="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes1.webp" type="image/webp">
                <img src="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes1.png" alt="Étape 1 des Petits Bonhommes aux Allumettes">
              </picture>
              <div class="support-card support-card--exercise">
                <h3>1. Dessine-toi et dessine l’autre personne</h3>
                <p>
                  Il ne s’agit pas de couper les ponts, juste les dépendances affectives ou les manipulations.
                  Pas besoin d’une représentation détaillée, mais tu peux le faire si tu en ressens l’envie.
                </p>
              </div>
            </div>

            <div class="support-bonhommes-step">
              <picture class="support-bonhommes-media">
                <source srcset="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes2.webp" type="image/webp">
                <img src="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes2.png" alt="Étape 2 des Petits Bonhommes aux Allumettes">
              </picture>
              <div class="support-card support-card--exercise">
                <h3>2. Trace les liens invisibles</h3>
                <p>
                  Relie certaines parties clés de vos corps. Le choix de ces parties est lié à des croyances ancestrales
                  sur la constitution énergétique du corps. Les couleurs aident, mais ne sont pas nécessaires.
                </p>
              </div>
            </div>

            <div class="support-bonhommes-step">
              <picture class="support-bonhommes-media">
                <source srcset="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes3.webp" type="image/webp">
                <img src="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes3.png" alt="Étape 3 des Petits Bonhommes aux Allumettes">
              </picture>
              <div class="support-card support-card--exercise">
                <h3>3. Coupe les liens en conscience</h3>
                <p>
                  Formule intérieurement : « Je choisis de couper tout lien négatif ou aliénant avec [cette personne], ici et maintenant. »
                  Ouvre-toi aux sensations de ton corps et observe quelles zones réagissent le plus.
                </p>
              </div>
            </div>

            <div class="support-bonhommes-step">
              <picture class="support-bonhommes-media">
                <source srcset="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes4.webp" type="image/webp">
                <img src="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes4.png" alt="Étape 4 des Petits Bonhommes aux Allumettes">
              </picture>
              <div class="support-card support-card--exercise">
                <h3>4. Scelle et protège ton énergie</h3>
                <p>
                  Une fois les liens coupés, entoure-toi d’un cercle doré. Tu peux faire la même chose pour l’autre personne,
                  en lui souhaitant du bien. Cela aide à recentrer ton énergie sur toi-même et à laisser la rancune derrière toi.
                </p>
              </div>
            </div>

            <div class="support-bonhommes-step">
              <picture class="support-bonhommes-media">
                <source srcset="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes5.webp" type="image/webp">
                <img src="data/fondation/bonhommes-aux-allumettes/BonhommesAllumettes5.png" alt="Étape 5 des Petits Bonhommes aux Allumettes">
              </picture>
              <div class="support-card support-card--bonus">
                <h3>5. Ma petite touche perso</h3>
                <p>
                  Tu peux plier les petits papiers et les brûler dans un récipient qui ne craint pas le feu.
                  Le feu peut aider à marquer symboliquement la transmutation de ce qui se défait en toi.
                </p>
              </div>
            </div>
          </div>
        </section>
      `
    },

    {
      id: "faisons-le-point",
      label: "5. Faisons le point",
      shortLabel: "5. Faisons le point",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="faisons-le-point">
          <h2>5. Faisons le point</h2>
          <p>Avant de passer à la suite, prends une feuille et un crayon.</p>
          <div class="support-card support-card--exercise">
            <ul>
              <li>Sur une note de 0 à 10, comment notes-tu la compatibilité de tes activités actuelles avec tes envies réelles ?</li>
              <li>Pourquoi manges-tu ?</li>
              <li>Si tu ne manges pas, est-ce parce que tu te sens nourri.e d’autre chose, parce que tu refuses une situation, ou parce qu’une émotion te noue le ventre ?</li>
              <li>À quelle fréquence trouves-tu un contact avec la Terre ?</li>
            </ul>
          </div>
          <p>
            Si tu es honnête avec toi-même, tu sens ce qui te porte ou non. Si quelque chose ne te porte pas,
            c’est souvent que tu le fais par automatisme, avec la patte qui traîne ou carrément en forcing.
          </p>
        </section>
      `
    },

    {
      id: "travaille-ton-mindset",
      label: "6. Travaille ton mindset",
      shortLabel: "6. Travaille ton mindset",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="travaille-ton-mindset">
          <h2>6. Travaille ton mindset</h2>
          <p>
            Il est naturel de chercher l’approbation des autres, d’attendre qu’ils reconnaissent notre valeur
            et s’intéressent à ce que nous faisons. Mais derrière ce besoin de validation, il y a souvent
            un manque de confiance en soi.
          </p>
          <p>
            Le travail le plus puissant que j’ai eu à faire sur moi, c’est justement celui de la confiance en soi.
            Une vraie confiance, celle qui ne dépend ni du regard des inconnus, ni de l’opinion des proches.
          </p>
          <p>
            Et comme toute force, la confiance se travaille. C’est un véritable programme de musculation intérieure.
          </p>
        </section>
      `
    },

    {
      id: "voix-interieure",
      label: "Précision importante : l’impact de ta voix intérieure et de tes mots sur ton corps",
      shortLabel: "Voix intérieure et mots",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="voix-interieure">
          <h2>Précision importante : l’impact de ta voix intérieure et de tes mots sur ton corps</h2>
          <p>
            Lorsque nous parlons — à voix haute ou intérieurement — ce ne sont pas de simples syllabes qui se forment :
            c’est une interaction entre le langage, le cerveau et le corps.
          </p>
          <p>
            Des recherches montrent que le contenu de nos pensées et de notre dialogue intérieur est relié
            à des réponses physiologiques mesurables, comme le cortisol, la fréquence cardiaque
            ou certains marqueurs du stress.
          </p>
          <p>
            Une voix intérieure douce, bienveillante et pleine de gratitude peut favoriser un état apaisé.
            À l’inverse, une auto-critique dure et anxieuse entretient les boucles physiologiques du stress.
          </p>
        </section>
      `
    },

    {
      id: "confiance",
      label: "Exercice Pratique - Explore et reprogramme consciemment tes réactions corporelles et émotionnelles au mot « confiance »",
      shortLabel: "Exercice Pratique - Confiance",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="confiance">
          <h2>Exercice Pratique - Explore et reprogramme consciemment tes réactions corporelles et émotionnelles au mot « confiance »</h2>
          <p>
            Répète le mot <strong>« Confiance »</strong> de trois manières différentes : à voix haute,
            à voix basse et dans ta tête.
          </p>
          <div class="support-card support-card--exercise">
            <ul>
              <li><strong>À voix haute :</strong> dis-le clairement trois fois.</li>
              <li><strong>À voix basse :</strong> murmure-le trois fois.</li>
              <li><strong>Dans ta tête :</strong> répète-le maintenant en silence.</li>
            </ul>
          </div>
          <p>
            À chaque étape, observe ce qui se passe en toi : sensations physiques, pensées, émotions,
            tensions ou détente.
          </p>
        </section>
      `
    },

    {
      id: "effet-miroir-allie",
      label: "b) Utilise l’effet miroir comme un allié",
      shortLabel: "b) Effet miroir allié",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="effet-miroir-allie">
          <h2>b) Utilise l’effet miroir comme un allié</h2>
          <p>
            Lorsque tu observes de la réticence ou du désintérêt dans ton entourage pour ce qui te porte,
            demande-toi ce que tu cherches en eux. Écoute tes tripes avant ton mental.
          </p>
          <p>
            Imagine que tu demandes ce soutien et cette validation à toi-même : tu es la personne
            qui sera le plus à tes côtés dans cette vie.
          </p>
        </section>
      `
    },

    {
      id: "toi-du-futur",
      label: "c) Rencontre ton/ta Toi du futur",
      shortLabel: "c) Toi du futur",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="toi-du-futur">
          <h2>c) Rencontre ton/ta Toi du futur</h2>
          <p>
            Ferme les yeux et imagine ton Toi idéal. Celui ou celle qui a déjà dépassé les obstacles que tu traverses aujourd’hui.
          </p>
          <div class="support-card support-card--exercise">
            <ul>
              <li>Comment aurait-il ou aurait-elle agi à ta place ?</li>
              <li>Quels conseils aimerait-il ou aimerait-elle te donner ?</li>
              <li>Quelle énergie émane de cette version de toi ?</li>
            </ul>
          </div>
          <p>Le futur commence maintenant. Sois, dès aujourd’hui, la personne que tu veux devenir.</p>
        </section>
      `
    },

    {
      id: "expansion-contraction",
      label: "d) Observe ton état : expansion ou contraction ?",
      shortLabel: "d) Expansion / contraction",
      trackCompletion: true,
      html: `
        <section class="support-section" data-section-id="expansion-contraction">
          <h2>d) Observe ton état : expansion ou contraction ?</h2>
          <p>
            Prends un instant pour scanner ton corps. Ressens-tu des tensions régulières ?
            Quand apparaissent-elles ? Quels en sont les déclencheurs ?
          </p>
          <p>
            Le simple fait de reconnaître l’origine d’une tension aide déjà à la relâcher.
            Plus tu acceptes ce qui la provoque, plus ton mécanisme d’auto-défense s’apaise.
          </p>
          <div class="support-card support-card--focus">
            <p><strong>Rappel :</strong> tu ne peux pas être à la fois en contraction et en expansion.</p>
          </div>
        </section>
      `
    },

    {
      id: "sources",
      label: "III - Sources",
      shortLabel: "III - Sources",
      trackCompletion: false,
      html: `
        <section class="support-section" data-section-id="sources">
          <h1>III - Sources</h1>
          <div class="support-card support-card--source">
            <h3>1. Electromagnétisme et santé physique</h3>
            <ul>
              <li>Pall, M. L. (2018). <em>Wi-Fi is an important threat to human health</em>.</li>
              <li>Chaplin, M. (2000). <em>Water structure and science</em>.</li>
              <li>Chevalier, G. et al. (2012). <em>Earthing: Health implications of reconnecting the human body to the Earth's surface electrons</em>.</li>
              <li>Krueger, A. P., & Reed, E. J. (1976). <em>Biological impact of small air ions</em>.</li>
              <li>Houston, B. J. et al. (2016). <em>The effects of radiofrequency electromagnetic radiation on sperm function</em>.</li>
            </ul>
          </div>

          <div class="support-card support-card--source">
            <h3>2. La vibration du cœur : les études de l’institut HeartMath</h3>
            <ul>
              <li>McCraty, R., Atkinson, M., & Tomasino, D. (2001). <em>Science of the Heart</em>.</li>
              <li>McCraty, R., & Childre, D. (2010). <em>Coherence: Bridging Personal, Social, and Global Health</em>.</li>
              <li>McCraty, R. et al. (1995). <em>The effects of emotions on short-term power spectrum analysis of heart rate variability</em>.</li>
              <li>McCraty, R. (2015). <em>Heart-Brain Interactions, Coherence, and the Emerging Field of Heart Intelligence</em>.</li>
            </ul>
          </div>

          <div class="support-card support-card--source">
            <h3>3. L’impact de ta voix intérieure et de tes mots sur ton corps</h3>
            <ul>
              <li><em>Mind your thoughts: Associations between self-generated thoughts and stress</em>.</li>
              <li><em>Type of self-talk matters: Effects of positive vs negative self-talk on cortisol and physiological responses</em>.</li>
              <li><em>Human Stress Detection: cortisol and voice pitch during stress</em>.</li>
              <li><em>Exploring physiological effects of chanting</em>.</li>
              <li><em>Endogenous oxytocin, cortisol, and testosterone with group singing</em>.</li>
            </ul>
          </div>
        </section>
      `
    }
  ]
};
