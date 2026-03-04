import { motion } from "framer-motion";
import { CategoryInfo, getCategoryProgress } from "@/data/questions";

interface CategoryCardProps {
  category: CategoryInfo;
  onClick: () => void;
  index: number;
}

const CategoryCard = ({ category, onClick, index }: CategoryCardProps) => {
  const { total, completed } = getCategoryProgress(category.id);
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${category.colorClass} shadow-playful rounded-3xl p-6 flex flex-col items-center gap-3 cursor-pointer transition-all relative overflow-hidden min-h-[180px] justify-center`}
    >
      <span className="text-5xl">{category.emoji}</span>
      <span className="text-2xl font-extrabold tracking-wide">{category.label}</span>
      <span className="text-sm opacity-80 font-semibold">{category.description}</span>

      {/* Progress bar */}
      <div className="w-full mt-2 bg-white/30 rounded-full h-2.5">
        <motion.div
          className="bg-white/80 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
        />
      </div>
      <span className="text-xs opacity-70 font-bold">
        {completed}/{total} ⭐
      </span>

    </motion.button>
  );
};

export default CategoryCard;
