import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { SceneQuestion, saveSceneAnswer, getSceneProgress } from "@/data/scenes";
import { speak, stopSpeaking } from "@/lib/speech";
import Confetti from "./Confetti";

interface SceneQuestionCardProps {
  sceneId: string;
  questionIndex: number;
  question: SceneQuestion;
  onNext: () => void;
}

const SceneQuestionCard = ({ sceneId, questionIndex, question, onNext }: SceneQuestionCardProps) => {
  const progress = getSceneProgress();
  const alreadyDone = !!progress[sceneId]?.[questionIndex];
  const [selected, setSelected] = useState<number | null>(alreadyDone ? question.correctIndex : null);
  const [showConfetti, setShowConfetti] = useState(false);

  const isCorrect = selected === question.correctIndex;

  useEffect(() => {
    const timer = setTimeout(() => speak(question.question), 400);
    return () => { clearTimeout(timer); stopSpeaking(); };
  }, [question.question, questionIndex]);

  const handleSelect = useCallback((index: number) => {
    if (selected !== null) return;
    setSelected(index);
    const choice = question.choices[index];
    if (index === question.correctIndex) {
      saveSceneAnswer(sceneId, questionIndex);
      setShowConfetti(true);
      speak(`${choice.text}! Great job!`);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      speak(`${choice.text}. Oops! Try again next time!`);
    }
  }, [selected, question, sceneId, questionIndex]);

  const handleNext = () => {
    stopSpeaking();
    setSelected(null);
    setShowConfetti(false);
    onNext();
  };

  return (
    <motion.div
      key={`${sceneId}-${questionIndex}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      {showConfetti && <Confetti />}

      {/* Question + speaker */}
      <div className="flex items-center gap-3 px-2">
        <h2 className="text-xl md:text-2xl font-extrabold text-center text-foreground leading-snug">
          {question.question}
        </h2>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => speak(question.question)}
          className="shrink-0 p-2.5 rounded-full bg-primary text-primary-foreground shadow-playful-sm"
        >
          <Volume2 className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Answer choices */}
      <div className={`grid gap-3 w-full max-w-md ${question.choices.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {question.choices.map((choice, i) => {
          let cls = "rounded-3xl p-5 flex flex-col items-center gap-2 shadow-playful border-4 transition-all min-h-[130px] justify-center ";
          if (selected === null) {
            cls += "bg-card text-card-foreground border-transparent hover:border-primary hover:scale-[1.05] cursor-pointer";
          } else if (i === question.correctIndex) {
            cls += "bg-success text-white border-success scale-[1.05]";
          } else if (i === selected) {
            cls += "bg-destructive text-white border-destructive animate-wiggle";
          } else {
            cls += "bg-muted text-muted-foreground border-transparent opacity-40";
          }
          return (
            <motion.button key={i} whileTap={selected === null ? { scale: 0.9 } : {}} onClick={() => handleSelect(i)} className={cls} disabled={selected !== null}>
              <span className="text-5xl md:text-6xl leading-none">{choice.emoji}</span>
              <span className="text-sm md:text-base font-bold text-center">{choice.text}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
            <p className="text-xl font-extrabold">{isCorrect ? "🎉 Great job!" : "😊 Try again next time!"}</p>
            <motion.button whileTap={{ scale: 0.95 }} onClick={handleNext} className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl text-lg font-bold shadow-playful">
              Next →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SceneQuestionCard;
