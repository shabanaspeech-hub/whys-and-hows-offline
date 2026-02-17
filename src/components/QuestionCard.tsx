import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { WHQuestion, saveProgress, getProgress } from "@/data/questions";
import { speak, stopSpeaking } from "@/lib/speech";
import Confetti from "./Confetti";

interface QuestionCardProps {
  question: WHQuestion;
  onNext: () => void;
  categoryColor: string;
}

const QuestionCard = ({ question, onNext, categoryColor }: QuestionCardProps) => {
  const progress = getProgress();
  const alreadyDone = !!progress[question.id];
  const [selected, setSelected] = useState<number | null>(alreadyDone ? question.correctIndex : null);
  const [showConfetti, setShowConfetti] = useState(false);

  const isCorrect = selected === question.correctIndex;

  // Auto-read question when it appears
  useEffect(() => {
    const timer = setTimeout(() => {
      speak(question.question);
    }, 400);
    return () => {
      clearTimeout(timer);
      stopSpeaking();
    };
  }, [question.id]);

  const handleReadQuestion = () => {
    speak(question.question);
  };

  const handleSelect = useCallback(
    (index: number) => {
      if (selected !== null) return;
      setSelected(index);
      const choice = question.choices[index];
      if (index === question.correctIndex) {
        saveProgress(question.id);
        setShowConfetti(true);
        speak(`${choice.text}! Great job! That's correct!`);
        setTimeout(() => setShowConfetti(false), 2000);
      } else {
        speak(`${choice.text}. Oops! Try again next time!`);
      }
    },
    [selected, question]
  );

  const handleNext = () => {
    stopSpeaking();
    setSelected(null);
    setShowConfetti(false);
    onNext();
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto"
    >
      {showConfetti && <Confetti />}

      {/* Emoji image */}
      <motion.div
        className="text-[7rem] md:text-[10rem] leading-none"
        animate={isCorrect ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {question.image}
      </motion.div>

      {/* Question + speaker button */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl md:text-2xl font-extrabold text-center text-foreground leading-snug">
          {question.question}
        </h2>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleReadQuestion}
          className="shrink-0 p-2 rounded-full bg-primary text-primary-foreground shadow-playful-sm"
          aria-label="Read question aloud"
        >
          <Volume2 className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Choices - big picture cards */}
      <div className={`grid gap-4 w-full ${question.choices.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {question.choices.map((choice, i) => {
          let btnClass =
            "rounded-2xl p-5 flex flex-col items-center gap-3 shadow-playful-sm border-3 transition-all min-h-[140px] justify-center ";

          if (selected === null) {
            btnClass += "bg-card text-card-foreground border-transparent hover:border-primary hover:scale-[1.05] cursor-pointer";
          } else if (i === question.correctIndex) {
            btnClass += "bg-success text-white border-success scale-[1.05]";
          } else if (i === selected) {
            btnClass += "bg-destructive text-white border-destructive animate-wiggle";
          } else {
            btnClass += "bg-muted text-muted-foreground border-transparent opacity-40";
          }

          return (
            <motion.button
              key={i}
              whileTap={selected === null ? { scale: 0.9 } : {}}
              onClick={() => handleSelect(i)}
              className={btnClass}
              disabled={selected !== null}
            >
              <span className="text-5xl md:text-7xl leading-none">{choice.emoji}</span>
              <span className="text-base md:text-lg font-bold leading-tight text-center">{choice.text}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback & Next */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-xl font-extrabold">
              {isCorrect ? "🎉 Great job!" : "😊 Try again next time!"}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className={`${categoryColor} px-8 py-3 rounded-2xl text-lg font-bold shadow-playful`}
            >
              Next →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;
