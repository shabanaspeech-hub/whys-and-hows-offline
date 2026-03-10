import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { categories, getQuestionsByCategory, WHCategory, getCategoryProgress } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

const QuizPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const cat = category as WHCategory;
  const catInfo = categories.find((c) => c.id === cat);
  const questions = useMemo(() => getQuestionsByCategory(cat), [cat]);
  const { completed, total } = getCategoryProgress(cat);

  if (!catInfo || questions.length === 0) {
    navigate("/");
    return null;
  }

  const currentQuestion = currentIndex >= 0 ? questions[currentIndex] : null;
  const isLastQuestion = currentIndex >= questions.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className={`${catInfo.colorClass} px-4 py-3 flex items-center gap-3 shadow-playful-sm`}>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigate("/")}
          className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <div className="flex-1">
          <h1 className="text-xl font-extrabold">
            {catInfo.emoji} {catInfo.label} Questions
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 bg-white/30 rounded-full h-2">
              <motion.div
                className="bg-white/80 h-2 rounded-full"
                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-xs font-bold opacity-80">
              {currentIndex + 1}/{questions.length}
            </span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleRestart}
          className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
          title="Restart"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </header>

      <main className="flex-1 flex items-center justify-center p-4" key={key}>
        {currentIndex === -1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <span className="text-[8rem]">🎉</span>
            <h2 className="text-3xl font-extrabold text-foreground">All Done!</h2>
            <p className="text-lg text-muted-foreground font-semibold">Great job finishing all the questions!</p>
            <div className="flex gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className={`${catInfo.colorClass} px-8 py-4 rounded-2xl text-xl font-bold shadow-playful`}
              >
                🔄 Play Again
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
                className="bg-card text-foreground px-8 py-4 rounded-2xl text-xl font-bold shadow-playful border-4 border-muted"
              >
                🏠 Home
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onNext={handleNext}
              categoryColor={catInfo.colorClass}
            />
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};

export default QuizPage;
