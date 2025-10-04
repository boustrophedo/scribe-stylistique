import { type Badge } from './types';

export const BADGES: Badge[] = [
  {
    id: 'show-dont-tell-complete',
    name: 'Maître du Concret',
    description: 'Terminer le parcours "Le Parcours du Montrer, ne pas Dire".',
    icon: '👁️',
  },
  {
    id: 'dialogue-complete',
    name: 'Dramaturge Éloquent',
    description: 'Terminer le parcours "Le Parcours des Dialogues Vivants".',
    icon: '💬',
  },
  {
    id: 'world-building-complete',
    name: 'Architecte d\'Univers',
    description: 'Terminer le parcours "Le Parcours du Monde Immersif".',
    icon: '🌍',
  },
  {
    id: 'dialogue-tags-complete',
    name: 'Metteur en Scène',
    description: 'Terminer le parcours "Le Parcours des Incises Expressives".',
    icon: '🎭',
  },
  {
    id: 'streak-3',
    name: 'Série Impeccable',
    description: 'Réussir 3 exercices d\'affilée du premier coup.',
    icon: '🔥',
  },
  {
    id: 'first-mirror',
    name: 'Introspection',
    description: 'Terminer son premier parcours personnalisé en Mode Miroir.',
    icon: '🪞',
  },
  {
    id: 'epic-writing-practical-complete',
    name: 'Chroniqueur Épique',
    description: 'Terminer le parcours pratique du genre Épique.',
    icon: '📜',
  },
  {
    id: 'epic-writing-theory-complete',
    name: 'Savant des Légendes',
    description: 'Terminer le parcours théorique du genre Épique.',
    icon: '🧠',
  },
  {
    id: 'noir-writing-practical-complete',
    name: 'Limier des Mots',
    description: 'Terminer le parcours pratique du genre Polar.',
    icon: '🕵️',
  },
  {
    id: 'noir-writing-theory-complete',
    name: 'Analyste du Crime',
    description: 'Terminer le parcours théorique du genre Polar.',
    icon: '🧠',
  },
  {
    id: 'comedy-writing-practical-complete',
    name: 'Plume Légère',
    description: 'Terminer le parcours pratique du genre Comique.',
    icon: '😂',
  },
  {
    id: 'comedy-writing-theory-complete',
    name: 'Mécanicien du Rire',
    description: 'Terminer le parcours théorique du genre Comique.',
    icon: '🧠',
  },
  {
    id: 'sci-fi-writing-practical-complete',
    name: 'Bâtisseur de Futurs',
    description: 'Terminer le parcours pratique du genre Science-Fiction.',
    icon: '🚀',
  },
  {
    id: 'sci-fi-writing-theory-complete',
    name: 'Chrono-théoricien',
    description: 'Terminer le parcours théorique du genre Science-Fiction.',
    icon: '🧠',
  },
  {
    id: 'romance-writing-practical-complete',
    name: 'Artisan des Cœurs',
    description: 'Terminer le parcours pratique du genre Romance.',
    icon: '❤️',
  },
  {
    id: 'romance-writing-theory-complete',
    name: 'Cartographe du Cœur',
    description: 'Terminer le parcours théorique du genre Romance.',
    icon: '🧠',
  },
  {
    id: 'horror-writing-practical-complete',
    name: 'Sculpteur de Cauchemars',
    description: 'Terminer le parcours pratique du genre Horreur.',
    icon: '👻',
  },
  {
    id: 'horror-writing-theory-complete',
    name: 'Anatomiste de la Peur',
    description: 'Terminer le parcours théorique du genre Horreur.',
    icon: '🧠',
  },
];

export const TITLES: string[] = [
  'Novice de la Plume',    // Niveaux 1-5
  'Apprenti Scribe',      // Niveaux 6-10
  'Artisan des Mots',     // Niveaux 11-15
  'Maître Styliste',      // Niveaux 16-20
  'Architecte Narratif',  // Niveaux 21-25
  'Virtuose Littéraire',   // Niveaux 26-30
  'Légende de l\'Encre',   // Niveaux 31+
];

export const THEMES = [
  { id: 'default', name: 'Défaut', unlockLevel: 1 },
  { id: 'sepia', name: 'Sépia', unlockLevel: 10 },
  { id: 'cyberpunk', name: 'Cyberpunk', unlockLevel: 20 },
  { id: 'library', name: 'Bibliothèque', unlockLevel: 30 },
  { id: 'high-contrast', name: 'Contraste Élevé', unlockLevel: 1 },
];