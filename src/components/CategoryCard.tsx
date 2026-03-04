import { motion } from "framer-motion";
import { Printer } from "lucide-react";
import { CategoryInfo, getCategoryProgress } from "@/data/questions";
import { printCategory } from "@/lib/print";

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

      {/* Print button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          printCategory(category.id);
        }}
        className="absolute top-2 right-2 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background text-foreground hover:bg-background/90 border border-border shadow-playful-sm transition-colors z-10"
        title={`Print ${category.label} worksheet`}
        aria-label={`Print ${category.label} worksheet`}
      >
        <Printer className="w-4 h-4" />
        <span className="text-xs font-bold">Print</span>
      </button>
    </motion.button>
  );
};

export default CategoryCard;
