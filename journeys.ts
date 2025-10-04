import { create } from 'zustand';
import { type Journey, type PerformanceRecord, type Badge, type StylisticDNA, type WritingTic, type GrimoireEntry } from '../types';

// Function to calculate XP needed for the next level
export const getXpForNextLevel = (level: number) => 100 + (level - 1) * 50;

interface AccessibilitySettings {
  accessibleFont: boolean;
  fontSize: number;
  lineHeight: number;
  theme: string;
}

const defaultAccessibility: AccessibilitySettings = {
  accessibleFont: false,
  fontSize: 16,
  lineHeight: 1.5,
  theme: 'default',
};

// This defines the state for a single user profile
export interface UserProfileState {
  id: string;
  name: string;
  level: number;
  xp: number;
  earnedBadges: string[];
  customJourneys: Journey[];
  performanceHistory: PerformanceRecord[];
  stylisticDNA: StylisticDNA | null;
  writingTics: WritingTic[];
  grimoire: GrimoireEntry[];
  accessibility: AccessibilitySettings;
}

// This is the full store state, which manages multiple profiles
interface UserStoreState {
  profiles: Record<string, UserProfileState>;
  activeProfileId: string | null;

  // Derived state for the active profile (for convenience)
  id: string;
  name: string;
  level: number;
  xp: number;
  earnedBadges: string[];
  customJourneys: Journey[];
  performanceHistory: PerformanceRecord[];
  stylisticDNA: StylisticDNA | null;
  writingTics: WritingTic[];
  grimoire: GrimoireEntry[];
  accessibility: AccessibilitySettings;
  
  loadProfiles: () => void;
  createProfile: (name: string) => void;
  switchProfile: (profileId: string | null) => void;
  loadInitialData: (profileId: string) => void;
  
  // Actions that operate on the active profile
  addXp: (amount: number) => number | null;
  unlockBadge: (badgeId: string) => boolean;
  addPerformanceRecords: (records: PerformanceRecord[]) => void;
  updateCustomJourneys: (journeys: Journey[]) => void;
  setStylisticDNA: (dna: StylisticDNA) => void;
  addWritingTic: (tic: WritingTic) => void;
  addGrimoireEntry: (entry: GrimoireEntry) => void;
  setAccessibility: (settings: Partial<AccessibilitySettings>) => void;
  exportProfile: (profileId: string) => string | null;
  importProfile: (code: string) => { success: boolean, message: string };
}

const defaultProfileState: Omit<UserProfileState, 'id' | 'name'> = {
  level: 1,
  xp: 0,
  earnedBadges: [],
  customJourneys: [],
  performanceHistory: [],
  stylisticDNA: null,
  writingTics: [],
  grimoire: [],
  accessibility: defaultAccessibility,
};


