export type WHCategory = "who" | "what" | "where" | "when" | "why" | "how";

export interface WHQuestion {
  id: string;
  category: WHCategory;
  question: string;
  image: string;
  choices: { text: string; emoji: string }[];
  correctIndex: number;
}

export interface CategoryInfo {
  id: WHCategory;
  label: string;
  emoji: string;
  description: string;
  colorClass: string;
}

export const categories: CategoryInfo[] = [
  { id: "who", label: "WHO", emoji: "👤", description: "People & characters", colorClass: "category-who" },
  { id: "what", label: "WHAT", emoji: "❓", description: "Things & actions", colorClass: "category-what" },
  { id: "where", label: "WHERE", emoji: "📍", description: "Places & locations", colorClass: "category-where" },
  { id: "when", label: "WHEN", emoji: "🕐", description: "Time & events", colorClass: "category-when" },
  { id: "why", label: "WHY", emoji: "🤔", description: "Reasons & causes", colorClass: "category-why" },
  { id: "how", label: "HOW", emoji: "🛠️", description: "Ways & methods", colorClass: "category-how" },
];

export const questions: WHQuestion[] = [
  // WHO
  { id: "who1", category: "who", question: "Who puts out fires?", image: "🚒", choices: [{ text: "Firefighter", emoji: "👨‍🚒" }, { text: "Teacher", emoji: "👩‍🏫" }, { text: "Baker", emoji: "👨‍🍳" }], correctIndex: 0 },
  { id: "who2", category: "who", question: "Who teaches kids at school?", image: "🏫", choices: [{ text: "Doctor", emoji: "👨‍⚕️" }, { text: "Teacher", emoji: "👩‍🏫" }], correctIndex: 1 },
  { id: "who3", category: "who", question: "Who takes care of sick people?", image: "🏥", choices: [{ text: "Farmer", emoji: "👨‍🌾" }, { text: "Singer", emoji: "🎤" }, { text: "Doctor", emoji: "👨‍⚕️" }], correctIndex: 2 },
  { id: "who4", category: "who", question: "Who delivers letters?", image: "📬", choices: [{ text: "Mail carrier", emoji: "📮" }, { text: "Police", emoji: "👮" }], correctIndex: 0 },
  { id: "who5", category: "who", question: "Who flies an airplane?", image: "✈️", choices: [{ text: "Pilot", emoji: "👨‍✈️" }, { text: "Nurse", emoji: "👩‍⚕️" }, { text: "Cook", emoji: "👨‍🍳" }], correctIndex: 0 },
  { id: "who6", category: "who", question: "Who bakes bread and cakes?", image: "🎂", choices: [{ text: "Soldier", emoji: "💂" }, { text: "Baker", emoji: "👨‍🍳" }], correctIndex: 1 },
  { id: "who7", category: "who", question: "Who helps you when you are lost?", image: "👮", choices: [{ text: "Chef", emoji: "👨‍🍳" }, { text: "Artist", emoji: "🎨" }, { text: "Police officer", emoji: "👮" }], correctIndex: 2 },
  { id: "who8", category: "who", question: "Who takes care of animals?", image: "🐾", choices: [{ text: "Vet", emoji: "🩺" }, { text: "Barber", emoji: "💈" }], correctIndex: 0 },

  // WHAT
  { id: "what1", category: "what", question: "What do you use to eat soup?", image: "🍲", choices: [{ text: "Fork", emoji: "🍴" }, { text: "Spoon", emoji: "🥄" }], correctIndex: 1 },
  { id: "what2", category: "what", question: "What do you wear on your feet?", image: "🦶", choices: [{ text: "Hat", emoji: "🎩" }, { text: "Gloves", emoji: "🧤" }, { text: "Shoes", emoji: "👟" }], correctIndex: 2 },
  { id: "what3", category: "what", question: "What animal says 'moo'?", image: "🐄", choices: [{ text: "Dog", emoji: "🐕" }, { text: "Cow", emoji: "🐄" }, { text: "Cat", emoji: "🐱" }], correctIndex: 1 },
  { id: "what4", category: "what", question: "What do you use to brush your teeth?", image: "🪥", choices: [{ text: "Comb", emoji: "💇" }, { text: "Toothbrush", emoji: "🪥" }], correctIndex: 1 },
  { id: "what5", category: "what", question: "What do you use to cut paper?", image: "✂️", choices: [{ text: "Scissors", emoji: "✂️" }, { text: "Pen", emoji: "🖊️" }, { text: "Ruler", emoji: "📏" }], correctIndex: 0 },
  { id: "what6", category: "what", question: "What do you drink in the morning?", image: "🥛", choices: [{ text: "Milk", emoji: "🥛" }, { text: "Ketchup", emoji: "🍅" }], correctIndex: 0 },
  { id: "what7", category: "what", question: "What do you sit on?", image: "🪑", choices: [{ text: "Table", emoji: "🪑" }, { text: "Chair", emoji: "💺" }, { text: "Lamp", emoji: "💡" }], correctIndex: 1 },
  { id: "what8", category: "what", question: "What do you use when it rains?", image: "🌧️", choices: [{ text: "Sunglasses", emoji: "🕶️" }, { text: "Umbrella", emoji: "☂️" }], correctIndex: 1 },

  // WHERE
  { id: "where1", category: "where", question: "Where do you buy food?", image: "🛒", choices: [{ text: "Library", emoji: "📚" }, { text: "Store", emoji: "🏪" }, { text: "Park", emoji: "🌳" }], correctIndex: 1 },
  { id: "where2", category: "where", question: "Where do fish live?", image: "🐟", choices: [{ text: "Tree", emoji: "🌲" }, { text: "Water", emoji: "🌊" }], correctIndex: 1 },
  { id: "where3", category: "where", question: "Where do you sleep?", image: "😴", choices: [{ text: "Kitchen", emoji: "🍳" }, { text: "Bed", emoji: "🛏️" }, { text: "Garden", emoji: "🌻" }], correctIndex: 1 },
  { id: "where4", category: "where", question: "Where do you read books?", image: "📚", choices: [{ text: "Library", emoji: "📖" }, { text: "Beach", emoji: "🏖️" }], correctIndex: 0 },
  { id: "where5", category: "where", question: "Where do you see animals?", image: "🦁", choices: [{ text: "School", emoji: "🏫" }, { text: "Zoo", emoji: "🦒" }, { text: "Office", emoji: "🏢" }], correctIndex: 1 },
  { id: "where6", category: "where", question: "Where do birds build nests?", image: "🐦", choices: [{ text: "Underground", emoji: "⬇️" }, { text: "In trees", emoji: "🌳" }], correctIndex: 1 },
  { id: "where7", category: "where", question: "Where do you play on swings?", image: "🎠", choices: [{ text: "Bathroom", emoji: "🚿" }, { text: "Playground", emoji: "🛝" }, { text: "Kitchen", emoji: "🍳" }], correctIndex: 1 },
  { id: "where8", category: "where", question: "Where do you go when sick?", image: "🤒", choices: [{ text: "Park", emoji: "🌳" }, { text: "Doctor", emoji: "🏥" }], correctIndex: 1 },

  // WHEN
  { id: "when1", category: "when", question: "When do you eat breakfast?", image: "🌅", choices: [{ text: "At night", emoji: "🌙" }, { text: "In the morning", emoji: "🌅" }], correctIndex: 1 },
  { id: "when2", category: "when", question: "When do stars come out?", image: "⭐", choices: [{ text: "Morning", emoji: "🌅" }, { text: "Afternoon", emoji: "☀️" }, { text: "Night", emoji: "🌙" }], correctIndex: 2 },
  { id: "when3", category: "when", question: "When do you open presents?", image: "🎁", choices: [{ text: "On your birthday", emoji: "🎂" }, { text: "At bedtime", emoji: "😴" }], correctIndex: 0 },
  { id: "when4", category: "when", question: "When do you wear a coat?", image: "🧥", choices: [{ text: "When it's hot", emoji: "🔥" }, { text: "When it's cold", emoji: "❄️" }, { text: "At the beach", emoji: "🏖️" }], correctIndex: 1 },
  { id: "when5", category: "when", question: "When do you brush your teeth?", image: "🦷", choices: [{ text: "Before bed", emoji: "🌙" }, { text: "While running", emoji: "🏃" }], correctIndex: 0 },
  { id: "when6", category: "when", question: "When do we use an umbrella?", image: "☂️", choices: [{ text: "Sunny day", emoji: "☀️" }, { text: "Rainy day", emoji: "🌧️" }], correctIndex: 1 },
  { id: "when7", category: "when", question: "When do leaves fall?", image: "🍂", choices: [{ text: "Spring", emoji: "🌸" }, { text: "Summer", emoji: "☀️" }, { text: "Autumn", emoji: "🍂" }], correctIndex: 2 },
  { id: "when8", category: "when", question: "When do you say good night?", image: "🌙", choices: [{ text: "Morning", emoji: "🌅" }, { text: "Bedtime", emoji: "🛏️" }], correctIndex: 1 },

  // WHY
  { id: "why1", category: "why", question: "Why do we wear sunglasses?", image: "😎", choices: [{ text: "To protect our eyes", emoji: "👀" }, { text: "To hear better", emoji: "👂" }], correctIndex: 0 },
  { id: "why2", category: "why", question: "Why do we eat food?", image: "🍎", choices: [{ text: "To stay strong", emoji: "💪" }, { text: "To sleep", emoji: "😴" }, { text: "For fun", emoji: "🎉" }], correctIndex: 0 },
  { id: "why3", category: "why", question: "Why do we drink water?", image: "💧", choices: [{ text: "To stay clean", emoji: "🧼" }, { text: "Because we're thirsty", emoji: "😋" }], correctIndex: 1 },
  { id: "why4", category: "why", question: "Why do we go to school?", image: "📖", choices: [{ text: "To eat", emoji: "🍔" }, { text: "To learn", emoji: "📚" }, { text: "To swim", emoji: "🏊" }], correctIndex: 1 },
  { id: "why5", category: "why", question: "Why do birds fly south?", image: "🦅", choices: [{ text: "To find warm weather", emoji: "☀️" }, { text: "To go shopping", emoji: "🛒" }], correctIndex: 0 },
  { id: "why6", category: "why", question: "Why do we wash our hands?", image: "🧼", choices: [{ text: "To remove germs", emoji: "🦠" }, { text: "For fun", emoji: "🎉" }, { text: "To paint", emoji: "🎨" }], correctIndex: 0 },
  { id: "why7", category: "why", question: "Why do we wear helmets?", image: "⛑️", choices: [{ text: "For fashion", emoji: "👗" }, { text: "To protect our head", emoji: "🛡️" }], correctIndex: 1 },
  { id: "why8", category: "why", question: "Why is the boy crying?", image: "😢", choices: [{ text: "He's happy", emoji: "😊" }, { text: "He fell down", emoji: "🤕" }], correctIndex: 1 },

  // HOW
  { id: "how1", category: "how", question: "How do you get to school?", image: "🚌", choices: [{ text: "By bus", emoji: "🚌" }, { text: "By swimming", emoji: "🏊" }], correctIndex: 0 },
  { id: "how2", category: "how", question: "How do you make a sandwich?", image: "🥪", choices: [{ text: "Put things in bread", emoji: "🥪" }, { text: "Freeze it", emoji: "🧊" }, { text: "Shake it", emoji: "🫨" }], correctIndex: 0 },
  { id: "how3", category: "how", question: "How does a fish move?", image: "🐠", choices: [{ text: "It walks", emoji: "🚶" }, { text: "It swims", emoji: "🏊" }], correctIndex: 1 },
  { id: "how4", category: "how", question: "How do you feel getting a gift?", image: "🎁", choices: [{ text: "Sad", emoji: "😢" }, { text: "Happy", emoji: "😊" }, { text: "Scared", emoji: "😨" }], correctIndex: 1 },
  { id: "how5", category: "how", question: "How many legs does a dog have?", image: "🐕", choices: [{ text: "2", emoji: "✌️" }, { text: "4", emoji: "🐾" }], correctIndex: 1 },
  { id: "how6", category: "how", question: "How do you say hello?", image: "👋", choices: [{ text: "Wave your hand", emoji: "👋" }, { text: "Close your eyes", emoji: "😑" }, { text: "Stomp feet", emoji: "🦶" }], correctIndex: 0 },
  { id: "how7", category: "how", question: "How do plants grow?", image: "🌱", choices: [{ text: "Sun and water", emoji: "🌞" }, { text: "With fire", emoji: "🔥" }], correctIndex: 0 },
  { id: "how8", category: "how", question: "How do you open a door?", image: "🚪", choices: [{ text: "Kick it", emoji: "🦶" }, { text: "Turn the handle", emoji: "🔑" }], correctIndex: 1 },
];

export function getQuestionsByCategory(category: WHCategory): WHQuestion[] {
  return questions.filter((q) => q.category === category);
}

export function getProgress(): Record<string, boolean> {
  try {
    const saved = localStorage.getItem("wh-progress");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function saveProgress(questionId: string) {
  const progress = getProgress();
  progress[questionId] = true;
  localStorage.setItem("wh-progress", JSON.stringify(progress));
}

export function getCategoryProgress(category: WHCategory): { total: number; completed: number } {
  const catQuestions = getQuestionsByCategory(category);
  const progress = getProgress();
  const completed = catQuestions.filter((q) => progress[q.id]).length;
  return { total: catQuestions.length, completed };
}

export function resetProgress() {
  localStorage.removeItem("wh-progress");
}
