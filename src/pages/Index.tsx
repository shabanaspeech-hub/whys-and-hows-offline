import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { categories, resetProgress } from "@/data/questions";

const Index = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    if (window.confirm("Reset all progress? ⭐ Stars will be cleared.")) {
      resetProgress();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="text-center pt-8 pb-4 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-foreground">
            🗣️ WH Questions
          </h1>
          <p className="text-lg text-muted-foreground font-semibold mt-2">
            Tap a category to start practicing!
          </p>
        </motion.div>
      </header>

      {/* Category Grid */}
      <main className="flex-1 px-4 pb-8 max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onClick={() => navigate(`/quiz/${cat.id}`)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center pb-6 px-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleReset}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold px-4 py-2 rounded-xl hover:bg-muted"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Progress
        </motion.button>
      </footer>
    </div>
  );
};

export default Index;
