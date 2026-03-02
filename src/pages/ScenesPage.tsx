import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Printer } from "lucide-react";
import { scenes, getSceneCompletionCount } from "@/data/scenes";
import { printScene } from "@/lib/print";

const ScenesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-accent text-accent-foreground px-4 py-4 flex items-center gap-3 shadow-playful-sm">
        <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigate("/")} className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <h1 className="text-2xl font-extrabold">🖼️ Picture Scenes</h1>
      </header>

      <main className="flex-1 p-4 max-w-3xl mx-auto w-full">
        <p className="text-center text-muted-foreground font-semibold mb-4">
          Look at the picture and answer questions about it!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {scenes.map((scene, i) => {
            const completed = getSceneCompletionCount(scene.id);
            const total = scene.questions.length;
            const pct = Math.round((completed / total) * 100);
            return (
              <motion.button
                key={scene.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/scenes/${scene.id}`)}
                className="rounded-3xl overflow-hidden shadow-playful bg-card border-2 border-transparent hover:border-accent transition-all flex flex-col"
              >
                <img src={scene.image} alt={scene.title} className="w-full h-28 md:h-36 object-cover" />
                <div className="p-3 text-center relative">
                  <span className="text-lg font-extrabold text-card-foreground">{scene.emoji} {scene.title}</span>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.5, delay: i * 0.04 + 0.2 }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-bold">{completed}/{total} ⭐</span>

                  {/* Hidden print button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      printScene(scene.id);
                    }}
                    className="absolute top-1 right-1 p-1.5 rounded-full bg-muted/60 hover:bg-muted opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity"
                    title={`Print ${scene.title} worksheet`}
                    aria-label={`Print ${scene.title} worksheet`}
                  >
                    <Printer className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              </motion.button>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ScenesPage;
