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
              explanation: "Les 'magiciennes' sont des femmes, et elles sont plusieurs. Les adjectifs doivent donc aussi être au féminin et au pluriel pour que la magie opère : 'puissantes et concentrées'.",
              hint: "Les deux adjectifs décrivent 'les magiciennes'. Fais l'accord en genre (féminin) et en nombre (pluriel)."
          }
        ]
      },
      {
        level: 3,
        title: "Niveau 3 : Les Arcanes du Temps",
        description: "Déjoue les pièges de la conjugaison pour stabiliser le flux temporel du grimoire.",
        exercises: [
          {
            type: 'qcm',
            id: 507,
            question: "Si j'étais un archimage, je ... le dragon de mes propres mains.",
            choices: [
              { id: 'A', text: 'combattrai' },
              { id: 'B', text: 'combattrais' },
              { id: 'C', text: 'combats' },
              { id: 'D', text: 'combattais' }
            ],
            correctChoiceId: 'B',
            explanation: "C'est la formule de l'imaginaire ! Quand une phrase commence par 'Si j'étais...', la suite est presque toujours un verbe qui se termine par '-ais'. C'est le temps des rêves et des hypothèses.",
            hint: "La condition 'Si + imparfait' est suivie du conditionnel présent. Comment conjugues-tu au conditionnel ?"
          },
          {
            type: 'qcm',
            id: 508,
            question: "Quelle est la prédiction correcte ? Demain, nous ... la prophétie.",
            choices: [
              { id: 'A', text: 'accompliron' },
              { id: 'B', text: 'accomplirons' },
              { id: 'C', text: 'accompliront' },
              { id: 'D', text: 'accomplirion' }
            ],
            correctChoiceId: 'B',
            explanation: "Le futur, c'est facile ! Avec 'nous', la formule magique se termine toujours par '-ons'. 'Demain, nous accomplirons'.",
            hint: "Le mot 'Demain' indique le futur. Quelle est la terminaison du futur pour 'nous' ?"
          },
          {
            type: 'qcm',
            id: 509,
            question: "Choisis l'incantation juste : Il faut que tu ... la potion.",
            choices: [
              { id: 'A', text: 'boi' },
              { id: 'B', text: 'bois' },
              { id: 'C', text: 'boives' },
              { id: 'D', text: 'boit' }
            ],
            correctChoiceId: 'C',
            explanation: "Attention, formule spéciale ! L'ordre 'Il faut que...' change la forme du verbe qui suit. Pour 'boire' avec 'tu', la forme magique est 'boives'.",
            hint: "La construction 'Il faut que...' demande un temps spécial : le subjonctif. Cherche la forme correcte."
          }
        ]
      },
      {
        level: 4,
        title: "Niveau 4 : Les Illusions Jumelles",
        description: "Apprends à voir clair dans le jeu de miroirs des mots qui se ressemblent, comme 'ces' et 'ses'.",
        exercises: [
          {
            type: 'qcm',
            id: 510,
            question: "L'enchanteur rangea ... parchemins et admira ... artefacts magiques.",
            choices: [
              { id: 'A', text: 'ses / ces' },
              { id: 'B', text: 'ces / ses' },
              { id: 'C', text: 'ses / ses' },
              { id: 'D', text: 'ces / ces' }
            ],
            correctChoiceId: 'A',
            explanation: "L'astuce anti-piège : 'ses' veut dire que c'est à lui (les siens). 'Ces' sert à montrer quelque chose du doigt ('regarde ces artefacts-là').",
            hint: "Le premier mot indique que les parchemins appartiennent à l'enchanteur. Le second mot sert à désigner les artefacts."
          },
          {
            type: 'qcm',
            id: 511,
            question: "... les golems sont activés, et le laboratoire est ... silencieux.",
            choices: [
              { id: 'A', text: 'Tous / tout' },
              { id: 'B', text: 'Tout / tous' },
              { id: 'C', text: 'Tous / tous' },
              { id: 'D', text: 'Tout / tout' }
            ],
            correctChoiceId: 'A',
            explanation: "'Tous' avec un 's' est utilisé quand on peut compter les choses (tous les golems). 'Tout' sans 's' est utilisé quand ça veut dire 'complètement' (le labo est tout silencieux).",
            hint: "Le premier mot accompagne 'les golems' (pluriel). Le second mot signifie 'entièrement'."
          },
          {
            type: 'qcm',
            id: 512,
            question: "Quelle phrase est purifiée ?",
            choices: [
              { id: 'A', text: 'Ces leçons sont difficiles, mais ses efforts paient.' },
              { id: 'B', text: 'Ses leçons sont difficiles, mais ces efforts paient.' },
              { id: 'C', text: 'Ces leçons sont difficiles, mais ces efforts paient.' },
              { id: 'D', text: 'Ses leçons sont difficiles, mais ses efforts paient.' }
            ],
            correctChoiceId: 'A',
            explanation: "On utilise 'ces' pour montrer quelque chose ('ces leçons-ci'). On utilise 'ses' pour dire que ça appartient à quelqu'un ('ses efforts à lui').",
            hint: "Pense à ce que tu pourrais montrer du doigt ('... leçons-ci') et à ce qui appartient à quelqu'un ('... efforts à lui/elle')."
          }
        ]
      },
      {
        level: 5,
        title: "Niveau 5 : L'Énigme du Participe Passé",
        description: "Déjouez le piège le plus célèbre de la grammaire française : l'accord du participe passé avec l'auxiliaire 'avoir'.",
        exercises: [
          {
            type: 'qcm',
            id: 513,
            question: "La carte au trésor qu'il avait ... menait à une île mystérieuse.",
            choices: [
              { id: 'A', text: 'trouvé' },
              { id: 'B', text: 'trouvée' },
              { id: 'C', text: 'trouvés' },
              { id: 'D', text: 'trouvées' }
            ],
            correctChoiceId: 'B',
            explanation: "Le secret est de trouver le mot qui subit l'action ('trouver quoi ?'). Ici, c'est 'la carte' (féminin). Comme ce mot est placé AVANT le verbe 'avait trouvé', on accorde : 'trouvée'.",
            hint: "Pose la question 'Il avait trouvé quoi ?'. Si la réponse est avant le verbe, il faut accorder."
          },
          {
            type: 'qcm',
            id: 514,
            question: "Elle a ... de magnifiques potions.",
            choices: [
              { id: 'A', text: 'préparé' },
              { id: 'B', text: 'préparée' },
              { id: 'C', text: 'préparés' },
              { id: 'D', text: 'préparées' }
            ],
            correctChoiceId: 'A',
            explanation: "Attention, piège ! Ici, le mot qui subit l'action ('de magnifiques potions') est placé APRÈS le verbe 'a préparé'. Dans ce cas, avec 'avoir', le participe passé ne s'accorde jamais.",
            hint: "Pose la question 'Elle a préparé quoi ?'. La réponse est-elle avant ou après le verbe ?"
          },
          {
            type: 'qcm',
            id: 515,
            question: "Les créatures qu'il a ... se sont enfuies.",
            choices: [
              { id: 'A', text: 'capturé' },
              { id: 'B', text: 'capturée' },
              { id: 'C', text: 'capturés' },
              { id: 'D', text: 'capturées' }
            ],
            correctChoiceId: 'D',
            explanation: "Il a capturé quoi ? 'Les créatures' (féminin, pluriel). Ce mot est placé AVANT le verbe, donc on accorde au féminin pluriel : 'capturées'.",
            hint: "Le mot 'créatures' est féminin et pluriel. Est-il placé avant ou après le verbe ?"
          }
        ]
      },
      {
        level: 6,
        title: "Niveau 6 : Les Pièges Courants",
        description: "Déjouez d'autres illusions grammaticales fréquentes pour que votre prose soit irréprochable.",
        exercises: [
          {
            type: 'qcm',
            id: 516,
            question: "... penses-tu de cette énigme ? ... nous serons arrivés, la nuit sera tombée.",
            choices: [
              { id: 'A', text: "Qu'en / Quand" },
              { id: 'B', text: "Quand / Qu'en" },
              { id: 'C', text: "Quant / Quand" },
              { id: 'D', text: "Qu'en / Quant" }
            ],
            correctChoiceId: 'A',
            explanation: "'Qu'en' est la contraction de 'que en'. 'Quand' marque le temps. Astuce : si vous pouvez dire 'Que penses-tu de cela ?', c'est 'Qu'en'.",
            hint: "Le premier est une question sur une opinion, le second sur le temps."
          },
          {
            type: 'qcm',
            id: 517,
            question: "Il ... y arriver, mais il y a ... de chances. ...-tu m'aider ?",
            choices: [
              { id: 'A', text: 'peut / peu / Peux' },
              { id: 'B', text: 'peux / peu / Peut' },
              { id: 'C', text: 'peut / peux / Peu' },
              { id: 'D', text: 'peux / peut / Peu' }
            ],
            correctChoiceId: 'A',
            explanation: "'Peut' vient du verbe pouvoir avec 'il/elle/on'. 'Peux' est avec 'je/tu'. 'Peu' indique une petite quantité.",
            hint: "'Peut' et 'peux' sont des verbes. 'Peu' est une quantité."
          },
          {
            type: 'qcm',
            id: 518,
            question: "... -t-elle vue ? Non, elle n'est pas ... . C'est ... robe que je préfère.",
            choices: [
              { id: 'A', text: 'La / là / l\'a' },
              { id: 'B', text: 'L\'a / la / là' },
              { id: 'C', text: 'L\'a / là / la' },
              { id: 'D', text: 'Là / la / l\'a' }
            ],
            correctChoiceId: 'C',
            explanation: "'L'a' est 'le/la' + le verbe avoir ('avait'). 'Là' indique un lieu. 'La' est un article (comme 'une').",
            hint: "Astuce : si vous pouvez remplacer par 'l'avait', c'est 'l'a'. Si ça indique un endroit, c'est 'là'."
          }
        ]
      }
    ]
  },
  {
    id: 'punctuation-master',
    title: 'Ponctuer comme un Chef',
    description: "Apprenez à maîtriser la virgule, le point-virgule et la ponctuation des dialogues pour donner du rythme et de la clarté à vos textes.",
    levels: [
        {
            level: 1,
            title: "Niveau 1 : Le Souffle de la Virgule",
            description: "Découvrez où placer les virgules pour faire respirer vos phrases et guider le lecteur.",
            exercises: [
                {
                    type: 'qcm',
                    id: 601,
                    question: "L'aventurier prépara son sac_ il prit une corde, une torche et une carte.",
                    choices: [
                        { id: 'A', text: 'sac, il' },
                        { id: 'B', text: 'sac: il' },
                        { id: 'C', text: 'sac il' },
                        { id: 'D', text: 'sac. Il' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "La virgule est comme une petite respiration. Elle est parfaite ici pour séparer l'action principale ('il prépara son sac') de la liste qui vient la détailler.",
                    hint: "Une liste d'objets ou d'actions est souvent introduite par une ponctuation. Quelle est la plus légère ?"
                },
                {
                    type: 'qcm',
                    id: 602,
                    question: "Où la virgule est-elle bien placée ?",
                    choices: [
                        { id: 'A', text: 'Le roi, fatigué mais juste, rendit son verdict.' },
                        { id: 'B', text: 'Le roi fatigué, mais juste rendit son verdict.' },
                        { id: 'C', text: 'Le roi fatigué mais juste, rendit son verdict.' },
                        { id: 'D', text: 'Le roi, fatigué, mais juste rendit son verdict.' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Le groupe de mots 'fatigué mais juste' est un détail en plus sur le roi. C'est comme une petite parenthèse : on l'encadre donc avec des virgules.",
                    hint: "Quand tu ajoutes une information supplémentaire au milieu d'une phrase, tu l'encadres souvent par des virgules."
                },
                {
                    type: 'qcm',
                    id: 603,
                    question: "Quand le soleil se leva_ la brume disparut.",
                    choices: [
                        { id: 'A', text: 'leva la' },
                        { id: 'B', text: 'leva, la' },
                        { id: 'C', text: 'leva ; la' },
                        { id: 'D', text: 'leva. La' }
                    ],
                    correctChoiceId: 'B',
                    explanation: "Quand une phrase commence par un groupe de mots indiquant le temps (ici, 'Quand le soleil se leva'), on met une virgule juste après pour marquer une pause.",
                    hint: "Un complément de temps placé en début de phrase est généralement suivi d'une virgule."
                }
            ]
        },
        {
            level: 2,
            title: "Niveau 2 : L'Art du Dialogue",
            description: "Donnez vie à vos personnages en apprenant les règles d'or de la ponctuation des dialogues.",
            exercises: [
                {
                    type: 'qcm',
                    id: 604,
                    question: "Quelle ponctuation de dialogue est correcte ?",
                    choices: [
                        { id: 'A', text: '— Par ici, murmura-t-il.' },
                        { id: 'B', text: '— Par ici, — murmura-t-il.' },
                        { id: 'C', text: '— Par ici ! murmura-t-il.' },
                        { id: 'D', text: '"Par ici", murmura-t-il' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Chaque parole commence par un tiret. La précision 'murmura-t-il' commence toujours par une minuscule, même après un point d'exclamation.",
                    hint: "Fais attention à la majuscule/minuscule du verbe qui suit la parole (l'incise)."
                },
                {
                    type: 'qcm',
                    id: 605,
                    question: "Quelle phrase est correctement ponctuée ?",
                    choices: [
                        { id: 'A', text: '— Je ne sais pas. répondit-elle.' },
                        { id: 'B', text: '— Je ne sais pas, répondit-elle.' },
                        { id: 'C', text: '— Je ne sais pas... répondit-elle.' },
                        { id: 'D', text: '— Je ne sais pas, répondit-elle' }
                    ],
                    correctChoiceId: 'B',
                    explanation: "Quand la précision sur qui parle ('répondit-elle') suit la parole, on termine la parole par une virgule, jamais par un point.",
                    hint: "Si une parole se termine mais est suivie par 'dit-il', 'répondit-elle', etc., on ne met pas de point final."
                },
                {
                    type: 'qcm',
                    id: 606,
                    question: "Choisis la bonne forme :",
                    choices: [
                        { id: 'A', text: '— Tu viens, demanda le sorcier, ou tu restes ?' },
                        { id: 'B', text: '— Tu viens ? Demanda le sorcier. Ou tu restes ?' },
                        { id: 'C', text: '— Tu viens, demanda le sorcier, ou tu restes ?' },
                        { id: 'D', text: '— Tu viens ? demanda le sorcier, ou tu restes ?' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Si la précision sur qui parle ('demanda le sorcier') est au milieu de la parole, on la met entre deux virgules. La suite continue avec une minuscule.",
                    hint: "Quand l'incise coupe la phrase en deux, elle est encadrée par des virgules."
                }
            ]
        },
        {
            level: 3,
            title: "Niveau 3 : Les Signes de Puissance",
            description: "Explorez les signes de ponctuation plus rares mais puissants pour un style impeccable.",
            exercises: [
                {
                    type: 'qcm',
                    id: 607,
                    question: "Quelle phrase utilise correctement le point-virgule ?",
                    choices: [
                        { id: 'A', text: 'Il aimait l\'aventure ; elle préférait le calme de la bibliothèque.' },
                        { id: 'B', text: 'Il aimait l\'aventure ; et elle préférait le calme.' },
                        { id: 'C', text: 'Il aimait ; l\'aventure, elle préférait ; le calme.' },
                        { id: 'D', text: 'Il aimait l\'aventure. ; elle préférait le calme.' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Le point-virgule (;) est parfait pour relier deux phrases complètes qui s'opposent ou se complètent. C'est plus fort qu'une virgule, mais moins qu'un point.",
                    hint: "Le point-virgule sert à lier deux idées proches mais qui pourraient être des phrases indépendantes."
                },
                {
                    type: 'qcm',
                    id: 608,
                    question: "Choisis la bonne utilisation des deux-points :",
                    choices: [
                        { id: 'A', text: 'Elle n\'avait qu\'une seule peur : les araignées.' },
                        { id: 'B', text: 'Elle n\'avait qu\'une seule peur, : les araignées.' },
                        { id: 'C', text: 'Elle n\'avait qu\'une seule peur : Les araignées.' },
                        { id: 'D', text: 'Elle n\'avait : qu\'une seule peur les araignées.' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Les deux-points (:) sont comme un panneau qui dit 'voici la suite'. Ils annoncent une liste ou une explication. Le mot qui suit reste en minuscule.",
                    hint: "On utilise les deux-points pour introduire une explication ou une énumération."
                },
                {
                    type: 'qcm',
                    id: 609,
                    question: "Les tirets cadratins peuvent servir à isoler une précision. Quelle phrase est correcte ?",
                    choices: [
                        { id: 'A', text: 'Le trésor — enfin, ce qu\'il en restait — brillait faiblement.' },
                        { id: 'B', text: 'Le trésor, — enfin, ce qu\'il en restait —, brillait faiblement.' },
                        { id: 'C', text: 'Le trésor (enfin, ce qu\'il en restait) brillait faiblement.' },
                        { id: 'D', text: 'Le trésor — enfin, ce qu\'il en restait, brillait faiblement.' }
                    ],
                    correctChoiceId: 'A',
                    explanation: "Les tirets longs (—) fonctionnent comme des parenthèses, mais ils mettent plus en valeur le détail qu'ils entourent. C'est parfait pour ajouter une pensée au milieu d'une phrase.",
                    hint: "Les tirets fonctionnent un peu comme des parenthèses pour insérer un commentaire au milieu de la phrase."
                }
            ]
        },
        {
          level: 4,
          title: "Niveau 4 : Les Signes Secrets",
          description: "Maîtrisez les signes de ponctuation plus subtils pour un style d'expert.",
          exercises: [
            {
              type: 'qcm',
              id: 610,
              question: "Quelle phrase utilise correctement les parenthèses ?",
              choices: [
                { id: 'A', text: 'Il arriva (en retard, comme toujours) à la réunion.' },
                { id: 'B', text: 'Il arriva, (en retard, comme toujours), à la réunion.' },
                { id: 'C', text: 'Il arriva (en retard, comme toujours,) à la réunion.' },
                { id: 'D', text: 'Il arriva en retard (comme toujours) à la réunion.' }
              ],
              correctChoiceId: 'A',
              explanation: "Les parenthèses servent à insérer une information secondaire ou un commentaire qui pourrait être retiré sans changer le sens principal de la phrase.",
              hint: "Les parenthèses isolent une information non essentielle."
            },
            {
              type: 'qcm',
              id: 611,
              question: "Le roi fut interrompu par un messager. Comment le retranscrire avec style ?",
              choices: [
                { id: 'A', text: '— Je déclare que... Un messager entra en courant.' },
                { id: 'B', text: '— Je déclare que..., un messager entra en courant.' },
                { id: 'C', text: '— Je déclare que... — un messager entra en courant.' },
                { id: 'D', text: '— Je déclare que, un messager entra en courant.' }
              ],
              correctChoiceId: 'C',
              explanation: "Le tiret cadratin (—) est parfait pour marquer une interruption brusque dans un dialogue ou une pensée, apportant un effet dramatique.",
              hint: "Le tiret d'incise est plus fort qu'une virgule et marque une rupture nette."
            },
            {
              type: 'qcm',
              id: 612,
              question: "Comment montrer l'hésitation du personnage avec la ponctuation ?",
              choices: [
                { id: 'A', text: '— Je... je ne sais pas quoi dire.' },
                { id: 'B', text: '— Je, je ne sais pas quoi dire.' },
                { id: 'C', text: '— Je - je ne sais pas quoi dire.' },
                { id: 'D', text: '— Je ; je ne sais pas quoi dire.' }
              ],
              correctChoiceId: 'A',
              explanation: "Les points de suspension (...) sont l'outil idéal pour marquer une hésitation, un silence, ou une pensée qui n'est pas terminée.",
              hint: "Quel signe de ponctuation représente le mieux une parole qui s'interrompt ?"
            }
          ]
        },
        {
          level: 5,
          title: "Niveau 5 : Les Subtilités Typographiques",
          description: "Maîtrisez les détails qui font la différence : italique, majuscules et guillemets pour un style d'expert.",
          exercises: [
            {
              type: 'qcm',
              id: 613,
              question: "Quelle phrase utilise correctement l'italique pour une pensée ?",
              choices: [
                { id: 'A', text: 'Il pensa : "Je dois y aller."' },
                { id: 'B', text: '*Je dois y aller*, pensa-t-il.' },
                { id: 'C', text: 'Il pensa, « Je dois y aller ».' },
                { id: 'D', text: 'Il pensa : *Je dois y aller.*' }
              ],
              correctChoiceId: 'D',
              explanation: "L'italique est la convention la plus courante pour représenter les pensées d'un personnage directement dans le texte, souvent après deux-points.",
              hint: "L'italique permet de distinguer une pensée du reste de la narration."
            },
            {
              type: 'qcm',
              id: 614,
              question: "Après quel signe la majuscule n'est-elle PAS obligatoire ?",
              choices: [
                { id: 'A', text: 'Le point ( . )' },
                { id: 'B', text: 'Le point d\'interrogation ( ? )' },
                { id: 'C', text: 'Le point-virgule ( ; )' },
                { id: 'D', text: 'Le point d\'exclamation ( ! )' }
              ],
              correctChoiceId: 'C',
              explanation: "Le point-virgule est une pause plus forte qu'une virgule mais plus faible qu'un point. La phrase qui suit commence donc par une minuscule, car elle est liée à la précédente.",
              hint: "Pensez au point-virgule comme à un 'super-virgule'."
            },
            {
              type: 'qcm',
              id: 615,
              question: "Comment citer les paroles de quelqu'un dans un dialogue ?",
              choices: [
                { id: 'A', text: '— Le roi a dit, « Que la fête commence ! ».' },
                { id: 'B', text: '— Le roi a dit : "Que la fête commence !".' },
                { id: 'C', text: '— Le roi a dit : « Que la fête commence ! ».' },
                { id: 'D', text: '— Le roi a dit, "Que la fête commence !".' }
              ],
              correctChoiceId: 'C',
              explanation: "En français, les dialogues utilisent des tirets cadratins (—). Pour une citation à l'intérieur, on utilise les guillemets français (« »).",
              hint: "La typographie française a ses propres règles pour les citations dans les dialogues."
            }
          ]
        }
    ]
  },
  {
    id: 'epic-writing',
    title: 'Atelier : Le Souffle Épique',
    description: "Explorez le style grandiose et les codes de la fantasy épique.",
    subJourneys: [
      {
        id: 'epic-writing-practical',
        title: 'Épique : La Pratique du Style',
        description: "Apprenez à écrire des descriptions grandioses et à donner une dimension légendaire à vos récits par la pratique.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : L'Art de l'Échelle",
            description: "Maîtrisez les mots qui évoquent la grandeur pour décrire des paysages colossaux.",
            exercises: [
              {
                type: 'rewrite',
                id: 701,
                original: 'La montagne était très haute.',
                style: 'Donner un sentiment d\'échelle monumentale',
                hint: 'Comparez la montagne à quelque chose que le personnage connaît. Comment le ciel ou les nuages interagissent-ils avec son sommet ?'
              },
              {
                type: 'rewrite',
                id: 703,
                original: 'Le sortilège était puissant.',
                style: 'Montrer un impact cataclysmique',
                hint: 'Décrivez l\'effet du sort sur l\'environnement : le sol se fissure-t-il ? Le ciel change-t-il de couleur ?'
              },
            ]
          },
          {
            level: 2,
            title: "Niveau 2 : Le Verbe Puissant",
            description: "Choisissez des verbes d'action forts pour donner de la puissance à vos scènes.",
            exercises: [
              {
                type: 'rewrite',
                id: 704,
                original: 'Le dragon a craché du feu sur le village.',
                style: 'Utiliser un verbe d\'action plus dévastateur',
                hint: 'Le feu a-t-il simplement été "craché" ou a-t-il "déferlé", "incinéré", "englouti" le village ?'
              },
              {
                type: 'rewrite',
                id: 706,
                original: 'La vague géante a frappé la côte.',
                style: 'Personnifier la force de la nature',
                hint: 'Imaginez la vague comme une créature. A-t-elle "dévoré" le rivage, "griffé" les falaises ?'
              },
            ]
          }
        ]
      },
      {
        id: 'epic-writing-theory',
        title: 'Épique : Les Codes du Genre',
        description: "Maîtrisez les concepts, archétypes et structures qui définissent le genre épique.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Fondamentaux Épiques",
            description: "Comprenez les enjeux et les archétypes du récit épique.",
            exercises: [
              {
                type: 'qcm',
                id: 702,
                question: "Dans un récit épique, qu'est-ce qui est le plus souvent en jeu ?",
                choices: [
                  { id: 'A', text: "Le bonheur d'un village" },
                  { id: 'B', text: "Le destin d'un royaume ou du monde entier" },
                  { id: 'C', text: "Une querelle de famille" },
                ],
                correctChoiceId: 'B',
                explanation: "Le genre épique se définit par des enjeux très élevés (high stakes) qui menacent l'équilibre du monde, et pas seulement quelques individus.",
              },
              {
                type: 'qcm',
                id: 705,
                question: "Quel personnage est un archétype (un rôle classique) du genre épique ?",
                choices: [
                  { id: 'A', text: 'Le détective blasé' },
                  { id: 'B', text: "L'élu au destin mystérieux" },
                  { id: 'C', text: 'Le voisin grincheux' },
                ],
                correctChoiceId: 'B',
                explanation: "Le thème de 'l'élu' (The Chosen One), un héros ordinaire appelé à un destin extraordinaire, est un pilier de la fantasy épique.",
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'noir-writing',
    title: 'Atelier : Le Rythme du Polar',
    description: "Explorez le style percutant et les codes du roman noir.",
    subJourneys: [
      {
        id: 'noir-writing-practical',
        title: 'Polar : La Pratique du Style',
        description: "Maîtrisez l'art du suspense et des phrases percutantes à travers des exercices de réécriture ciblés.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : La Phrase Ciselée",
            description: "Apprenez à écrire des phrases courtes, directes et pleines d'impact pour un rythme haletant.",
            exercises: [
              {
                type: 'rewrite',
                id: 801,
                original: "Alors qu'il marchait sous la pluie battante qui tombait sur la ville, le détective pensait à l'affaire et se sentait fatigué.",
                style: 'Réécrire en 3 phrases courtes et directes',
                hint: 'Séparez chaque idée principale : la pluie, le lieu, le sentiment du détective. Pas de mots inutiles.'
              },
            ]
          },
          {
            level: 2,
            title: "Niveau 2 : L'Ombre et la Lumière",
            description: "Créez une atmosphère de polar en utilisant des contrastes forts entre l'ombre et la lumière.",
            exercises: [
              {
                type: 'rewrite',
                id: 803,
                original: 'La lumière du lampadaire éclairait la rue.',
                style: 'Créer un contraste inquiétant',
                hint: 'La lumière n\'éclaire pas tout. Que laisse-t-elle dans l\'ombre ? Décrivez la forme que la lumière découpe sur le sol.'
              },
            ]
          }
        ]
      },
      {
        id: 'noir-writing-theory',
        title: 'Polar : Les Codes du Genre',
        description: "Apprenez les caractéristiques du détective, de l'atmosphère et de l'intrigue propres au roman noir.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Les Fondamentaux du Noir",
            description: "Comprenez les personnages et l'ambiance qui définissent le polar.",
            exercises: [
              {
                type: 'qcm',
                id: 802,
                question: "Quelle est la caractéristique principale du détective dans un roman noir classique ?",
                choices: [
                  { id: 'A', text: 'Il est toujours joyeux et optimiste.' },
                  { id: 'B', text: 'Il est souvent cynique et a un passé trouble.' },
                  { id: 'C', text: 'Il résout les énigmes grâce à la magie.' },
                ],
                correctChoiceId: 'B',
                explanation: "Le détective 'hardboiled' (dur à cuire) est un code du genre. C'est un personnage usé par la vie, qui connaît les bas-fonds de la société.",
              },
              {
                type: 'qcm',
                id: 804,
                question: "Quel élément est crucial pour créer une atmosphère de roman noir ?",
                choices: [
                  { id: 'A', text: 'Des descriptions de paysages ensoleillés.' },
                  { id: 'B', text: "Le contraste ombre/lumière, la pluie, la nuit." },
                  { id: 'C', text: 'Des dialogues légers et humoristiques.' },
                ],
                correctChoiceId: 'B',
                explanation: "L'esthétique du film noir, avec ses ombres marquées et son ambiance nocturne et pluvieuse, est un code essentiel du genre pour créer le mystère et le danger.",
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'comedy-writing',
    title: 'Atelier : La Plume Comique',
    description: "Apprenez les mécanismes de l'humour, de l'hyperbole à la parodie.",
    subJourneys: [
      {
        id: 'comedy-writing-practical',
        title: 'Comédie : La Pratique du Style',
        description: "Entraînez-vous à manier l'hyperbole et le décalage pour créer des situations et des descriptions amusantes.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : L'Exagération",
            description: "Apprenez à utiliser l'hyperbole pour des descriptions comiques.",
            exercises: [
              {
                type: 'rewrite',
                id: 901,
                original: 'Il était très en retard.',
                style: 'Utiliser une hyperbole comique',
                hint: 'Imaginez la conséquence la plus absurde de son retard. Le temps a-t-il eu le temps de changer d\'ère ?'
              },
            ]
          },
           {
            level: 2,
            title: "Niveau 2 : Le Décalage",
            description: "Créez de l'humour en brisant les attentes du lecteur.",
            exercises: [
              {
                type: 'rewrite',
                id: 903,
                original: 'Le terrible dragon cracha du feu et détruisit le village.',
                style: 'Ajouter un détail absurde et terre-à-terre',
                hint: 'Après son acte de destruction, faites-lui faire quelque chose de complètement banal et inapproprié. S\'est-il excusé ? A-t-il éternué ?'
              },
            ]
          }
        ]
      },
      {
        id: 'comedy-writing-theory',
        title: 'Comédie : Les Codes du Genre',
        description: "Comprenez les mécanismes de l'humour, du rôle de l'acolyte aux techniques comme le flegme ou la parodie.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Les Mécanismes du Rire",
            description: "Apprenez les techniques de base de l'écriture comique.",
            exercises: [
              {
                type: 'qcm',
                id: 902,
                question: "En comédie, le 'sidekick' (acolyte) du héros a souvent pour rôle de :",
                choices: [
                  { id: 'A', text: 'Être plus intelligent que le héros.' },
                  { id: 'B', text: 'Mettre en valeur le comique du héros par contraste.' },
                  { id: 'C', text: 'Rester totalement silencieux.' },
                ],
                correctChoiceId: 'B',
                explanation: "L'acolyte, qu'il soit plus bête, plus fou ou plus sérieux que le héros, sert de 'faire-valoir' et crée des situations comiques par son interaction avec lui.",
              },
              {
                type: 'qcm',
                id: 904,
                question: "Quelle technique comique consiste à décrire une situation absurde avec un ton très sérieux ?",
                choices: [
                  { id: 'A', text: "L'hyperbole (l'exagération)" },
                  { id: 'B', text: "Le flegme (ou 'deadpan')" },
                  { id: 'C', text: 'La parodie' },
                ],
                correctChoiceId: 'B',
                explanation: "Le comique naît du décalage entre le sérieux du ton et l'absurdité de la situation. C'est un ressort très puissant.",
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sci-fi-writing',
    title: 'Atelier : Voyage en Science-Fiction',
    description: "Explorez les futurs possibles, les technologies crédibles et les grandes questions du genre.",
    subJourneys: [
      {
        id: 'sci-fi-writing-practical',
        title: 'Science-Fiction : La Pratique du Style',
        description: "Exercez-vous à décrire des technologies crédibles et à intégrer le futur dans le quotidien de vos personnages.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Rendre le Futur Vivant",
            description: "Apprenez les bases pour rendre votre univers de SF crédible et fascinant par la pratique.",
            exercises: [
              {
                type: 'rewrite',
                id: 1001,
                original: 'Le vaisseau était rapide.',
                style: "Décrire une technologie par son effet sur l'humain",
                hint: 'Que ressent le passager ? Une pression dans son siège, une distorsion des étoiles par le hublot ?'
              },
              {
                type: 'rewrite',
                id: 1003,
                original: 'Il y avait des robots partout.',
                style: "Intégrer la technologie dans le quotidien",
                hint: 'Décrivez un robot en train de faire un travail banal et normal, comme servir un café, promener un chien-robot ou nettoyer un trottoir.'
              },
              {
                type: 'rewrite',
                id: 1005,
                original: "L'extraterrestre était étrange.",
                style: "Montrer l'altérité sans jugement humain",
                hint: "Ne le comparez pas à quelque chose de terrestre. Décrivez simplement ce qu'il fait : sa façon de communiquer (par des couleurs ?), de se déplacer (en flottant ?), sans utiliser le mot 'bizarre'.",
              },
            ]
          }
        ]
      },
      {
        id: 'sci-fi-writing-theory',
        title: 'Science-Fiction : Les Codes du Genre',
        description: "Explorez les concepts fondamentaux de la SF, de la question 'Et si... ?' aux dystopies et au world-building.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Concepts Fondamentaux",
            description: "Comprenez les questions et les structures au cœur de la SF.",
            exercises: [
              {
                type: 'qcm',
                id: 1002,
                question: "Quelle est la question fondamentale au cœur de nombreuses histoires de science-fiction ?",
                choices: [
                  { id: 'A', text: 'Qui est le coupable ?' },
                  { id: 'B', text: 'Et si... ?' },
                  { id: 'C', text: 'Où est le trésor ?' }
                ],
                correctChoiceId: 'B',
                explanation: "La SF adore explorer les conséquences d'une idée, d'une invention ou d'un changement. 'Et si les robots avaient des émotions ?', 'Et si on pouvait voyager dans le temps ?' sont des points de départ classiques.",
              },
              {
                type: 'qcm',
                id: 1004,
                question: "Dans une dystopie, la société est souvent présentée comme parfaite en surface, mais elle cache...",
                choices: [
                  { id: 'A', text: 'Un secret magique.' },
                  { id: 'B', text: 'Un contrôle social et une perte de liberté.' },
                  { id: 'C', text: 'Une économie incroyablement florissante.' }
                ],
                correctChoiceId: 'B',
                explanation: "La dystopie est un des genres les plus importants de la SF. Elle utilise un futur imaginaire pour critiquer les dérives possibles de notre propre société (surveillance, conformisme, etc.).",
              },
              {
                type: 'qcm',
                id: 1006,
                question: "Le 'world-building' (construction d'univers) en science-fiction consiste principalement à...",
                choices: [
                  { id: 'A', text: 'Créer des cartes de royaumes imaginaires.' },
                  { id: 'B', text: 'Établir des règles scientifiques ou sociales cohérentes pour son univers.' },
                  { id: 'C', text: 'Écrire des dialogues poétiques et fleuris.' }
                ],
                correctChoiceId: 'B',
                explanation: "La cohérence est la clé en SF. Même si la technologie est imaginaire, elle doit suivre des règles logiques pour que le lecteur y croie. C'est ce qui différencie la SF de la Fantasy.",
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'romance-writing',
    title: 'Atelier : Le Cœur du Récit',
    description: "Apprenez à construire une alchimie crédible et à maîtriser l'art de la tension romantique.",
    subJourneys: [
      {
        id: 'romance-writing-practical',
        title: 'Romance : La Pratique du Style',
        description: "Apprenez par la pratique à décrire des rencontres mémorables et à montrer l'attirance par des détails subtils.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : L'Étincelle",
            description: "Apprenez à créer la rencontre et à montrer l'attirance naissante entre vos personnages.",
            exercises: [
              {
                type: 'rewrite',
                id: 1101,
                original: 'Ils se sont rencontrés au café et se sont plu.',
                style: "Décrire un 'meet-cute' (une rencontre mignonne)",
                hint: "Imaginez un petit incident maladroit ou amusant qui les force à interagir. L'un renverse son café sur l'autre ? Ils attrapent le même livre en même temps ?"
              },
              {
                type: 'rewrite',
                id: 1103,
                original: 'Il la trouvait jolie.',
                style: "Montrer l'attirance par un détail spécifique",
                hint: "Ne dites pas qu'elle est jolie. Montrez-le. Concentrez-vous sur un tout petit détail qu'il remarque : la façon dont elle plisse le nez en riant, une mèche de cheveux rebelle, etc."
              },
              {
                type: 'rewrite',
                id: 1105,
                original: 'Elle était en colère contre lui.',
                style: "Montrer la colère qui cache une attirance (style 'enemies-to-lovers')",
                hint: "Elle est furieuse, mais contre sa volonté, remarque-t-elle un détail attirant chez lui ? Le son de sa voix, un sourire en coin qui l'agace autant qu'il la trouble ?"
              },
            ]
          }
        ]
      },
      {
        id: 'romance-writing-theory',
        title: 'Romance : Les Codes du Genre',
        description: "Maîtrisez les concepts clés comme la tension romantique et les schémas narratifs populaires ('tropes').",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Les Mécanismes de l'Amour",
            description: "Comprenez les concepts et structures qui font battre le cœur des lecteurs.",
            exercises: [
              {
                type: 'qcm',
                id: 1102,
                question: "Qu'est-ce que la 'tension romantique' dans une histoire ?",
                choices: [
                  { id: 'A', text: 'Une dispute violente entre les personnages.' },
                  { id: 'B', text: "L'attirance non-dite et les obstacles qui empêchent les personnages d'être ensemble." },
                  { id: 'C', text: "Le moment où ils s'avouent enfin leur amour." }
                ],
                correctChoiceId: 'B',
                explanation: "La tension, c'est le fameux 'vont-ils ou vont-ils pas ?'. C'est ce qui tient le lecteur en haleine : l'attirance est là, mais quelque chose (la fierté, la peur, un malentendu) les bloque.",
              },
              {
                type: 'qcm',
                id: 1104,
                question: "Le trope 'enemies-to-lovers' (d'ennemis à amants) fonctionne car il...",
                choices: [
                  { id: 'A', text: "Montre que l'amour est irrationnel." },
                  { id: 'B', text: 'Crée une forte tension émotionnelle qui se transforme en passion.' },
                  { id: 'C', text: 'Est plus réaliste que les autres scénarios.' }
                ],
                correctChoiceId: 'B',
                explanation: "La haine et l'amour sont deux émotions très fortes. Ce trope joue sur l'idée que l'énergie intense du conflit peut se transformer en une attraction tout aussi intense.",
              },
              {
                type: 'qcm',
                id: 1106,
                question: "Quel est le 'climax' (point culminant) typique d'une romance ?",
                choices: [
                  { id: 'A', text: "La résolution d'un mystère policier." },
                  { id: 'B', text: 'La déclaration d\'amour finale qui surmonte le dernier obstacle.' },
                  { id: 'C', text: 'Une grande bataille épique.' }
                ],
                correctChoiceId: 'B',
                explanation: "Dans une romance, l'enjeu principal est la relation. Le point culminant est donc le moment où le conflit émotionnel est résolu et où l'amour triomphe.",
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'horror-writing',
    title: 'Atelier : Murmures d\'Effroi',
    description: "Apprenez à manier l'art du suspense, de l'atmosphère et de la peur suggérée.",
    subJourneys: [
      {
        id: 'horror-writing-practical',
        title: 'Horreur : La Pratique du Style',
        description: "Entraînez-vous à rendre une scène ordinaire effrayante et à construire le suspense avant le choc.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : L'Art de l'Inquiétude",
            description: "Découvrez comment rendre une scène ordinaire effrayante en jouant sur les détails et les sens.",
            exercises: [
              {
                type: 'rewrite',
                id: 1201,
                original: 'La maison était vide.',
                style: "Créer une sensation de présence dans le vide",
                hint: "Le silence n'est jamais total. Décrivez un petit bruit qui ne devrait pas être là : un plancher qui grince à l'étage, un murmure indistinct, un courant d'air froid soudain."
              },
              {
                type: 'rewrite',
                id: 1203,
                original: 'Il y avait une poupée dans le coin de la pièce.',
                style: "Rendre un objet banal effrayant ('Uncanny Valley')",
                hint: "Décrivez un détail de la poupée qui est presque humain, mais pas tout à fait : un sourire trop large, un regard vide qui semble vous suivre, une position légèrement anormale."
              },
              {
                type: 'rewrite',
                id: 1205,
                original: 'Soudain, le monstre a sauté sur lui.',
                style: "Construire le suspense avant le 'jump scare'",
                hint: "Juste avant l'attaque, ralentissez le temps. Décrivez un silence soudain, une ombre qui bouge, un son étrange. Faites attendre le lecteur une seconde de trop."
              },
            ]
          }
        ]
      },
      {
        id: 'horror-writing-theory',
        title: 'Horreur : Les Codes du Genre',
        description: "Comprenez la différence entre terreur et horreur et l'art de jouer avec l'imagination du lecteur.",
        levels: [
          {
            level: 1,
            title: "Niveau 1 : Les Mécanismes de la Peur",
            description: "Apprenez les concepts théoriques pour devenir un maître de l'effroi.",
            exercises: [
              {
                type: 'qcm',
                id: 1202,
                question: "Quelle est la différence entre la terreur et l'horreur ?",
                choices: [
                  { id: 'A', text: "Il n'y en a aucune, ce sont des synonymes." },
                  { id: 'B', text: "La terreur est l'angoisse avant de voir le monstre ; l'horreur est le choc quand on le voit." },
                  { id: 'C', text: "L'horreur utilise plus de sang que la terreur." }
                ],
                correctChoiceId: 'B',
                explanation: "C'est une distinction classique : la terreur (ou suspense) est la peur de ce qui *pourrait* arriver. L'horreur (ou le choc) est la répulsion face à ce qui arrive. Un bon récit d'effroi joue avec les deux.",
              },
              {
                type: 'qcm',
                id: 1204,
                question: "En horreur, pourquoi est-il souvent plus efficace de ne pas montrer le monstre tout de suite ?",
                choices: [
                  { id: 'A', text: "Pour économiser le budget des effets spéciaux." },
                  { id: 'B', text: "Parce que l'imagination du lecteur crée quelque chose de plus effrayant que tout ce qu'on peut décrire." },
                  { id: 'C', text: "Parce que le monstre n'est pas vraiment important dans l'histoire." }
                ],
                correctChoiceId: 'B',
                explanation: "C'est la règle d'or de l'horreur, popularisée par des maîtres comme H.P. Lovecraft. Ce qu'on ne voit pas, ce qu'on devine à peine, est toujours plus terrifiant.",
              },
              {
                type: 'qcm',
                id: 1206,
                question: "Qu'est-ce qu'un 'faux-fuyant' (red herring) dans une histoire à suspense ?",
                choices: [
                  { id: 'A', text: 'Une créature marine rouge.' },
                  { id: 'B', text: 'Un indice qui semble très important mais qui vise à tromper le lecteur.' },
                  { id: 'C', text: 'Le véritable monstre, qui se cachait depuis le début.' }
                ],
                correctChoiceId: 'B',
                explanation: "C'est une technique essentielle pour surprendre le lecteur. On attire son attention sur un faux coupable ou une fausse piste pour que la véritable menace, quand elle se révèle, soit un choc.",
              }
            ]
          }
        ]
      }
    ]
  },
];