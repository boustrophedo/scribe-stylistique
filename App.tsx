import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectionScreen from './components/SelectionScreen';
import JourneyMode from './components/JourneyMode';
import MirrorMode from './components/MirrorMode';
import CreativeMode from './components/CreativeMode';
import BadgeNotification from './components/BadgeNotification';
import LevelUpNotification from './components/LevelUpNotification';
import BadgeGallery from './components/BadgeGallery';
import ProfileScreen from './components/ProfileScreen';
import AnalyzeMode from './components/AnalyzeMode';
import ChameleonMode from './components/ChameleonMode';
import CommunityArena from './components/CommunityArena';
import TeacherDashboard from './components/TeacherDashboard';
import ProjectWorkspace from './components/ProjectWorkspace';
import WorkshopMode from './components/WorkshopMode';
import TandemMode from './components/TandemMode';
import StyleFusionMode from './components/StyleFusionMode';
import CharacterInterview from './components/CharacterInterview';
import UniverseIllustrator from './components/UniverseIllustrator';
import PlotDoctor from './components/PlotDoctor';
import SonographMode from './components/SonographMode';
import SceneEditorMode from './components/SceneEditorMode';
import SentenceArchitectMode from './components/SentenceArchitectMode';
import BlockBreakerMode from './components/BlockBreakerMode';
import StylePrunerMode from './components/StylePrunerMode';
import PoeticFragmentsMode from './components/PoeticFragmentsMode';
import LynxEyeMode from './components/LynxEyeMode';
import CharacterOracle from './components/CharacterOracle';
import ScribeDuelMode from './components/ScribeDuelMode';
import InverseLexiconModal from './components/InverseLexiconModal';
import MindMapMode from './components/MindMapMode';
import StoryBuilderMode from './components/StoryBuilderMode';
import HomophoneDuelMode from './components/HomophoneDuelMode';
import TheatreOfRelationsMode from './components/TheatreOfRelationsMode';
import AmbianceMode from './components/AmbianceMode';
import GrimoireMode from './components/GrimoireMode';
import ScribesGallery from './components/ScribesGallery';
import UniverseCodex from './components/UniverseCodex';
import AdjectiveRace from './components/AdjectiveRace';
import EmotionalSeismograph from './components/EmotionalSeismograph';
import VerbSprint from './components/VerbSprint';
import ComparisonDuel from './components/ComparisonDuel';
import StyleIdentificationMode from './components/StyleIdentificationMode';
import DialogueStagingMode from './components/DialogueStagingMode';
import ProfileSelectionScreen from './components/ProfileSelectionScreen';



import { JOURNEYS } from './journeys';
import { BADGES } from './constants';
import { type Badge, type Journey, type AppMode, type ActiveSound } from './types';
import { useUserStore, getXpForNextLevel } from './store/userStore';
import AccessibilityControls from './components/AccessibilityControls';
import { getAmbianceSounds } from './services/geminiService';


