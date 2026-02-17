export interface AppSettings {
  voiceSpeed: number;   // 0.5 - 1.5
  voicePitch: number;   // 0.5 - 2.0
  enabledCategories: string[]; // which WH categories are active
}

const SETTINGS_KEY = "wh-settings";

const defaultSettings: AppSettings = {
  voiceSpeed: 0.85,
  voicePitch: 1.1,
  enabledCategories: ["who", "what", "where", "when", "why", "how"],
};

export function getSettings(): AppSettings {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) {
      return { ...defaultSettings, ...JSON.parse(saved) };
    }
  } catch {}
  return { ...defaultSettings };
}

export function saveSettings(settings: AppSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
