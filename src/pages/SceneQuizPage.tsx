import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw, X } from "lucide-react";
import { scenes } from "@/data/scenes";
import SceneQuestionCard from "@/components/SceneQuestionCard";

const SceneQuizPage = () => {
  const { sceneId } = useParams<{ sceneId: string }>();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [key, setKey] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const scene = scenes.find((s) => s.id === sceneId);
  if (!scene) { navigate("/scenes"); return null; }

  const total = scene.questions.length;
  const isLast = currentQ >= total - 1;

  const handleNext = () => {
    if (isLast) {
      setCurrentQ(-1); // show completion screen
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

      {/* Scene Image (tappable) */}
      <div className="px-3 pt-3">
        <motion.img
          src={scene.image}
          alt={scene.title}
          className="w-full max-h-[35vh] object-cover rounded-3xl shadow-playful border-4 border-card cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => setFullscreen(true)}
        />
      </div>

      {/* Question Area */}
      <main className="flex-1 flex items-start justify-center p-4 pt-4" key={key}>
        {currentQ === -1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6 text-center py-4"
          >
            <span className="text-[6rem]">🎉</span>
            <h2 className="text-3xl font-extrabold text-foreground">All Done!</h2>
            <p className="text-lg text-muted-foreground font-semibold">You answered all the questions!</p>
            <div className="flex gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => { setCurrentQ(0); setKey((k) => k + 1); }}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl text-xl font-bold shadow-playful"
              >
                🔄 Play Again
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/scenes")}
                className="bg-card text-foreground px-8 py-4 rounded-2xl text-xl font-bold shadow-playful border-4 border-muted"
              >
                🖼️ More Scenes
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <SceneQuestionCard
              key={`${scene.id}-${currentQ}`}
              sceneId={scene.id}
              questionIndex={currentQ}
              question={scene.questions[currentQ]}
              onNext={handleNext}
            />
          </AnimatePresence>
        )}
      </main>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 cursor-pointer"
            onClick={() => setFullscreen(false)}
          >
            <motion.img
              src={scene.image}
              alt={scene.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-sm font-semibold mt-4 text-center"
            >
              Developed by Speech Language Therapist Shabana Tariq
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white"
              onClick={() => setFullscreen(false)}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SceneQuizPage;
