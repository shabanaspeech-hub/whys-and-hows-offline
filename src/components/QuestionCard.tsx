import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";
import { WHQuestion, saveProgress } from "../data/questions";
import { speak, stopSpeaking } from "../lib/speech";
import { playCorrectSound, playWrongSound, playMilestoneSound, getRandomPraise, getRandomMilestone } from "../lib/sounds";
import Confetti from "./Confetti";

interface QuestionCardProps {
  question: WHQuestion;
  onNext: () => void;
  categoryColor: string;
}

const QuestionCard = ({ question, onNext, categoryColor }: QuestionCardProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [praise, setPraise] = useState("");
  const [milestone, setMilestone] = useState("");
  const correctStreak = useRef(0);

  const isCorrect = selected === question.correctIndex;

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
      if (selected !== null && isCorrect) return;

      if (index === question.correctIndex) {
        setSelected(index);
        saveProgress(question.id);
        setShowConfetti(true);
        playCorrectSound();
        const p = getRandomPraise();
        setPraise(p);

        correctStreak.current += 1;
        if (correctStreak.current > 0 && correctStreak.current % 3 === 0) {
          const m = getRandomMilestone();
          setMilestone(m);
          playMilestoneSound();
          speak(`${question.choices[index].text}! ${m}`);
        } else {
          speak(`${question.choices[index].text}! ${p.replace(/[^\w\s!]/g, "")}`);
        }
        setTimeout(() => setShowConfetti(false), 2000);
      } else {
        setSelected(index);
        playWrongSound();
        speak(`${question.choices[index].text}. Oops! Try again!`);
        setTimeout(() => {
          setSelected(null);
          setMilestone("");
        }, 1500);
      }
    },
    [selected, isCorrect, question]
  );

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
      key={question.id}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto px-2"
    >
      {showConfetti && <Confetti />}

      <motion.div
        className="text-[8rem] md:text-[12rem] leading-none drop-shadow-lg"
        animate={isCorrect ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {question.image}
      </motion.div>

      <div className="flex items-center gap-3">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground leading-snug">
          {question.question}
        </h2>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleReadQuestion}
          className="shrink-0 p-3 rounded-full bg-primary text-primary-foreground shadow-playful-sm"
          aria-label="Read question aloud"
        >
          <Volume2 className="w-7 h-7" />
        </motion.button>
      </div>

      <div className={`grid gap-4 w-full ${question.choices.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {question.choices.map((choice, i) => {
          let btnClass =
            "rounded-3xl p-6 flex flex-col items-center gap-3 shadow-playful border-4 transition-all min-h-[160px] md:min-h-[200px] justify-center ";

          if (selected === null) {
            btnClass += "bg-card text-card-foreground border-transparent hover:border-primary hover:scale-[1.05] cursor-pointer";
          } else if (i === question.correctIndex && isCorrect) {
            btnClass += "bg-success text-white border-success scale-[1.05]";
          } else if (i === selected && !isCorrect) {
            btnClass += "bg-destructive text-white border-destructive animate-wiggle";
          } else {
            btnClass += "bg-card text-card-foreground border-transparent opacity-40";
          }

          return (
            <motion.button
              key={i}
              whileTap={!isCorrect ? { scale: 0.9 } : {}}
              onClick={() => handleSelect(i)}
              className={btnClass}
              disabled={selected !== null && isCorrect}
            >
              <span className="text-6xl md:text-8xl leading-none drop-shadow-md">{choice.emoji}</span>
              <span className="text-lg md:text-xl font-extrabold leading-tight text-center">{choice.text}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && isCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-2xl font-extrabold">{praise}</p>
            {milestone && (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-lg font-bold text-primary"
              >
                {milestone}
              </motion.p>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className={`${categoryColor} px-10 py-4 rounded-2xl text-xl font-bold shadow-playful`}
            >
              Next →
            </motion.button>
          </motion.div>
        )}
        {selected !== null && !isCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-2xl font-extrabold">😊 Try again!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionCard;
