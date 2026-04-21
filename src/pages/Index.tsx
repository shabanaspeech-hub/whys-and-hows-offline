import { useNavigate } from "react-router-dom";
import spectraLogo from "@/assets/spectra-speech-logo.png";
import { motion } from "framer-motion";
import { RotateCcw, Settings, Image } from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import { categories, resetProgress } from "../data/questions";
import { getSettings } from "../lib/settings";

const Index = () => {
  const navigate = useNavigate();
  const settings = getSettings();

  const enabledCategories = categories.filter((c) =>
    settings.enabledCategories.includes(c.id)
  );

  const handleReset = () => {
    if (window.confirm("Reset all progress? ⭐ Stars will be cleared.")) {
      resetProgress();
      localStorage.removeItem("wh-scene-progress");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-4 px-4 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center flex flex-col items-center">
          <img src={spectraLogo} alt="Spectra Speech Logo" className="w-20 h-20 object-contain mb-2" />
          <p className="text-sm text-muted-foreground font-bold mb-1">
            Developed by Speech Language Therapist Shabana Tariq
          </p>
          <div className="flex flex-col items-center gap-0">
            <h1 className="text-xl md:text-2xl font-black text-primary">
              Spectra Speech
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              🗣️ WH Questions App
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-semibold mt-2">
            Tap a category to start practicing!
          </p>
        </motion.div>

        <div className="flex gap-3 mt-4">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/settings")}
            className="inline-flex items-center gap-2 bg-card text-foreground px-5 py-2.5 rounded-2xl shadow-playful-sm font-bold text-base hover:scale-[1.03] transition-transform">
            <Settings className="w-5 h-5" />
            Settings
          </motion.button>
        </div>
      </header>

      {/* Scene Mode Banner */}
      <div className="px-4 max-w-2xl mx-auto w-full mb-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/scenes")}
          className="w-full bg-accent text-accent-foreground rounded-3xl p-5 shadow-playful flex items-center gap-4">
          <span className="text-5xl">🖼️</span>
          <div className="text-left flex-1">
            <h2 className="text-xl font-extrabold">Picture Scenes</h2>
            <p className="text-sm opacity-80 font-semibold">Look at scenes & answer WH questions — 20 scenes!</p>
          </div>
          <Image className="w-8 h-8 opacity-60" />
        </motion.button>
      </div>

      {/* Category Grid */}
      <main className="flex-1 px-4 pb-8 max-w-2xl mx-auto w-full">
        <h3 className="text-lg font-extrabold text-muted-foreground mb-3 text-center">📝 Basic Practice</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {enabledCategories.map((cat, i) =>
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onClick={() => navigate(`/quiz/${cat.id}`)}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-6 px-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-muted">
          <RotateCcw className="w-4 h-4" />
          Reset Progress
        </motion.button>
      </footer>
    </div>
  );
};

export default Index;
