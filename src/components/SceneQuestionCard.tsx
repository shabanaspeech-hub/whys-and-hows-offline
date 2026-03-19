import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { SceneQuestion, saveSceneAnswer } from "../data/scenes";
import { speak, stopSpeaking } from "../lib/speech";
import { playCorrectSound, playWrongSound, playMilestoneSound, getRandomPraise, getRandomMilestone } from "../lib/sounds";
import Confetti from "./Confetti";

interface SceneQuestionCardProps {
  sceneId: string;
  questionIndex: number;
  question: SceneQuestion;
  onNext: () => void;
}

const SceneQuestionCard = ({ sceneId, questionIndex, question, onNext }: SceneQuestionCardProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [praise, setPraise] = useState("");
  const [milestone, setMilestone] = useState("");
  const correctStreak = useRef(0);

  const isCorrect = selected === question.correctIndex;

  useEffect(() => {
    const timer = setTimeout(() => speak(question.question), 400);
    return () => { clearTimeout(timer); stopSpeaking(); };
  }, [question.question, questionIndex]);

  const handleSelect = useCallback((index: number) => {
    if (selected !== null && isCorrect) return;
    
    if (index === question.correctIndex) {
      setSelected(index);
      saveSceneAnswer(sceneId, questionIndex);
      setShowConfetti(true);
      playCorrectSound();
      const p = getRandomPraise();
      setPraise(p);
      
      correctStreak.current += 1;
      if (correctStreak.current > 0 && correctStreak.current % 3 === 0) {
        const m = getRandomMilestone();
        setMilestone(m);
        playMilestoneSound();
        speak(question.correctFeedback + " " + m.replace(/[^\w\s!]/g, ""));
      } else {
        // Use full sentence model feedback
        speak(question.correctFeedback);
      }
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setSelected(index);
      playWrongSound();
      speak("Let's look again! Try another one.");
      setTimeout(() => {
        setSelected(null);
        setMilestone("");
      }, 1500);
    }
  }, [selected, isCorrect, question, sceneId, questionIndex]);

  const handleNext = () => {
    stopSpeaking();
    setSelected(null);
    setShowConfetti(false);
    setPraise("");
    setMilestone("");
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

      <div className="flex items-center gap-3 px-2">
        <h2 className="text-xl md:text-2xl font-extrabold text-center text-foreground leading-snug">
          {question.question}
        </h2>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => speak(question.question)}
          className="shrink-0 p-2.5 rounded-full bg-primary text-primary-foreground shadow-playful-sm min-w-[48px] min-h-[48px] flex items-center justify-center"
        >
          <Volume2 className="w-6 h-6" />
        </motion.button>
      </div>

      <div className={`grid gap-3 w-full max-w-md ${question.choices.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {question.choices.map((choice, i) => {
          let cls = "rounded-3xl p-5 flex flex-col items-center gap-2 shadow-playful border-4 transition-all min-h-[130px] justify-center min-w-[48px] ";
          if (selected === null) {
            cls += "bg-card text-card-foreground border-transparent hover:border-primary hover:scale-[1.05] cursor-pointer";
          } else if (i === question.correctIndex && isCorrect) {
            cls += "bg-success text-white border-success scale-[1.05]";
          } else if (i === selected && !isCorrect) {
            cls += "bg-destructive text-white border-destructive animate-wiggle";
          } else {
            cls += "bg-card text-card-foreground border-transparent opacity-40";
          }
          return (
            <motion.button key={i} whileTap={!isCorrect ? { scale: 0.9 } : {}} onClick={() => handleSelect(i)} className={cls} disabled={selected !== null && isCorrect}>
              <span className="text-5xl md:text-6xl leading-none">{choice.emoji}</span>
              <span className="text-sm md:text-base font-bold text-center">{choice.text}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && isCorrect && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2">
            <p className="text-xl font-extrabold">{praise}</p>
            {/* Full sentence model feedback */}
            <p className="text-base font-bold text-primary text-center px-4">
              {question.correctFeedback}
            </p>
            {milestone && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-lg font-bold text-accent"
              >
                {milestone}
              </motion.p>
            )}
            <motion.button whileTap={{ scale: 0.95 }} onClick={handleNext} className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl text-lg font-bold shadow-playful min-h-[48px]">
              Next →
            </motion.button>
          </motion.div>
        )}
        {selected !== null && !isCorrect && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
            <p className="text-xl font-extrabold">👀 Let's look again!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SceneQuestionCard;
