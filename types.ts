
export type AppMode = 'home' | 'journey' | 'mirror' | 'creative' | 'badges' | 'profile' | 'analyze' | 'duel' | 'chameleon' | 'teacher' | 'project' | 'workshop' | 'tandem' | 'fusion' | 'interview' | 'illustrator' | 'plot_doctor' | 'sonograph' | 'scene_editor' | 'sentence_architect' | 'block_breaker' | 'style_pruner' | 'poetic_fragments' | 'lynx_eye' | 'oracle' | 'mind_map' | 'story_builder' | 'homophone_duel' | 'theatre' | 'ambiance' | 'grimoire' | 'gallery' | 'dictation' | 'codex' | 'adjective_race' | 'seismograph' | 'verb_sprint' | 'comparison_duel' | 'style_identification' | 'dialogue_staging';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji
}

export interface StyleAnalysisPoint {
  title: string;
  analysis: string;
}

export interface StyleAnalysisReport {
  strengths: StyleAnalysisPoint[];
  weaknesses: StyleAnalysisPoint[];
}

export interface AuthorComparison {
  authorName: string;
  analysis: string;
}

export interface StylisticCompassResult {
    genre: string;
    tone: string;
    authorComparisons: AuthorComparison[];
}

// ADN Stylistique
export interface AuthorComparisonDNA {
  authorName: string;
  analysis: string;
  score: number; // Percentage match
}

export interface StylisticDNA {
  dominantGenre: string;
  dominantTone: string;
  authorAffinities: AuthorComparisonDNA[];
}


export interface MirrorModeResult {
  analysis: StyleAnalysisReport;
  customJourney: Journey;
}

export interface FeedbackPoint {
  title: string;
  analysis: string;
  userExample?: string;
  originalExample?: string;
}

export interface QCMChoice {
  id: string; // e.g., 'A', 'B', 'C'
  text: string;
}

export interface ExerciseQCM {
  type: 'qcm';
  id: number;
  question: string;
  choices: QCMChoice[];
  correctChoiceId: string;
  explanation: string;
  hint?: string;
}

export interface ExerciseRewrite {
  type: 'rewrite';
  id: number;
  original: string;
  style: string;
  hint?: string;
}

export type Exercise = ExerciseRewrite | ExerciseQCM;


export interface DifficultyLevel {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  description: string;
  exercises: Exercise[];
}

export interface Journey {
  id:string;
  title: string;
  description: string;
  levels?: DifficultyLevel[];
  subJourneys?: Journey[];
}

export interface DescriptiveFeedbackExample {
  styleTitle: string;
  rewrittenSentence: string;
  analysis: string;
}

export interface FeedbackResult {
  score: number;
  comment: string;
  examples?: DescriptiveFeedbackExample[];
}

export interface PerformanceRecord {
  exercise: Exercise;
  attempts: number;
  score: number;
  userSubmission?: string;
  userChoiceId?: string;
  journeyId: string;
  journeyTitle: string;
  levelTitle: string;
}




export interface AISuggestion {
  rewrittenSentence: string;
  explanation: string;
}

export interface WritingTic {
    analysis: string;
    challenge: ExerciseRewrite; // Writing tic challenge is always a rewrite exercise
}

// Creative Mode: Word-Smith Workshop
export interface WordSmithTurn {
  role: 'user' | 'model';
  text: string;
}
export interface WordSmithChoice {
  text: string;
  nuance: string;
}
export interface WordSmithResponse {
  nextStep: 'question' | 'choices' | 'finished';
  content: string | WordSmithChoice[];
  rewrittenSentence?: string;
}


// Creative Mode: Narrative Labyrinth
export interface NarrativeGoal {
  title: string;
  description: string;
}


// Creative Mode: Style Puzzle
export interface PuzzleBlank {
  id: number;
  type: 'verbe' | 'adjectif' | 'comparaison' | 'adverbe';
}
export interface StylePuzzle {
  sentenceWithBlanks: string;
  blanks: PuzzleBlank[];
}

// Creative Mode: Dialogue Dynamo
export interface DialogueQCMChoice {
  text: string;
  nuance: string;
}
export interface DialogueQCMChallenge {
  context: string;
  dialogue: string;
  choices: DialogueQCMChoice[];
}
export interface DialogueQCMFeedback {
  analysis: string;
}

