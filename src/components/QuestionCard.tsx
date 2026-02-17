import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHQuestion, saveProgress, getProgress } from "@/data/questions";
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

  const handleSelect = useCallback(
    (index: number) => {
      if (selected !== null) return;
      setSelected(index);
      if (index === question.correctIndex) {
        saveProgress(question.id);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    },
    [selected, question]
  );

  const handleNext = () => {
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
      className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto"
    >
      {showConfetti && <Confetti />}

      {/* Emoji image */}
      <motion.div
        className="text-8xl"
        animate={isCorrect ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {question.image}
      </motion.div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground leading-snug">
        {question.question}
      </h2>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {question.choices.map((choice, i) => {
          let btnClass =
            "rounded-2xl p-4 text-lg font-bold shadow-playful-sm border-2 border-transparent transition-all ";

          if (selected === null) {
            btnClass += "bg-card text-card-foreground hover:border-primary hover:scale-[1.03] cursor-pointer";
          } else if (i === question.correctIndex) {
            btnClass += "bg-success text-white border-success scale-[1.03]";
          } else if (i === selected) {
            btnClass += "bg-destructive text-white border-destructive animate-wiggle";
          } else {
            btnClass += "bg-muted text-muted-foreground opacity-50";
          }

          return (
            <motion.button
              key={i}
              whileTap={selected === null ? { scale: 0.93 } : {}}
              onClick={() => handleSelect(i)}
              className={btnClass}
              disabled={selected !== null}
            >
              {choice}
              {selected !== null && i === question.correctIndex && " ✅"}
              {selected === i && i !== question.correctIndex && " ❌"}
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
