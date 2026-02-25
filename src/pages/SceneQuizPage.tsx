import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { scenes } from "@/data/scenes";
import SceneQuestionCard from "@/components/SceneQuestionCard";

const SceneQuizPage = () => {
  const { sceneId } = useParams<{ sceneId: string }>();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [key, setKey] = useState(0);

  const scene = scenes.find((s) => s.id === sceneId);
  if (!scene) { navigate("/scenes"); return null; }

  const total = scene.questions.length;
  const isLast = currentQ >= total - 1;

  const handleNext = () => {
    if (isLast) {
      setCurrentQ(0);
      setKey((k) => k + 1);
    } else {
      setCurrentQ((i) => i + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="bg-accent text-accent-foreground px-4 py-3 flex items-center gap-3 shadow-playful-sm">
        <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigate("/scenes")} className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <div className="flex-1">
          <h1 className="text-xl font-extrabold">{scene.emoji} {scene.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 bg-white/30 rounded-full h-2">
              <motion.div className="bg-white/80 h-2 rounded-full" animate={{ width: `${((currentQ + 1) / total) * 100}%` }} transition={{ duration: 0.3 }} />
            </div>
            <span className="text-xs font-bold opacity-80">{currentQ + 1}/{total}</span>
          </div>
        </div>
        <motion.button whileTap={{ scale: 0.85 }} onClick={() => { setCurrentQ(0); setKey((k) => k + 1); }} className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </header>

      {/* Scene Image */}
      <div className="px-3 pt-3">
        <motion.img
          src={scene.image}
          alt={scene.title}
          className="w-full max-h-[35vh] object-cover rounded-3xl shadow-playful border-4 border-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Question Area */}
      <main className="flex-1 flex items-start justify-center p-4 pt-4" key={key}>
        <AnimatePresence mode="wait">
          <SceneQuestionCard
            key={`${scene.id}-${currentQ}`}
            sceneId={scene.id}
            questionIndex={currentQ}
            question={scene.questions[currentQ]}
            onNext={handleNext}
          />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default SceneQuizPage;