// Creative Mode: Visual Storyteller
export interface ComicPanel {
    description: string;
    imageUrl: string | undefined;
}

// Ambiance Mode
export interface ActiveSound {
    key: string;
    name: string;
    audio: HTMLAudioElement;
    volume: number;
    isPlaying: boolean;
}

// AnalyzeMode
export interface AnalysisAndChallenge {
  analysis: string;
  instructions: string;
  originalExcerpt: string;
  narrativeKeywords: string[];
}
export interface ComparisonFeedback {
  improvements: FeedbackPoint[];
}

// DuelMode
export interface DuelChallenge {
    context: string;
    original: string;
    style: string;
}
export interface DuelFeedback {
    userAnalysis: { title: string; analysis: string; };
    aiAnalysis: { title: string; analysis: string; };
    verdict: string;
}

// ChameleonMode
export interface ChameleonStyleAnalysis {
    styleName: string;
    analysisPoints: { title: string; description: string }[];
}
export interface ChameleonChallenge {
    original: string;
    instructions: string;
}
export interface ChameleonFeedback {
    analysis: string;
    rewrittenSentence: string;
}

// CommunityArena
export interface CommunityChallenge {
    title: string;
    description: string;
    prompt: string;
}
export interface LeaderboardEntry {
    rank: number;
    author: string;
    submission: string;
    score: number;
}

// PlotDoctor & ProjectWorkspace
export interface PlotPointAnalysis {
    title: string;
    analysis: string;
    suggestion: string;
}
export interface PlotAnalysis {
    strengths: PlotPointAnalysis[];
    weaknesses: PlotPointAnalysis[];
}

// ProjectWorkspace
export interface Chapter {
    id: string;
    title: string;
    content: string;
}
export interface Project {
    id: string;
    title: string;
    description: string;
    chapters: Chapter[];
}
export interface ProactiveSuggestion {
    type: string;
    text: string;
    suggestion: string;
}

// Mini-Workshop in ProjectWorkspace
export interface MiniWorkshopResult {
    rewritten: string;
    explanation: string;
}

// WorkshopMode
export interface WorkshopChallenge {
    title: string;
    description: string;
    prompt: string;
}
export interface PeerSubmission {
    author: string;
    text: string;
}
export interface PeerFeedback {
    author: string;
    feedback: string;
}
export interface Workshop {
    challenge: WorkshopChallenge;
    peerSubmissions: PeerSubmission[];
    peerFeedbackOnUser: PeerFeedback[];
    moderatorSummary: string;
}

// TandemMode
export type SuggestionType = 'reformulate' | 'correct' | 'concise' | 'staging' | 'sensory' | 'perspective';
export interface TandemSuggestion {
    title: string;
    suggestion: string;
    explanation: string;
    originalText: string;
}
export type ThesaurusSuggestion = {
    categoryName: string;
    synonyms: string[];
}[];

// StyleFusionMode
export interface StyleFusionAnalysis {
    styleAAnalysis: { name: string; traits: string[]; };
    styleBAnalysis: { name: string; traits: string[]; };
    fusionChallenge: string;
}
export interface StyleFusionFeedback {
    feedbackOnStyleA: string;
    feedbackOnStyleB: string;
    overallFeedback: string;
}

// CharacterInterview
export interface CharacterProfile {
    name: string;
    personality: string;
    goal: string;
    fear: string;
}
export interface CharacterTurn {
    role: 'user' | 'character';
    text: string;
}

// SonographMode
export interface RythmAnalysisPoint {
    sentence: string;
    wordCount: number;
    texture: 'fluide' | 'percutante';
}
export interface RythmAnalysisResult {
    points: RythmAnalysisPoint[];
    summary: string;
}

// SceneEditorMode
export interface SceneBeat {
    id: string;
    summary: string;
}
export interface BeatOrderFeedback {
    analysis: string;
}

// SentenceArchitectMode
export interface SyntacticUnit {
    id: string;
    text: string;
    type: string;
}
export interface FlowFeedback {
    analysis: string;
}

// BlockBreakerMode
export type BlockType = 'stuck' | 'flat' | 'dialogue';
export interface UnblockingDrill {
    type: 'verb' | 'sensory' | 'dialogue' | 'character';
    challenge: string;
}

