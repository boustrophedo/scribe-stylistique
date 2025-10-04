import { type Journey } from './types';

export const ERROR_CORRECTION_JOURNEY_ID = 'no-more-mistakes-dynamic';

export const ERROR_CORRECTION_JOURNEY_PLACEHOLDER: Journey = {
  id: ERROR_CORRECTION_JOURNEY_ID,
  title: "Parcours 'Plus Jamais l'Erreur'",
  description: "Un parcours intelligent généré par l'IA pour cibler spécifiquement les erreurs de grammaire que vous avez commises.",
  levels: [], // Ce parcours est généré à la volée
};


export const JOURNEYS: Journey[] = [
  {
    id: 'show-dont-tell',
    title: 'Atelier : Montrer, ne pas Dire',
    description: 'Apprends à faire ressentir les émotions à tes lecteurs plutôt que de simplement les nommer. C\'est le secret d\'une histoire captivante !',
    levels: [
      {
        level: 1,
        title: "Niveau 1 : Les bases",
        description: "Entraîne-toi avec des émotions simples. Décris ce que tu vois, ce que tu entends, ce que tu ressens.",
        exercises: [
          {
            type: 'rewrite',
            id: 101,
            original: 'Il faisait froid dans la grotte.',
            style: 'Montrer, ne pas dire',
            hint: 'Comment ton corps réagit quand il a froid ? Est-ce que tu trembles ? Tes dents claquent ?'
          },
          {
            type: 'rewrite',
            id: 102,
            original: 'Léa était déçue.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris ce que fait son visage. Est-ce que sa bouche tremble ? Comment sont ses yeux ?'
          },
          {
            type: 'rewrite',
            id: 103,
            original: 'Son chien était agité.',
            style: 'Montrer, ne pas dire',
            hint: 'Que fait un chien quand il est excité ? Pense à sa queue, à ses oreilles, aux bruits qu\'il fait.'
          },
          {
            type: 'rewrite',
            id: 104,
            original: 'La soupe était délicieuse.',
            style: 'Montrer, ne pas dire',
            hint: 'Imagine quelqu\'un qui la mange. Quel bruit fait-il ? Quelle est l\'expression de son visage ?'
          },
          {
            type: 'rewrite',
            id: 105,
            original: 'L\'héroïne était fatiguée.',
            style: 'Montrer, ne pas dire',
            hint: 'Comment marche une personne très fatiguée ? Est-ce qu\'elle traîne les pieds ?'
          }
        ]
      },
      {
        level: 2,
        title: "Niveau 2 : Émotions plus difficiles",
        description: "Va plus loin en décrivant des sentiments plus compliqués et des ambiances particulières.",
        exercises: [
           {
            type: 'rewrite',
            id: 106,
            original: 'La salle du trône était impressionnante.',
            style: 'Montrer, ne pas dire',
            hint: 'Combine la vue (l\'or qui brille) avec le toucher (le velours doux d\'un coussin).'
          },
          {
            type: 'rewrite',
            id: 107,
            original: 'En regardant la vieille photo, il se sentit nostalgique.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris son regard. Est-ce qu\'il sourit un peu ? Est-ce qu\'il passe doucement son doigt sur la photo ?'
          },
          {
            type: 'rewrite',
            id: 108,
            original: 'L\'ambiance à la fête était tendue.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris le contraste entre ce que tu vois (des gens qui dansent) et ce que tu entends (personne ne rit vraiment).'
          },
          {
            type: 'rewrite',
            id: 109,
            original: 'Elle était pleine d\'espoir avant de partir à l\'aventure.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris sa posture physique. Est-ce qu\'elle regarde au loin, le menton relevé ?'
          },
          {
            type: 'rewrite',
            id: 110,
            original: 'Le marché de la ville était un vrai bazar.',
            style: 'Montrer, ne pas dire',
            hint: 'Choisis un son (un vendeur qui crie) et une odeur (des épices) et décris-les.'
          }
        ]
      },
      {
        level: 3,
        title: "Niveau 3 : Idées difficiles",
        description: "Montre que tu maîtrises la technique en décrivant des idées abstraites avec des actions concrètes.",
        exercises: [
          {
            type: 'rewrite',
            id: 111,
            original: 'Il n\'était plus un enfant innocent.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris son regard différent face à une scène qui, avant, l\'aurait fait rire.'
          },
          {
            type: 'rewrite',
            id: 112,
            original: 'L\'objet magique l\'avait rendu méchant.',
            style: 'Montrer, ne pas dire',
            hint: 'Montre-le faire une petite action méchante ou égoïste sans aucune hésitation.'
          },
          {
            type: 'rewrite',
            id: 113,
            original: 'Elle se sentait enfin libre.',
            style: 'Montrer, ne pas dire',
            hint: 'Utilise une sensation : le vent sur son visage, le grand espace vide autour d\'elle.'
          },
          {
            type: 'rewrite',
            id: 114,
            original: 'Le temps semblait s\'être arrêté.',
            style: 'Montrer, ne pas dire',
            hint: 'Fais la description très lente et précise d\'un tout petit détail en mouvement (un grain de poussière dans un rayon de soleil).'
          },
          {
            type: 'rewrite',
            id: 115,
            original: 'La vie dans la capitale était décadente.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris une scène qui mélange une richesse extrême avec quelque chose de triste ou d\'abîmé.'
          }
        ]
      },
      {
        level: 4,
        title: "Niveau 4 : Le Maître des Sens",
        description: "Combinez plusieurs sens et utilisez des détails subtils pour évoquer des ambiances complexes.",
        exercises: [
          {
            type: 'rewrite',
            id: 116,
            original: 'La ville était vivante.',
            style: 'Montrer, ne pas dire',
            hint: 'Mélangez un son (le brouhaha), une odeur (la nourriture de rue) et une image (les lumières vives).'
          },
          {
            type: 'rewrite',
            id: 117,
            original: 'Il se sentait anxieux avant la bataille.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris ses sensations internes (un nœud à l\'estomac) et ses actions (il vérifie son épée pour la dixième fois).'
          },
          {
            type: 'rewrite',
            id: 118,
            original: 'Le silence dans la crypte était pesant.',
            style: 'Montrer, ne pas dire',
            hint: 'Quels sont les seuls sons audibles ? Le bruit de sa propre respiration, une goutte d\'eau qui tombe au loin ?'
          },
          {
            type: 'rewrite',
            id: 119,
            original: 'Elle était en admiration devant le paysage.',
            style: 'Montrer, ne pas dire',
            hint: 'Au-delà de la vue, que ressent-elle ? L\'odeur des pins, la fraîcheur du vent de la montagne ?'
          },
          {
            type: 'rewrite',
            id: 120,
            original: 'Le repas était un festin royal.',
            style: 'Montrer, ne pas dire',
            hint: 'Décris la vapeur odorante qui s\'échappe d\'un plat, le son d\'une coupe en cristal, et une couleur vive d\'un fruit exotique.'
          }
        ]
      }
    ]
  },
  {
    id: 'dialogue',
    title: 'Atelier : Dialogues Pleins de Vie',
    description: 'Donne une voix unique à tes personnages et fais avancer ton histoire grâce à ce qu\'ils se disent.',
    levels: [
      {
        level: 1,
        title: "Niveau 1 : Les bases du dialogue",
        description: "Apprends à bien présenter un dialogue, à utiliser les verbes et à ajouter des actions simples.",
        exercises: [
          {
            type: 'rewrite',
            id: 201,
            original: 'Il lui demanda si elle voulait venir à la fête.',
            style: 'Dialogue direct',
            hint: 'Mets sa question entre guillemets. Comment une personne timide poserait cette question ?'
          },
          {
            type: 'rewrite',
            id: 202,
            original: '"Bonjour," dit le personnage. "Comment vas-tu ?", ajouta-t-il.',
            style: 'Rendre le dialogue plus fluide',
            hint: 'Remplace le deuxième "dit-il" par une action. Que fait le personnage en même temps qu\'il parle ?'
          },
          {
            type: 'rewrite',
            id: 203,
            original: 'Elle accepta sa mission.',
            style: 'Dialogue direct',
            hint: 'Ne lui fais pas juste dire "Oui". Comment peut-elle montrer qu\'elle est super motivée ?'
          },
          {
            type: 'rewrite',
            id: 204,
            original: 'Personnage A : "Passe-moi la potion." Personnage B : "La voilà."',
            style: 'Dialogue avec action',
            hint: 'Remplace la deuxième parole par une description de l\'action (il lui tend la potion).'
          },
          {
            type: 'rewrite',
            id: 205,
            original: 'Il expliqua qu\'il était en retard à cause d\'une attaque de monstres.',
            style: 'Dialogue direct',
            hint: 'Transforme cette phrase en une seule parole qu\'il pourrait dire en arrivant, tout essoufflé.'
          }
        ]
      },
      {
        level: 2,
        title: "Niveau 2 : Voix et Sous-Texte",
        description: "Donne une personnalité à tes personnages à travers leur façon de parler et ce qu'ils cachent.",
        exercises: [
          {
            type: 'rewrite',
            id: 206,
            original: '"Donne-moi ce livre," dit le maître à son élève.',
            style: 'Dialogue qui montre l\'autorité',
            hint: 'Réécris la phrase pour que le maître ait l\'air autoritaire, sans utiliser un mot comme "sèchement".'
          },
          {
            type: 'rewrite',
            id: 207,
            original: 'Personnage A : "Ce n\'est rien." (Alors qu\'il a une blessure au bras)',
            style: 'Dialogue avec sous-texte',
            hint: 'Il dit que ça va, mais ajoute une action (il grimace, il cache son bras) qui montre qu\'il ment.'
          },
          {
            type: 'rewrite',
            id: 208,
            original: '"J\'ai appris que tu avais gagné. C\'est super."',
            style: 'Dialogue qui exprime la jalousie',
            hint: 'Les mots sont gentils, mais il est jaloux. Ajoute un détail qui le montre (un faux sourire, un compliment un peu bizarre).'
          },
          {
            type: 'rewrite',
            id: 209,
            original: 'Un jeune soldat et un vieux magicien parlent de la météo.',
            style: 'Donner une voix différente',
            hint: 'Écris deux lignes de dialogue. Le soldat doit parler simplement, et le magicien de façon plus mystérieuse.'
          },
          {
            type: 'rewrite',
            id: 210,
            original: '"Je pense que nous devons nous séparer ici."',
            style: 'Rendre une phrase "cliché" plus originale',
            hint: 'Comment dire la même chose mais de façon plus personnelle ? Il pourrait utiliser une image ou une métaphore.'
          }
        ]
      },
      {
        level: 3,
        title: "Niveau 3 : Techniques Avancées",
        description: "Maîtrise l'art du dialogue indirect, des conversations de groupe et du pouvoir du silence.",
        exercises: [
          {
            type: 'rewrite',
            id: 211,
            original: '"Où étais-tu pendant l\'attaque ?" demanda-t-elle, méfiante.',
            style: 'Interrogatoire indirect',
            hint: 'Fais-lui obtenir l\'info sans poser de question directe. Elle pourrait dire une phrase fausse pour le faire réagir.'
          },
          {
            type: 'rewrite',
            id: 212,
            original: 'Deux anciens amis, maintenant fâchés, parlent du temps qu\'il fait.',
            style: 'Dialogue révélant un conflit passé',
            hint: 'Leur conversation sur la météo parle en fait de leur amitié brisée. Chaque phrase a un double sens.'
          },
          {
            type: 'rewrite',
            id: 213,
            original: 'Un vieux personnage raconte une longue histoire.',
            style: 'Couper un monologue',
            hint: 'Coupe son histoire avec une question ou une action de la personne qui l\'écoute, pour rendre ça plus vivant.'
          },
          {
            type: 'rewrite',
            id: 214,
            original: 'Un groupe d\'aventuriers discute du plan pour entrer dans le château.',
            style: 'Gérer un dialogue de groupe',
            hint: 'Écris 3-4 lignes. Fais en sorte que chaque personnage ait une opinion (l\'optimiste, le peureux, le prudent).'
          },
          {
            type: 'rewrite',
            id: 215,
            original: 'Un personnage avoue avoir trahi son meilleur ami.',
            style: 'Dialogue silencieux',
            hint: 'Il vient de faire son aveu. Décris la réaction de l\'autre personnage uniquement avec le silence et un seul geste important.'
          }
        ]
      },
      {
        level: 4,
        title: "Niveau 4 : Le Rythme de la Conversation",
        description: "Apprenez à utiliser le tempo des dialogues, les interruptions et les silences pour maîtriser le rythme de vos scènes.",
        exercises: [
          {
            type: 'rewrite',
            id: 216,
            original: 'Il lui dit qu\'il l\'aimait. Elle répondit qu\'elle l\'aimait aussi.',
            style: 'Dialogue rapide et haletant',
            hint: 'Utilise des phrases très courtes, peut-être incomplètes, pour montrer l\'urgence de leurs émotions.'
          },
          {
            type: 'rewrite',
            id: 217,
            original: '"Je dois te dire quelque chose d\'important," commença-t-il.',
            style: 'Dialogue interrompu',
            hint: 'Fais-le être interrompu par un bruit extérieur ou par une autre personne avant qu\'il ne puisse finir sa phrase.'
          },
          {
            type: 'rewrite',
            id: 218,
            original: 'Elle lui demanda où il était. Il lui expliqua en détail son long voyage.',
            style: 'Dialogue évasif',
            hint: 'Transforme sa longue explication en une série de réponses courtes et vagues qui créent du mystère.'
          },
          {
            type: 'rewrite',
            id: 219,
            original: 'Personnage A : "Tu ne peux pas faire ça !" Personnage B : "Regarde-moi bien."',
            style: 'Dialogue qui se chevauche',
            hint: 'Écris le dialogue pour que le personnage B commence à parler avant que le A n\'ait fini sa phrase, montrant son impatience.'
          },
          {
            type: 'rewrite',
            id: 220,
            original: 'Le général donna ses ordres à son lieutenant, qui les accepta.',
            style: 'Dialogue qui monte en tension',
            hint: 'Transforme l\'échange en un dialogue sec et rapide, où chaque phrase augmente la pression avant la bataille.'
          }
        ]
      }
    ]
  },
  {
    id: 'world-building',
    title: 'Atelier : Créer un Monde Vivant',
    description: 'Fais exister ton univers aux yeux du lecteur en utilisant des détails qui parlent aux cinq sens.',
    levels: [
      {
        level: 1,
        title: "Niveau 1 : Les Cinq Sens",
        description: "Apprends à construire un monde en te concentrant sur un seul détail à la fois : l'odeur, le son, le toucher...",
        exercises: [
          {
            type: 'rewrite',
            id: 301,
            original: 'C\'était un port de vaisseaux spatiaux.',
            style: 'Description par l\'odorat',
            hint: 'Quelle est l\'odeur la plus forte ? Le métal chaud, une odeur électrique, un carburant bizarre ? Choisis-en une.'
          },
          {
            type: 'rewrite',
            id: 302,
            original: 'Il y avait beaucoup de monde dans l\'auberge.',
            style: 'Description par l\'ouïe',
            hint: 'Isole un seul son : le bruit des verres qui trinquent, un musicien qui chante, une langue inconnue.'
          },
          {
            type: 'rewrite',
            id: 303,
            original: 'Le désert était brûlant.',
            style: 'Description par le toucher/sensation',
            hint: 'Décris la sensation du vent chaud sur la peau, ou du sable qui craque sous les chaussures.'
          },
          {
            type: 'rewrite',
            id: 304,
            original: 'Le marché était plein de couleurs.',
            style: 'Description par la vue',
            hint: 'Choisis une seule couleur vive et décris l\'objet qui la porte (des potions, des cristaux, des tissus...)'
          },
          {
            type: 'rewrite',
            id: 305,
            original: 'Le plat extraterrestre avait l\'air bon.',
            style: 'Description par le goût/l\'odeur',
            hint: 'Décris l\'odeur qui s\'échappe du plat. Est-ce que ça sent les épices, le sucré, le fumé ?'
          }
        ]
      },
      {
        level: 2,
        title: "Niveau 2 : Détails Spécifiques",
        description: "Combine les sens et utilise des détails concrets pour rendre ton monde unique.",
        exercises: [
          {
            type: 'rewrite',
            id: 306,
            original: 'Le temple était très vieux.',
            style: 'Description par un détail usé',
            hint: 'Décris une marque d\'usure (une marche creusée par les pas, une statue abîmée) et ajoute une odeur (de l\'encens, de la poussière).'
          },
          {
            type: 'rewrite',
            id: 307,
            original: 'La forêt était magique.',
            style: 'Description par une plante unique',
            hint: 'Invente une plante ou un champignon bizarre qui a un truc spécial (il brille, il bouge) et décris-le.'
          },
          {
            type: 'rewrite',
            id: 308,
            original: 'La ville du futur était très moderne.',
            style: 'Description par la technologie du quotidien',
            hint: 'Décris un objet normal (un banc, une poubelle) et sa fonction technologique surprenante.'
          },
          {
            type: 'rewrite',
            id: 309,
            original: 'Le château en ruine était hanté.',
            style: 'Description par ce qui manque',
            hint: 'Crée une ambiance en décrivant ce qui n\'est plus là (le silence à la place des rires des rois) et un détail de délabrement.'
          },
          {
            type: 'rewrite',
            id: 310,
            original: 'Les quartiers pauvres de la ville étaient tristes.',
            style: 'Description par une action humaine',
            hint: 'Plutôt que de décrire la pauvreté, décris une scène précise : un enfant qui joue avec un robot cassé.'
          }
        ]
      },
      {
        level: 3,
        title: "Niveau 3 : Raconter une histoire sans le dire",
        description: "Suggère l'histoire et la culture de ton monde à travers des détails subtils.",
        exercises: [
          {
            type: 'rewrite',
            id: 311,
            original: 'C\'était un peuple de guerriers.',
            style: 'Impliquer la culture par un objet',
            hint: 'Décris un objet normal (une tasse, une chaise) avec des détails qui montrent qu\'il a été fabriqué pour des guerriers.'
          },
          {
            type: 'rewrite',
            id: 312,
            original: 'Une catastrophe a détruit une partie de la ville.',
            style: 'Montrer l\'histoire par l\'environnement',
            hint: 'Décris un bâtiment moderne construit sur ou autour d\'une vieille ruine, comme une cicatrice dans la ville.'
          },
          {
            type: 'rewrite',
            id: 313,
            original: 'Les habitants croyaient en la magie des deux lunes.',
            style: 'Impliquer la religion par un geste',
            hint: 'Décris un geste simple que tous les habitants font en même temps quand les lunes se lèvent, sans expliquer pourquoi.'
          },
          {
            type: 'rewrite',
            id: 314,
            original: 'Le gouvernement était très autoritaire.',
            style: 'Montrer l\'oppression par l\'architecture',
            hint: 'Décris les bâtiments d\'une manière qui suggère la surveillance (toutes les fenêtres pareilles, pas de couleurs...)'
          },
          {
            type: 'rewrite',
            id: 315,
            original: 'La magie était dangereuse dans ce monde.',
            style: 'Montrer une règle du monde par une interaction',
            hint: 'Décris une scène où un personnage veut utiliser la magie, mais un autre l\'arrête d\'un simple regard inquiet.'
          }
        ]
      },
      {
        level: 4,
        title: "Niveau 4 : La Vie Quotidienne",
        description: "Suggérez la culture, l'économie et la politique de votre monde à travers les détails de la vie de tous les jours.",
        exercises: [
          {
            type: 'rewrite',
            id: 316,
            original: 'La nourriture était rationnée.',
            style: 'Impliquer une règle sociale par une scène',
            hint: 'Décris une scène de repas où les portions sont petites et précises, et où rien n\'est gaspillé.'
          },
          {
            type: 'rewrite',
            id: 317,
            original: 'C\'était une société très hiérarchisée.',
            style: 'Impliquer la hiérarchie par un geste',
            hint: 'Décris la façon dont deux personnages de classes différentes se saluent dans la rue, sans dire qui ils sont.'
          },
          {
            type: 'rewrite',
            id: 318,
            original: 'La technologie était omniprésente.',
            style: 'Impliquer la technologie par une action banale',
            hint: 'Décris un personnage qui se prépare un café, mais en utilisant des outils futuristes et étranges.'
          },
          {
            type: 'rewrite',
            id: 319,
            original: 'Les gens se méfiaient des étrangers.',
            style: 'Impliquer la culture par une réaction',
            hint: 'Décris un étranger qui entre dans une taverne et le silence qui s\'installe soudainement.'
          },
          {
            type: 'rewrite',
            id: 320,
            original: 'La monnaie locale était basée sur des cristaux d\'énergie.',
            style: 'Impliquer l\'économie par une transaction',
            hint: 'Décris un personnage achetant un fruit sur un marché et payant avec un petit cristal lumineux.'
          }
        ]
      }
    ]
  },
  {
    id: 'dialogue-tags',
    title: 'Atelier : Rendre les Dialogues Expressifs',
    description: 'Maîtrise l\'art des incises (les "dit-il") pour donner vie à tes dialogues et révéler la personnalité de tes personnages.',
    levels: [
      {
        level: 1,
        title: "Niveau 1 : Varier les Plaisirs",
        description: "Apprends à remplacer le verbe 'dire' par des mots plus forts et plus descriptifs.",
        exercises: [
          {
            type: 'rewrite',
            id: 401,
            original: '"Je ne trouve pas le livre," dit Elara.',
            style: 'Remplacer "dit-elle"',
            hint: 'Comment le dirait-elle si elle est inquiète ? Elle pourrait murmurer, ou soupirer.'
          },
          {
            type: 'rewrite',
            id: 402,
            original: '"C\'est par ici," dit le guide.',
            style: 'Remplacer "dit-il"',
            hint: 'Le lieu est peut-être dangereux. Est-ce qu\'il chuchote ou grogne pour ne pas se faire repérer ?'
          },
          {
            type: 'rewrite',
            id: 403,
            original: '"Attention !" dit Kael en voyant le piège.',
            style: 'Remplacer "dit-il"',
            hint: 'C\'est une urgence ! Quel verbe utiliser pour un cri soudain et fort ?'
          },
          {
            type: 'rewrite',
            id: 404,
            original: '"Je ne suis pas sûr que ce soit une bonne idée," dit Liana.',
            style: 'Remplacer "dit-elle"',
            hint: 'Elle hésite. Quel verbe pourrait montrer qu\'elle n\'est pas convaincue (marmonner, hasarder...) ?'
          },
          {
            type: 'rewrite',
            id: 405,
            original: '"Le portail magique est instable," dit le mage.',
            style: 'Remplacer "dit-il"',
            hint: 'Il prévient d\'un danger. Son ton est grave. Quel verbe utiliser (prévenir, avertir, gronder...) ?'
          }
        ]
      },
      {
        level: 2,
        title: "Niveau 2 : L'Action qui parle",
        description: "Va plus loin en remplaçant complètement le 'dit-il' par une action qui montre l'émotion du personnage.",
        exercises: [
           {
            type: 'rewrite',
            id: 406,
            original: '"Tu m\'as trahi," dit-elle tristement.',
            style: 'Remplacer l\'incise par une action',
            hint: 'Montre sa tristesse par un geste. Que font ses mains, son visage, ou son regard ?'
          },
          {
            type: 'rewrite',
            id: 407,
            original: '"Je n\'irai pas," dit-il avec colère.',
            style: 'Remplacer l\'incise par une action',
            hint: 'Comment son corps peut-il montrer sa colère ? Pense à ses poings, à sa posture, ou à un objet qu\'il pourrait taper.'
          },
          {
            type: 'rewrite',
            id: 408,
            original: '"C\'est incroyable," dit-il, émerveillé.',
            style: 'Remplacer l\'incise par une action',
            hint: 'Il est face à quelque chose de fou. Quelle est sa réaction physique ? Ses yeux s\'écarquillent ? Sa bouche s\'ouvre ?'
          },
          {
            type: 'rewrite',
            id: 409,
            original: '"Chut, écoutez," dit-elle, nerveuse.',
            style: 'Remplacer l\'incise par une action',
            hint: 'Montre sa nervosité. Un geste rapide, un regard vers les ombres, une main qui se pose sur son arme.'
          },
          {
            type: 'rewrite',
            id: 410,
            original: '"Je l\'ai enfin trouvée," dit le chasseur de trésors, soulagé.',
            style: 'Remplacer l\'incise par une action',
            hint: 'Quelle action physique montre le soulagement après une longue recherche ? Il pourrait s\'asseoir lourdement ou souffler un grand coup.'
          }
        ]
      },
      {
        level: 3,
        title: "Niveau 3 : La touche du chef",
        description: "Maîtrise les techniques avancées : couper le dialogue, supprimer les 'dit-il' inutiles et utiliser le silence.",
        exercises: [
          {
            type: 'rewrite',
            id: 411,
            original: '"Tu es sûr de toi ?" demanda-t-il. "Absolument," répondit-elle.',
            style: 'Supprimer les incises inutiles',
            hint: 'S\'il n\'y a que deux personnages qui parlent, est-ce vraiment utile de dire "dit-il" et "répondit-elle" à chaque fois ?'
          },
          {
            type: 'rewrite',
            id: 412,
            original: '"Je ne peux pas le croire. Après toutes ces années. C\'est vraiment toi," dit Elara.',
            style: 'Couper le dialogue avec une action',
            hint: 'Coupe sa longue phrase en deux avec une action au milieu pour créer une pause pleine d\'émotion.'
          },
          {
            type: 'rewrite',
            id: 413,
            original: '"L\'objet est une clé," expliqua le vieux sage, "mais il ne faut pas l\'utiliser."',
            style: 'Varier la position de l\'incise',
            hint: 'Déplace "expliqua le vieux sage" à la fin de la phrase pour changer le rythme.'
          },
          {
            type: 'rewrite',
            id: 414,
            original: '"Le signal," dit l\'espion. "C\'est maintenant," confirma sa partenaire.',
            style: 'Créer de la tension avec des actions',
            hint: 'Ajoute de courtes actions entre les paroles pour ralentir le temps et augmenter le suspense.'
          },
          {
            type: 'rewrite',
            id: 415,
            original: '"Je suis désolé," dit-il. Elle ne répondit pas.',
            style: 'Utiliser le silence comme une réponse',
            hint: 'La deuxième phrase est déjà bien. Mais tu peux décrire ce silence. Comment son corps montre-t-il qu\'elle refuse de parler ?'
          }
        ]
      },
      {
        level: 4,
        title: "Niveau 4 : Le Dialogue Intérieur",
        description: "Maîtrisez l'art de mélanger les paroles d'un personnage avec ses pensées secrètes pour créer de la profondeur et de l'ironie.",
        exercises: [
          {
            type: 'rewrite',
            id: 416,
            original: '"Bien sûr, je serai là," dit-il.',
            style: 'Dialogue + pensée contradictoire',
            hint: 'Il ment. Après sa parole, ajoute sa vraie pensée en italique. Par exemple : *Pour rien au monde je n\'irai.*'
          },
          {
            type: 'rewrite',
            id: 417,
            original: 'Elle regarda l\'épée et dit : "Je suis prête."',
            style: 'Dialogue + pensée révélant la peur',
            hint: 'Elle a peur. Montre-le en ajoutant sa pensée juste avant ou après sa parole. *Mes mains tremblent*, pensa-t-elle.'
          },
          {
            type: 'rewrite',
            id: 418,
            original: '"C\'est délicieux," dit-il en mangeant.',
            style: 'Action + pensée révélant la vérité',
            hint: 'La nourriture est horrible. Décris son action (il avale avec difficulté), puis ajoute sa pensée sur le goût affreux.'
          },
          {
            type: 'rewrite',
            id: 419,
            original: '"Je te fais confiance," lui assura-t-elle.',
            style: 'Dialogue + pensée révélant la méfiance',
            hint: 'En réalité, elle ne lui fait pas du tout confiance. Ajoute une pensée qui le montre clairement, comme une observation sur un détail suspect.'
          },
          {
            type: 'rewrite',
            id: 420,
            original: 'Il hocha la tête en signe d\'accord.',
            style: 'Action simple + monologue intérieur',
            hint: 'Il est d\'accord en apparence, mais en réalité, il prépare sa vengeance. Après l\'action, écris une ou deux phrases de ses pensées.'
          }
        ]
      }
    ]
  },
  {
    id: 'no-more-mistakes',
    title: 'Le Gardien des Grimoires',
    description: "Un grimoire ancien perd sa magie à cause de phrases corrompues. Purifie-les pour restaurer son pouvoir !",
    levels: [
      {
        level: 1,
        title: "Niveau 1 : Le Sortilège du 'A'",
        description: "Maîtrise la distinction entre 'a' et 'à' pour refermer les premières brèches magiques.",
        exercises: [
          {
            type: 'qcm',
            id: 501,
            question: "Le dragon ... une faim de loup et se dirige vers la tour ... toute vitesse.",
            choices: [
              { id: 'A', text: 'a / à' },
              { id: 'B', text: 'à / a' },
              { id: 'C', text: 'a / a' },
              { id: 'D', text: 'à / à' }
            ],
            correctChoiceId: 'A',
            explanation: "Astuce de sorcier : si tu peux remplacer par 'avait', c'est 'a' sans accent. Le 'à' avec un accent indique une direction ou un lieu, comme une flèche magique.",
            hint: "Pour le premier, demande-toi si c'est le verbe 'avoir'. Pour le second, si ça indique une direction ou une manière."
          },
          {
            type: 'qcm',
            id: 502,
            question: "Quelle incantation est correcte ?",
            choices: [
              { id: 'A', text: 'Il à commencé a pleuvoir.' },
              { id: 'B', text: 'Il a commencé à pleuvoir.' },
              { id: 'C', text: 'Il à commencé à pleuvoir.' },
              { id: 'D', text: 'Il a commencé a pleuvoir.' }
            ],
            correctChoiceId: 'B',
            explanation: "C'est simple ! On peut dire 'Il avait commencé', donc c'est 'a'. Pour 'commencé à pleuvoir', le 'à' indique l'action qui suit, c'est une direction dans le temps.",
            hint: "Utilise l'astuce 'remplacer par avait'. Si ça marche, c'est 'a' sans accent."
          },
          {
            type: 'qcm',
            id: 503,
            question: "Purifie cette phrase : Elle ... offert une amulette ... son allié.",
            choices: [
              { id: 'A', text: 'a / a' },
              { id: 'B', text: 'à / à' },
              { id: 'C', text: 'a / à' },
              { id: 'D', text: 'à / a' }
            ],
            correctChoiceId: 'C',
            explanation: "Elle 'avait' offert, donc 'a' sans accent. Elle offre son amulette 'à' quelqu'un, donc il faut un accent pour marquer la destination.",
            hint: "Le premier est le verbe 'avoir' au passé. Le second indique à qui elle offre l'amulette."
          }
        ]
      },
      {
        level: 2,
        title: "Niveau 2 : L'Harmonie des Accords",
        description: "Restaure l'équilibre des mots en maîtrisant les accords des adjectifs et participes passés.",
        exercises: [
          {
            type: 'qcm',
            id: 504,
            question: "Les runes ... que j'ai déchiffrées sont anciennes.",
            choices: [
              { id: 'A', text: 'lumineux' },
              { id: 'B', text: 'lumineuses' },
              { id: 'C', text: 'lumineuse' },
              { id: 'D', text: 'lumineu' }
            ],
            correctChoiceId: 'B',
            explanation: "Un adjectif doit porter la même 'armure' que le nom qu'il accompagne ! 'Runes' est un mot féminin, et il y en a plusieurs, donc il faut l'accord 'lumineuses'.",
            hint: "Regarde le mot 'runes'. Est-il masculin ou féminin ? Y en a-t-il une seule ou plusieurs ?"
          },
          {
              type: 'qcm',
              id: 505,
              question: "Les anciennes épées ont été ...",
              choices: [
                  { id: 'A', text: 'forgé' },
                  { id: 'B', text: 'forgés' },
                  { id: 'C', text: 'forgée' },
                  { id: 'D', text: 'forgées' }
              ],
              correctChoiceId: 'D',
              explanation: "Règle d'or : quand on utilise le verbe 'être' (suis, es, est, sommes, êtes, sont, été...), le mot qui suit s'accorde toujours. Ici, ce sont 'les épées' (féminin, plusieurs), donc 'forgées'.",
              hint: "Quand tu utilises le verbe 'être', le mot qui suit s'accorde avec le sujet. Quel est le sujet ici ?"
          },
          {
              type: 'qcm',
              id: 506,
              question: "Les magiciennes, ... et ..., se préparent pour le rituel.",
              choices: [
                  { id: 'A', text: 'puissant et concentré' },
                  { id: 'B', text: 'puissante et concentrée' },
                  { id: 'C', text: 'puissantes et concentrées' },
                  { id: 'D', text: 'puissants et concentrés' }
              ],
              correctChoiceId: 'C',
              explanation: "Les 'magiciennes' sont des femmes, et elles sont plusieurs. Les deux adjectifs doivent donc être au féminin pluriel : 'puissantes' et 'concentrées'.",
              hint: "Les deux adjectifs décrivent les 'magiciennes'. Regarde bien le genre et le nombre de ce mot."
          }
        ]
      }
    ]
  }
];
