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
import DictationMode from './components/DictationMode';

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

    const handleSelectLexiconWord = (word: string) => {};

  const renderContent = () => {
    const viewProps = {
        className: `view-container w-full max-w-5xl mx-auto flex-grow ${
            animationState === 'in' ? 'is-in' : animationState === 'out' ? 'is-out' : 'initial-in'
        }`
    };

    switch (appMode) {
        case 'home':
            return (
                <div {...viewProps}>
                    <SelectionScreen onSelectMode={handleModeChange} onResumeJourney={handleResumeJourney} resumeInfo={resumeInfo} />
                </div>
            );
        case 'journey':
             return (
                <div {...viewProps}>
                    <JourneyMode
                        journeys={[...JOURNEYS, ...customJourneys]}
                        onBackToHome={handleResetToHome}
                        resumeInfo={resumeInfo}
                        startJourneyId={startJourneyId}
                        onUnlockBadge={handleUnlockBadge}
                        onJourneyComplete={addPerformanceRecords}
                        onXpGain={handleXpGain}
                    />
                </div>
            );
        case 'mirror':
            return (
                <div {...viewProps}>
                    <MirrorMode 
                        onBackToHome={handleResetToHome} 
                        onUnlockBadge={handleUnlockBadge}
                        onJourneyComplete={addPerformanceRecords}
                    />
                </div>
            );
        case 'creative':
            return (
                <div {...viewProps}>
                    <CreativeMode onBackToHome={handleResetToHome} onSelectMode={handleModeChange} />
                </div>
            );
        case 'badges':
             return (
                <div {...viewProps}>
                    <BadgeGallery allBadges={BADGES} earnedBadgeIds={earnedBadges} onBack={handleResetToHome} />
                </div>
            );
        case 'profile':
            return (
                <div {...viewProps}>
                    <ProfileScreen onBack={handleResetToHome} />
                </div>
            );
        case 'analyze':
            return (
                <div {...viewProps}>
                    <AnalyzeMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'duel':
            return (
                <div {...viewProps}>
                    <ScribeDuelMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'chameleon':
            return (
                <div {...viewProps}>
                    <ChameleonMode onBack={handleResetToHome} />
                </div>
            );
        case 'teacher':
             return (
                <div {...viewProps}>
                    <TeacherDashboard onBackToHome={handleResetToHome} />
                </div>
            );
        case 'project':
            return (
                <div {...viewProps}>
                    <ProjectWorkspace onBackToHome={handleResetToHome} />
                </div>
            );
        case 'workshop':
            return (
                <div {...viewProps}>
                    <WorkshopMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'tandem':
             return (
                <div {...viewProps}>
                    <TandemMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'fusion':
            return (
                <div {...viewProps}>
                    <StyleFusionMode onBack={handleResetToHome} />
                </div>
            );
        case 'interview':
            return (
                <div {...viewProps}>
                    <CharacterInterview onBack={handleResetToHome} />
                </div>
            );
        case 'illustrator':
            return (
                <div {...viewProps}>
                    <UniverseIllustrator onBack={handleResetToHome} />
                </div>
            );
        case 'plot_doctor':
            return (
                <div {...viewProps}>
                    <PlotDoctor onBack={handleResetToHome} />
                </div>
            );
        case 'sonograph':
            return (
                <div {...viewProps}>
                    <SonographMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'scene_editor':
            return (
                <div {...viewProps}>
                    <SceneEditorMode onBackToHome={handleResetToHome} />
                </div>
            );
         case 'sentence_architect':
            return (
                <div {...viewProps}>
                    <SentenceArchitectMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'block_breaker':
            return (
                <div {...viewProps}>
                    <BlockBreakerMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'style_pruner':
            return (
                <div {...viewProps}>
                    <StylePrunerMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'poetic_fragments':
            return (
                <div {...viewProps}>
                    <PoeticFragmentsMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'lynx_eye':
            return (
                <div {...viewProps}>
                    <LynxEyeMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'oracle':
             return (
                <div {...viewProps}>
                    <CharacterOracle onBack={handleResetToHome} />
                </div>
            );
        case 'mind_map':
            return (
                <div {...viewProps}>
                    <MindMapMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'story_builder':
             return (
                <div {...viewProps}>
                    <StoryBuilderMode onBackToHome={handleResetToHome} />
                </div>
            );
         case 'homophone_duel':
            return (
                <div {...viewProps}>
                    <HomophoneDuelMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'theatre':
            return (
                <div {...viewProps}>
                    <TheatreOfRelationsMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'ambiance':
            return (
                <div {...viewProps}>
                     <AmbianceMode 
                        onBackToHome={handleResetToHome}
                        activeSounds={activeSounds}
                        onGenerate={handleGenerateAmbiance}
                        onTogglePlay={handleToggleAmbiancePlay}
                        onVolumeChange={handleAmbianceVolumeChange}
                     />
                </div>
            );
        case 'grimoire':
            return (
                <div {...viewProps}>
                    <GrimoireMode onBack={handleResetToHome} />
                </div>
            );
        case 'gallery':
            return (
                <div {...viewProps}>
                    <ScribesGallery onBack={handleResetToHome} />
                </div>
            );
        case 'dictation':
            return (
                <div {...viewProps}>
                    <DictationMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'codex':
            return (
                <div {...viewProps}>
                    <UniverseCodex onBack={handleResetToHome} />
                </div>
            );
        case 'adjective_race':
            return (
                <div {...viewProps}>
                    <AdjectiveRace onBack={handleResetToHome} />
                </div>
            );
        case 'seismograph':
            return (
                <div {...viewProps}>
                    <EmotionalSeismograph onBack={handleResetToHome} />
                </div>
            );
        case 'verb_sprint':
            return (
                <div {...viewProps}>
                    <VerbSprint onBack={handleResetToHome} />
                </div>
            );
        case 'comparison_duel':
            return (
                <div {...viewProps}>
                    <ComparisonDuel onBack={handleResetToHome} />
                </div>
            );
        case 'style_identification':
            return (
                <div {...viewProps}>
                    <StyleIdentificationMode onBackToHome={handleResetToHome} />
                </div>
            );
        case 'dialogue_staging':
             return (
                <div {...viewProps}>
                    <DialogueStagingMode onBack={handleResetToHome} />
                </div>
            );
        default:
            return (
                <div {...viewProps}>
                    <SelectionScreen onSelectMode={handleModeChange} onResumeJourney={handleResumeJourney} resumeInfo={resumeInfo} />
                </div>
            );
    }
  };

  if (!activeProfileId) {
    return <ProfileSelectionScreen />;
  }

  return (
    <>
      <Header
          onLogoClick={handleResetToHome}
          onBadgesClick={() => handleModeChange('badges')}
          onProfileClick={() => handleModeChange('profile')}
          onLexiconClick={() => setIsLexiconOpen(true)}
          onGrimoireClick={() => handleModeChange('grimoire')}
          onSwitchProfile={() => switchProfile(null)}
          animate={animateLogo}
          activeSounds={activeSounds}
          onStopAllAmbiance={handleStopAllAmbiance}
          level={level}
          xp={xp}
          xpForNextLevel={xpForNextLevel}
      />
      <main className="flex-grow w-full flex items-start justify-center p-4 sm:p-6 lg:p-8">
          {renderContent()}
      </main>
      <Footer />
      {newlyUnlockedBadge && <BadgeNotification badge={newlyUnlockedBadge} />}
      {newlyLeveledUp && <LevelUpNotification level={newlyLeveledUp} />}
      <InverseLexiconModal isOpen={isLexiconOpen} onClose={() => setIsLexiconOpen(false)} onSelectWord={handleSelectLexiconWord} />
      <AccessibilityControls />
    </>
  );
};

export default App;