// StylePrunerMode
export interface PruningSuggestion {
    text_to_remove: string;
    justification: string;
}

// LynxEyeMode
export interface LynxEyeChallenge {
    mysteryText: string;
    choices: { id: string; name: string; }[];
    correctAuthorId: string;
    explanation: string;
}

// CharacterOracle
export interface RevelationCard {
    title: string;
    content: string;
}
export interface CharacterOracleTurn {
    role: 'user' | 'oracle';
    text: string;
    revelationCard?: RevelationCard;
}
export interface CharacterOracleResponse {
    question: string;
    revelationCard?: RevelationCard;
}

// ScribeDuelMode
export interface ScribeDuelChallenge {
    context: string;
    original: string;
    style: string;
}
export interface ScribeDuelFeedback {
    userAnalysis: { title: string; analysis: string; };
    aiAnalysis: { title: string; analysis: string; };
    verdict: string;
    winner: 'user' | 'ai' | 'tie';
}

// InverseLexiconModal
export interface LexiconSuggestion {
    word: string;
    definition: string;
    example: string;
}

// MindMapMode
export interface MindMapNode {
    id: string;
    content: string;
    x: number;
    y: number;
    category?: string;
}

// StoryBuilderMode
export interface StoryBlock {
    id: string;
    type: string;
    content: string;
}

// HomophoneDuelMode
export interface HomophoneChallenge {
    sentenceWithBlank: string;
    choices: [string, string];
    correctChoice: string;
    mnemonic: string;
}

// TheatreOfRelationsMode
export interface TheatreCharacter {
    name: string;
    traits: string;
}
export interface TheatreTurn {
    author: 'A' | 'B';
    dialogue: string;
}
export type TheatreScene = TheatreTurn[];

// GrimoireMode: Now represents a "Formula Card"
export interface GrimoireEntry {
  id: string;
  original: string;
  rewrite: string;
  style: string;
  journeyTitle: string;
  levelTitle: string;
  formulaName: string;
  formulaExplanation: string;
  icon: string; // emoji
}

// ScribesGallery
export interface GalleryExample {
    original: string;
    rewrite: string;
    style: string;
    comment: string;
}

// Universe Codex
export interface CodexEntry {
  id: string;
  name: string;
  type: 'Personnage' | 'Lieu' | 'Objet' | 'Créature' | 'Événement';
  fields: { question: string; answer: string }[];
  summary: string;
}

// Adjective Race
export interface AdjectiveRaceChallenge {
  sentence: string;
  wordToReplace: string;
}

export interface EvaluatedWord {
  word: string;
  comment: string;
  points: number;
}

export interface AdjectiveRaceEvaluation {
  totalScore: number;
  feedback: string;
  evaluatedWords: EvaluatedWord[];
}

// Emotional Seismograph
export interface EmotionalDataPoint {
  sentence: string;
  intensity: number; // 0-100
}

export interface SeismographResult {
  points: EmotionalDataPoint[];
  summary: string;
}

// Verb Sprint
export interface VerbSprintChallenge {
  sentence: string;
  wordToReplace: string;
}

export interface EvaluatedVerb {
  word: string;
  comment: string;
  points: number;
}

export interface VerbSprintEvaluation {
  totalScore: number;
  feedback: string;
  evaluatedWords: EvaluatedVerb[];
}

// Comparison Duel
export interface ComparisonDuelChallenge {
  sentenceFragment: string;
}

export interface EvaluatedComparison {
  comparison: string;
  comment: string;
  points: number;
}

export interface ComparisonDuelEvaluation {
  totalScore: number;
  feedback: string;
  evaluatedComparisons: EvaluatedComparison[];
}

// Style Identification Mode
export interface StyleIdentificationChoice {
  id: string;
  name: string;
  explanation: string;
}

export interface StyleIdentificationChallenge {
  text: string;
  choices: StyleIdentificationChoice[];
  correctChoiceId: string;
  feedback: string;
}

// Dialogue Staging Mode (Metteur en Scène)
export interface DialogueStagingChoice {
  id: string;
  text: string;
  explanation: string;
  diff: string;
}

export interface DialogueStagingChallenge {
  context: string;
  dialogue: string;
  choices: DialogueStagingChoice[];
  correctChoiceId: string;
}
