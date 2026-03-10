import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Volume2, RotateCcw } from "lucide-react";
import { categories } from "../data/questions";
import { getSettings, saveSettings, AppSettings } from "../lib/settings";
import { speak } from "../lib/speech";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<AppSettings>(getSettings);

  const update = (partial: Partial<AppSettings>) => {
    const next = { ...settings, ...partial };
    setSettings(next);
    saveSettings(next);
  };

  const toggleCategory = (id: string) => {
    const current = settings.enabledCategories;
    const next = current.includes(id)
      ? current.filter((c) => c !== id)
      : [...current, id];
    if (next.length === 0) return;
    update({ enabledCategories: next });
  };

  const testVoice = () => {
    speak("Hello! Let's practice WH questions together!");
  };

  const resetDefaults = () => {
    const defaults: AppSettings = {
      voiceSpeed: 0.85,
      voicePitch: 1.1,
      enabledCategories: ["who", "what", "where", "when", "why", "how"],
    };
    setSettings(defaults);
    saveSettings(defaults);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground px-4 py-4 flex items-center gap-3 shadow-playful-sm">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigate("/")}
          className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <h1 className="text-2xl font-extrabold">⚙️ Settings</h1>
      </header>

      <main className="flex-1 p-4 max-w-lg mx-auto w-full space-y-6 pb-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl p-6 shadow-playful"
        >
          <h2 className="text-xl font-extrabold text-foreground mb-1">🗣️ Voice Speed</h2>
          <p className="text-sm text-muted-foreground mb-4">How fast the voice reads questions</p>
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.05}
            value={settings.voiceSpeed}
            onChange={(e) => update({ voiceSpeed: parseFloat(e.target.value) })}
            className="w-full h-3 rounded-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-sm font-bold text-muted-foreground mt-1">
            <span>🐢 Slow</span>
            <span className="text-foreground">{settings.voiceSpeed.toFixed(2)}x</span>
            <span>🐇 Fast</span>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-card rounded-3xl p-6 shadow-playful"
        >
          <h2 className="text-xl font-extrabold text-foreground mb-1">🎵 Voice Pitch</h2>
          <p className="text-sm text-muted-foreground mb-4">How high or low the voice sounds</p>
          <input
            type="range"
            min={0.5}
            max={2.0}
            step={0.1}
            value={settings.voicePitch}
            onChange={(e) => update({ voicePitch: parseFloat(e.target.value) })}
            className="w-full h-3 rounded-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-sm font-bold text-muted-foreground mt-1">
            <span>Low</span>
            <span className="text-foreground">{settings.voicePitch.toFixed(1)}</span>
            <span>High</span>
          </div>
        </motion.section>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={testVoice}
          className="w-full bg-accent text-accent-foreground rounded-2xl p-4 font-bold text-lg shadow-playful flex items-center justify-center gap-3"
        >
          <Volume2 className="w-6 h-6" />
          Test Voice
        </motion.button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-3xl p-6 shadow-playful"
        >
          <h2 className="text-xl font-extrabold text-foreground mb-1">📂 Categories</h2>
          <p className="text-sm text-muted-foreground mb-4">Choose which question types to practice</p>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => {
              const isEnabled = settings.enabledCategories.includes(cat.id);
              return (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => toggleCategory(cat.id)}
                  className={`rounded-2xl p-4 flex items-center gap-3 font-bold text-left transition-all border-2 ${
                    isEnabled
                      ? `${cat.colorClass} border-transparent shadow-playful-sm`
                      : "bg-muted text-muted-foreground border-dashed border-border opacity-60"
                  }`}
                >
                  <span className="text-2xl">{cat.emoji}</span>
                  <div>
                    <div className="text-base">{cat.label}</div>
                    <div className="text-xs opacity-75">{isEnabled ? "ON" : "OFF"}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.section>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetDefaults}
          className="w-full bg-muted text-muted-foreground rounded-2xl p-4 font-bold text-base flex items-center justify-center gap-2 hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reset to Defaults
        </motion.button>
      </main>
    </div>
  );
};

export default SettingsPage;