export const useUserStore = create<UserStoreState>((set, get) => {
  
  const saveState = (newState: Partial<Pick<UserStoreState, 'profiles' | 'activeProfileId'>>) => {
    const currentState = get();
    const updatedState = { ...currentState, ...newState };
    
    const dataToSave = {
      profiles: updatedState.profiles,
      activeProfileId: updatedState.activeProfileId,
    };
    localStorage.setItem('scribeProfiles', JSON.stringify(dataToSave));
  };
  
  const updateActiveProfile = (updater: (profile: UserProfileState) => UserProfileState) => {
    const { activeProfileId, profiles } = get();
    if (!activeProfileId) return;

    const activeProfile = profiles[activeProfileId];
    if (activeProfile) {
      const updatedProfile = updater(activeProfile);
      const newProfiles = { ...profiles, [activeProfileId]: updatedProfile };
      set({ profiles: newProfiles, ...updatedProfile });
      saveState({ profiles: newProfiles });
    }
  };


  return {
    profiles: {},
    activeProfileId: null,
    ...defaultProfileState,
    id: '',
    name: '',

    loadProfiles: () => {
      try {
        const savedData = localStorage.getItem('scribeProfiles');
        if (savedData) {
          const { profiles, activeProfileId } = JSON.parse(savedData);
          set({ profiles: profiles || {}, activeProfileId: activeProfileId || null });
          if (activeProfileId && profiles[activeProfileId]) {
            get().loadInitialData(activeProfileId);
          }
        }
      } catch (e) {
        console.error("Failed to load profiles from localStorage", e);
      }
    },

    createProfile: (name) => {
      const id = `profile-${Date.now()}`;
      const newProfile: UserProfileState = {
        ...defaultProfileState,
        id,
        name,
      };
      const newProfiles = { ...get().profiles, [id]: newProfile };
      set({ profiles: newProfiles });
      saveState({ profiles: newProfiles });
      get().switchProfile(id);
    },

    switchProfile: (profileId) => {
      set({ activeProfileId: profileId });
      saveState({ activeProfileId: profileId });
      if (profileId) {
        get().loadInitialData(profileId);
      } else {
        // Reset to default state but keep profiles loaded
        const { profiles } = get();
        set({ ...defaultProfileState, profiles, id: '', name: '', activeProfileId: null });
      }
    },

    loadInitialData: (profileId) => {
        const { profiles } = get();
        const profileData = profiles[profileId];
        if (profileData) {
            set({ ...profileData });
        }
    },
    
    addXp: (amount) => {
      const { level, xp } = get();
      let newXp = xp + amount;
      let newLevel = level;
      let leveledUp = false;

      let xpForNext = getXpForNextLevel(newLevel);
      while (newXp >= xpForNext) {
        newLevel++;
        newXp -= xpForNext;
        leveledUp = true;
        xpForNext = getXpForNextLevel(newLevel);
      }
      
      updateActiveProfile(profile => ({ ...profile, level: newLevel, xp: newXp }));
      
      return leveledUp ? newLevel : null;
    },

    unlockBadge: (badgeId) => {
      const { earnedBadges } = get();
      if (earnedBadges.includes(badgeId)) {
        return false;
      }
      const newBadges = [...earnedBadges, badgeId];
      updateActiveProfile(profile => ({ ...profile, earnedBadges: newBadges }));
      return true;
    },

    addPerformanceRecords: (records) => {
      updateActiveProfile(profile => ({
        ...profile,
        performanceHistory: [...profile.performanceHistory, ...records]
      }));
    },

    updateCustomJourneys: (journeys) => {
      updateActiveProfile(profile => ({ ...profile, customJourneys: journeys }));
    },

    setStylisticDNA: (dna) => {
      updateActiveProfile(profile => ({ ...profile, stylisticDNA: dna }));
    },

    addWritingTic: (tic) => {
      updateActiveProfile(profile => ({
        ...profile,
        writingTics: [tic, ...profile.writingTics].slice(0, 5)
      }));
    },

    addGrimoireEntry: (entry) => {
      updateActiveProfile(profile => ({
        ...profile,
        grimoire: [entry, ...profile.grimoire]
      }));
    },

    setAccessibility: (newSettings) => {
      updateActiveProfile(profile => ({
        ...profile,
        accessibility: { ...profile.accessibility, ...newSettings }
      }));
    },

    exportProfile: (profileId) => {
      const { profiles } = get();
      const profile = profiles[profileId];
      if (!profile) return null;
      try {
        const jsonString = JSON.stringify(profile);
        return btoa(jsonString); // Encode to Base64
      } catch (e) {
        console.error("Failed to export profile", e);
        return null;
      }
    },

    importProfile: (code) => {
      try {
        const jsonString = atob(code); // Decode from Base64
        const importedProfile = JSON.parse(jsonString) as UserProfileState;

        if (!importedProfile.id || !importedProfile.name || typeof importedProfile.level !== 'number') {
          return { success: false, message: "Le code est invalide ou corrompu." };
        }
        
        const { profiles } = get();
        
        const newProfiles = { ...profiles, [importedProfile.id]: importedProfile };
        set({ profiles: newProfiles });
        saveState({ profiles: newProfiles });

        return { success: true, message: `Profil "${importedProfile.name}" importé avec succès !` };

      } catch (e) {
        console.error("Failed to import profile", e);
        return { success: false, message: "Le code est invalide ou corrompu." };
      }
    },
  };
});