interface ResumeInfo {
  journeyId: string;
  exerciseIndex: number;
  journeyTitle: string;
  levelIndex: number;
  levelTitle: string;
}

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('home');
  const [animationState, setAnimationState] = useState<'in' | 'out' | 'initial'>('in');
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | null>(null);
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState<Badge | null>(null);
  const [newlyLeveledUp, setNewlyLeveledUp] = useState<number | null>(null);
  const [startJourneyId, setStartJourneyId] = useState<string | null>(null);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [isLexiconOpen, setIsLexiconOpen] = useState(false);
  const [activeSounds, setActiveSounds] = useState<ActiveSound[]>([]);
  
  // Zustand store integration
  const {
    level,
    xp,
    earnedBadges,
    customJourneys,
    loadInitialData,
    addXp,
    unlockBadge,
    addPerformanceRecords,
    updateCustomJourneys,
    activeProfileId,
    loadProfiles,
    switchProfile,
  } = useUserStore();

  const xpForNextLevel = useMemo(() => getXpForNextLevel(level), [level]);

  useEffect(() => {
    loadProfiles(); // Load all profiles first
  }, [loadProfiles]);

  useEffect(() => {
    if (activeProfileId) {
      loadInitialData(activeProfileId);
    }
  }, [activeProfileId, loadInitialData]);

  // Constellation Background Effect
  useEffect(() => {
    const canvas = document.getElementById('constellation-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 20000); // Adjust density based on screen size

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(203, 213, 225, 0.4)'; // slate-300 with opacity
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 116, 139, ${0.7 - dist / 150})`; // slate-500 with opacity
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  useEffect(() => {
    if (!activeProfileId) return; // Don't run if no profile is active
    try {
      const savedProgress = localStorage.getItem(`journeyProgress-${activeProfileId}`);
      if (savedProgress) {
          const { journeyId, exerciseIndex, levelIndex } = JSON.parse(savedProgress);
          const allJourneys = [...JOURNEYS, ...customJourneys];
          const journey = allJourneys.find(j => j.id === journeyId);

          if (journey && journey.levels &&
              levelIndex < journey.levels.length && 
              exerciseIndex < journey.levels[levelIndex].exercises.length) {
              setResumeInfo({ 
                journeyId, 
                exerciseIndex, 
                journeyTitle: journey.title,
                levelIndex,
                levelTitle: journey.levels[levelIndex].title
              });
          } else {
              localStorage.removeItem(`journeyProgress-${activeProfileId}`);
          }
      }
    } catch(e) {
      console.error("Failed to parse progress from localStorage", e);
      localStorage.removeItem(`journeyProgress-${activeProfileId}`);
    }
  }, [customJourneys, activeProfileId]); // Re-check progress when custom journeys are loaded/updated or profile changes

  // Effect to re-validate resumeInfo if custom journeys change
  useEffect(() => {
    if (resumeInfo && activeProfileId) {
        const allJourneys = [...JOURNEYS, ...customJourneys];
        const journeyExists = allJourneys.some(j => j.id === resumeInfo.journeyId);
        if (!journeyExists) {
            setResumeInfo(null);
            localStorage.removeItem(`journeyProgress-${activeProfileId}`); // Clean up invalid progress
        }
    }
  }, [customJourneys, resumeInfo, activeProfileId]);
  
  const handleModeChange = (newMode: AppMode, journeyId?: string) => {
    if (appMode === newMode && appMode !== 'home') return;
    if (journeyId) setStartJourneyId(journeyId);
    
    setAnimationState('out');
    setTimeout(() => {
        setAppMode(newMode);
        setAnimationState('initial');
        setTimeout(() => setAnimationState('in'), 20);
    }, 500);
  };
  
  const handleXpGain = (amount: number) => {
    const newLevel = addXp(amount);
    if (newLevel) {
        setNewlyLeveledUp(newLevel);
        setTimeout(() => setNewlyLeveledUp(null), 6000);
    }
  };

  const handleUnlockBadge = (badge: Badge) => {
    const wasUnlocked = unlockBadge(badge.id);
    if (wasUnlocked) {
      setNewlyUnlockedBadge(badge);
      setTimeout(() => setNewlyUnlockedBadge(null), 6000);
    }
  };

  const handleResetToHome = () => {
    setAnimateLogo(true);
    setTimeout(() => setAnimateLogo(false), 1000);
    handleModeChange('home');
    setStartJourneyId(null);
  };

  const handleResumeJourney = () => handleModeChange('journey');
  
    const handleGenerateAmbiance = async (description: string) => {
        handleStopAllAmbiance();
        try {
            const soundSuggestions = await getAmbianceSounds(description);
            const newSounds: ActiveSound[] = soundSuggestions.map(s => {
                // Mocking HTMLAudioElement as we can't generate/fetch real audio
                const mockAudio = {
                    play: () => console.log(`Playing ${s.name}`),
                    pause: () => console.log(`Pausing ${s.name}`),
                    loop: true,
                    volume: 0.5,
                } as unknown as HTMLAudioElement;

                return {
                    key: s.key,
                    name: s.name,
                    audio: mockAudio,
                    volume: 0.5,
                    isPlaying: false,
                };
            });
            setActiveSounds(newSounds);
        } catch (e) {
            console.error("Failed to generate ambiance", e);
            throw e; // Re-throw to be caught in AmbianceMode
        }
    };

    const handleToggleAmbiancePlay = (key: string) => {
        setActiveSounds(prevSounds =>
            prevSounds.map(sound => {
                if (sound.key === key) {
                    const isPlaying = !sound.isPlaying;
                    if (isPlaying) {
                        sound.audio.play();
                    } else {
                        sound.audio.pause();
                    }
                    return { ...sound, isPlaying };
                }
                return sound;
            })
        );
    };

    const handleAmbianceVolumeChange = (key: string, volume: number) => {
        setActiveSounds(prevSounds =>
            prevSounds.map(sound => {
                if (sound.key === key) {
                    sound.audio.volume = volume;
                    return { ...sound, volume };
                }
                return sound;
            })
        );
    };

    const handleStopAllAmbiance = () => {
        setActiveSounds(prevSounds => {
            prevSounds.forEach(s => s.audio.pause());
            return prevSounds.map(s => ({ ...s, isPlaying: false }));
        });
    };

    const handleSelectLexiconWord = (word: string) => {
        navigator.clipboard.writeText(word);
        setIsLexiconOpen(false);
    };
  
    const handleSwitchProfile = () => {
      switchProfile(null); // This will set activeProfileId to null
      // Clear any app-level state related to the old profile
      setAppMode('home');
      setResumeInfo(null);
      // Other state resets if necessary
    };

  const renderContent = () => {
    switch(appMode) {
      case 'home': return <SelectionScreen onSelectMode={handleModeChange} onResumeJourney={handleResumeJourney} resumeInfo={resumeInfo} />;
      case 'journey': return <JourneyMode journeys={[...JOURNEYS, ...customJourneys]} onBackToHome={handleResetToHome} resumeInfo={resumeInfo} onUnlockBadge={handleUnlockBadge} onJourneyComplete={addPerformanceRecords} startJourneyId={startJourneyId} onXpGain={handleXpGain} />;
      case 'mirror': return <MirrorMode onBackToHome={handleResetToHome} onUnlockBadge={handleUnlockBadge} onJourneyComplete={addPerformanceRecords} />;
      case 'creative': return <CreativeMode onBackToHome={handleResetToHome} onSelectMode={handleModeChange} />;
      case 'badges': return <BadgeGallery allBadges={BADGES} earnedBadgeIds={earnedBadges} onBack={handleResetToHome} />;
      case 'profile': return <ProfileScreen onBack={handleResetToHome} />;
      case 'analyze': return <AnalyzeMode onBackToHome={handleResetToHome} />;
      case 'duel': return <ScribeDuelMode onBackToHome={handleResetToHome} />;
      case 'chameleon': return <ChameleonMode onBack={handleResetToHome} />;
      case 'community': return <CommunityArena onBackToHome={handleResetToHome} />;
      case 'teacher': return <TeacherDashboard onBackToHome={handleResetToHome} />;
      case 'project': return <ProjectWorkspace onBackToHome={handleResetToHome} />;
      case 'workshop': return <WorkshopMode onBackToHome={handleResetToHome} />;
      case 'tandem': return <TandemMode onBackToHome={handleResetToHome} />;
      case 'fusion': return <StyleFusionMode onBack={handleResetToHome} />;
      case 'interview': return <CharacterInterview onBack={() => handleModeChange('creative')} />;
      case 'illustrator': return <UniverseIllustrator onBack={() => handleModeChange('creative')} />;
      case 'plot_doctor': return <PlotDoctor onBack={() => handleModeChange('creative')} />;
      case 'sonograph': return <SonographMode onBackToHome={handleResetToHome} />;
      case 'scene_editor': return <SceneEditorMode onBackToHome={handleResetToHome} />;
      case 'sentence_architect': return <SentenceArchitectMode onBackToHome={handleResetToHome} />;
      case 'block_breaker': return <BlockBreakerMode onBackToHome={handleResetToHome} />;
      case 'style_pruner': return <StylePrunerMode onBackToHome={handleResetToHome} />;
      case 'poetic_fragments': return <PoeticFragmentsMode onBackToHome={handleResetToHome} />;
      case 'lynx_eye': return <LynxEyeMode onBackToHome={handleResetToHome} />;
      case 'oracle': return <CharacterOracle onBack={() => handleModeChange('creative')} />;
      case 'mind_map': return <MindMapMode onBackToHome={handleResetToHome} />;
      case 'story_builder': return <StoryBuilderMode onBackToHome={handleResetToHome} />;
      case 'homophone_duel': return <HomophoneDuelMode onBackToHome={handleResetToHome} />;
      case 'theatre': return <TheatreOfRelationsMode onBackToHome={handleResetToHome} />;
      case 'ambiance': return <AmbianceMode onBack={() => handleModeChange('creative')} onBackToHome={handleResetToHome} activeSounds={activeSounds} onGenerate={handleGenerateAmbiance} onTogglePlay={handleToggleAmbiancePlay} onVolumeChange={handleAmbianceVolumeChange} />;
      case 'grimoire': return <GrimoireMode onBack={handleResetToHome} />;
      case 'gallery': return <ScribesGallery onBack={handleResetToHome} />;
      case 'codex': return <UniverseCodex onBack={() => handleModeChange('creative')} />;
      case 'adjective_race': return <AdjectiveRace onBack={() => handleModeChange('creative')} />;
      case 'seismograph': return <EmotionalSeismograph onBack={() => handleModeChange('creative')} />;
      case 'verb_sprint': return <VerbSprint onBack={() => handleModeChange('creative')} />;
      case 'comparison_duel': return <ComparisonDuel onBack={() => handleModeChange('creative')} />;
      case 'style_identification': return <StyleIdentificationMode onBackToHome={handleResetToHome} />;
      case 'dialogue_staging': return <DialogueStagingMode onBack={() => handleModeChange('creative')} />;
      default: return <SelectionScreen onSelectMode={handleModeChange} onResumeJourney={handleResumeJourney} resumeInfo={resumeInfo} />;
    }
  };
  
  const animationClasses = {
    in: 'is-in',
    out: 'is-out',
    initial: 'initial-in'
  };

  if (!activeProfileId) {
    return <ProfileSelectionScreen />;
  }

  return (
    <div className="bg-slate-900 text-slate-200 flex-grow flex flex-col font-sans">
      <AccessibilityControls />
      {newlyUnlockedBadge && <BadgeNotification badge={newlyUnlockedBadge} />}
      {newlyLeveledUp && <LevelUpNotification level={newlyLeveledUp} />}

      <InverseLexiconModal
        isOpen={isLexiconOpen}
        onClose={() => setIsLexiconOpen(false)}
        onSelectWord={handleSelectLexiconWord}
      />

      <Header
        onLogoClick={handleResetToHome}
        onBadgesClick={() => handleModeChange('badges')}
        onProfileClick={() => handleModeChange('profile')}
        onLexiconClick={() => setIsLexiconOpen(true)}
        onGrimoireClick={() => handleModeChange('grimoire')}
        onSwitchProfile={handleSwitchProfile}
        animate={animateLogo}
        activeSounds={activeSounds}
        onStopAllAmbiance={handleStopAllAmbiance}
        level={level}
        xp={xp}
        xpForNextLevel={xpForNextLevel}
      />
      <main className="flex-grow w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div key={appMode} className={`w-full view-container ${animationClasses[animationState]}`}>
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;