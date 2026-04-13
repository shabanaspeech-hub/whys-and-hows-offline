export type WHCategory = "who" | "what" | "where" | "when" | "why" | "how";

export interface WHQuestion {
  id: string;
  category: WHCategory;
  question: string;
  image: string;
  choices: { text: string; emoji: string }[];
  correctIndex: number;
  /** Full sentence model spoken after correct answer (therapy feedback) */
  correctFeedback: string;
  /** Difficulty: 1=easy, 2=medium, 3=hard */
  difficulty?: number;
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
  // ============ WHO (easy → complex) ============
  {
    id: "who1", category: "who", difficulty: 1,
    question: "Who puts out fires?",
    image: "🚒",
    choices: [{ text: "Firefighter", emoji: "👨‍🚒" }, { text: "Teacher", emoji: "👩‍🏫" }, { text: "Baker", emoji: "👨‍🍳" }],
    correctIndex: 0,
    correctFeedback: "Yes! A firefighter puts out fires!",
  },
  {
    id: "who2", category: "who", difficulty: 1,
    question: "Who teaches kids at school?",
    image: "🏫",
    choices: [{ text: "Doctor", emoji: "👨‍⚕️" }, { text: "Teacher", emoji: "👩‍🏫" }],
    correctIndex: 1,
    correctFeedback: "That's right! A teacher teaches kids at school!",
  },
  {
    id: "who3", category: "who", difficulty: 1,
    question: "Who gives you medicine?",
    image: "🏥",
    choices: [{ text: "Farmer", emoji: "👨‍🌾" }, { text: "Singer", emoji: "🎤" }, { text: "Doctor", emoji: "👨‍⚕️" }],
    correctIndex: 2,
    correctFeedback: "Yes! A doctor gives you medicine!",
  },
  {
    id: "who4", category: "who", difficulty: 1,
    question: "Who delivers letters?",
    image: "📬",
    choices: [{ text: "Postman", emoji: "📮" }, { text: "Police officer", emoji: "👮" }],
    correctIndex: 0,
    correctFeedback: "That's right! A postman delivers letters!",
  },
  {
    id: "who5", category: "who", difficulty: 2,
    question: "Who flies an airplane?",
    image: "✈️",
    choices: [{ text: "Pilot", emoji: "👨‍✈️" }, { text: "Nurse", emoji: "👩‍⚕️" }, { text: "Cook", emoji: "👨‍🍳" }],
    correctIndex: 0,
    correctFeedback: "Yes! A pilot flies an airplane!",
  },
  {
    id: "who6", category: "who", difficulty: 2,
    question: "Who bakes bread and cakes?",
    image: "🎂",
    choices: [{ text: "Soldier", emoji: "💂" }, { text: "Baker", emoji: "👨‍🍳" }],
    correctIndex: 1,
    correctFeedback: "That's right! A baker bakes bread and cakes!",
  },
  {
    id: "who7", category: "who", difficulty: 2,
    question: "Who helps you when you are lost?",
    image: "👮",
    choices: [{ text: "Chef", emoji: "👨‍🍳" }, { text: "Artist", emoji: "🎨" }, { text: "Police officer", emoji: "👮" }],
    correctIndex: 2,
    correctFeedback: "Yes! A police officer helps you when you are lost!",
  },
  {
    id: "who8", category: "who", difficulty: 2,
    question: "Who takes care of animals?",
    image: "🐾",
    choices: [{ text: "Vet", emoji: "🩺" }, { text: "Barber", emoji: "💈" }],
    correctIndex: 0,
    correctFeedback: "That's right! A vet takes care of animals!",
  },

  // ============ WHAT (easy → complex) ============
  {
    id: "what1", category: "what", difficulty: 1,
    question: "What do you use to eat soup?",
    image: "🍲",
    choices: [{ text: "Fork", emoji: "🍴" }, { text: "Spoon", emoji: "🥄" }],
    correctIndex: 1,
    correctFeedback: "Yes! You use a spoon to eat soup!",
  },
  {
    id: "what2", category: "what", difficulty: 1,
    question: "What do you wear on your feet?",
    image: "🦶",
    choices: [{ text: "Hat", emoji: "🎩" }, { text: "Gloves", emoji: "🧤" }, { text: "Shoes", emoji: "👟" }],
    correctIndex: 2,
    correctFeedback: "That's right! You wear shoes on your feet!",
  },
  {
    id: "what3", category: "what", difficulty: 1,
    question: "What animal says 'moo'?",
    image: "🐄",
    choices: [{ text: "Dog", emoji: "🐕" }, { text: "Cow", emoji: "🐄" }, { text: "Cat", emoji: "🐱" }],
    correctIndex: 1,
    correctFeedback: "Yes! A cow says 'moo'!",
  },
  {
    id: "what4", category: "what", difficulty: 1,
    question: "What do you use to brush your teeth?",
    image: "🪥",
    choices: [{ text: "Comb", emoji: "💇" }, { text: "Toothbrush", emoji: "🪥" }],
    correctIndex: 1,
    correctFeedback: "That's right! You use a toothbrush to brush your teeth!",
  },
  {
    id: "what5", category: "what", difficulty: 2,
    question: "What do you use to cut paper?",
    image: "✂️",
    choices: [{ text: "Scissors", emoji: "✂️" }, { text: "Pen", emoji: "🖊️" }, { text: "Ruler", emoji: "📏" }],
    correctIndex: 0,
    correctFeedback: "Yes! You use scissors to cut paper!",
  },
  {
    id: "what6", category: "what", difficulty: 1,
    question: "What do you drink in the morning?",
    image: "🥛",
    choices: [{ text: "Milk", emoji: "🥛" }, { text: "Ketchup", emoji: "🍅" }],
    correctIndex: 0,
    correctFeedback: "That's right! You can drink milk in the morning!",
  },
  {
    id: "what7", category: "what", difficulty: 1,
    question: "What do you sit on?",
    image: "🪑",
    choices: [{ text: "Table", emoji: "🪑" }, { text: "Chair", emoji: "💺" }, { text: "Lamp", emoji: "💡" }],
    correctIndex: 1,
    correctFeedback: "Yes! You sit on a chair!",
  },
  {
    id: "what8", category: "what", difficulty: 2,
    question: "What do you use when it rains?",
    image: "🌧️",
    choices: [{ text: "Sunglasses", emoji: "🕶️" }, { text: "Umbrella", emoji: "☂️" }],
    correctIndex: 1,
    correctFeedback: "That's right! You use an umbrella when it rains!",
  },

  // ============ WHERE (easy → complex) ============
  {
    id: "where1", category: "where", difficulty: 1,
    question: "Where do you buy food?",
    image: "🛒",
    choices: [{ text: "Library", emoji: "📚" }, { text: "Store", emoji: "🏪" }, { text: "Park", emoji: "🌳" }],
    correctIndex: 1,
    correctFeedback: "Yes! You buy food at the store!",
  },
  {
    id: "where2", category: "where", difficulty: 1,
    question: "Where do fish live?",
    image: "🐟",
    choices: [{ text: "Tree", emoji: "🌲" }, { text: "Water", emoji: "🌊" }],
    correctIndex: 1,
    correctFeedback: "That's right! Fish live in the water!",
  },
  {
    id: "where3", category: "where", difficulty: 1,
    question: "Where do you sleep?",
    image: "😴",
    choices: [{ text: "Kitchen", emoji: "🍳" }, { text: "Bed", emoji: "🛏️" }, { text: "Garden", emoji: "🌻" }],
    correctIndex: 1,
    correctFeedback: "Yes! You sleep in your bed!",
  },
  {
    id: "where4", category: "where", difficulty: 1,
    question: "Where do you read books?",
    image: "📚",
    choices: [{ text: "Library", emoji: "📖" }, { text: "Beach", emoji: "🏖️" }],
    correctIndex: 0,
    correctFeedback: "That's right! You read books at the library!",
  },
  {
    id: "where5", category: "where", difficulty: 2,
    question: "Where do you see animals?",
    image: "🦁",
    choices: [{ text: "School", emoji: "🏫" }, { text: "Zoo", emoji: "🦒" }, { text: "Office", emoji: "🏢" }],
    correctIndex: 1,
    correctFeedback: "Yes! You see animals at the zoo!",
  },
  {
    id: "where6", category: "where", difficulty: 2,
    question: "Where do birds build nests?",
    image: "🐦",
    choices: [{ text: "Underground", emoji: "⬇️" }, { text: "In trees", emoji: "🌳" }],
    correctIndex: 1,
    correctFeedback: "That's right! Birds build nests in trees!",
  },
  {
    id: "where7", category: "where", difficulty: 1,
    question: "Where do you play on swings?",
    image: "🎠",
    choices: [{ text: "Bathroom", emoji: "🚿" }, { text: "Playground", emoji: "🛝" }, { text: "Kitchen", emoji: "🍳" }],
    correctIndex: 1,
    correctFeedback: "Yes! You play on swings at the playground!",
  },
  {
    id: "where8", category: "where", difficulty: 1,
    question: "Where do you go when sick?",
    image: "🤒",
    choices: [{ text: "Park", emoji: "🌳" }, { text: "Doctor", emoji: "🏥" }],
    correctIndex: 1,
    correctFeedback: "That's right! You go to the doctor when you are sick!",
  },

  // ============ WHEN (easy → complex) ============
  {
    id: "when1", category: "when", difficulty: 1,
    question: "When do you eat breakfast?",
    image: "🌅",
    choices: [{ text: "At night", emoji: "🌙" }, { text: "In the morning", emoji: "🌅" }],
    correctIndex: 1,
    correctFeedback: "Yes! You eat breakfast in the morning!",
  },
  {
    id: "when2", category: "when", difficulty: 1,
    question: "When do stars come out?",
    image: "⭐",
    choices: [{ text: "Morning", emoji: "🌅" }, { text: "Afternoon", emoji: "☀️" }, { text: "Night", emoji: "🌙" }],
    correctIndex: 2,
    correctFeedback: "That's right! Stars come out at night!",
  },
  {
    id: "when3", category: "when", difficulty: 1,
    question: "When do you open presents?",
    image: "🎁",
    choices: [{ text: "On your birthday", emoji: "🎂" }, { text: "At bedtime", emoji: "😴" }],
    correctIndex: 0,
    correctFeedback: "Yes! You open presents on your birthday!",
  },
  {
    id: "when4", category: "when", difficulty: 2,
    question: "When do you wear a coat?",
    image: "🧥",
    choices: [{ text: "When it's hot", emoji: "🔥" }, { text: "When it's cold", emoji: "❄️" }, { text: "At the beach", emoji: "🏖️" }],
    correctIndex: 1,
    correctFeedback: "That's right! You wear a coat when it's cold!",
  },
  {
    id: "when5", category: "when", difficulty: 1,
    question: "When do you brush your teeth?",
    image: "🦷",
    choices: [{ text: "Before bed", emoji: "🌙" }, { text: "While running", emoji: "🏃" }],
    correctIndex: 0,
    correctFeedback: "Yes! You brush your teeth before bed!",
  },
  {
    id: "when6", category: "when", difficulty: 1,
    question: "When do we use an umbrella?",
    image: "☂️",
    choices: [{ text: "Sunny day", emoji: "☀️" }, { text: "Rainy day", emoji: "🌧️" }],
    correctIndex: 1,
    correctFeedback: "That's right! We use an umbrella on a rainy day!",
  },
  {
    id: "when7", category: "when", difficulty: 2,
    question: "When do leaves fall?",
    image: "🍂",
    choices: [{ text: "Spring", emoji: "🌸" }, { text: "Summer", emoji: "☀️" }, { text: "Autumn", emoji: "🍂" }],
    correctIndex: 2,
    correctFeedback: "Yes! Leaves fall in autumn!",
  },
  {
    id: "when8", category: "when", difficulty: 1,
    question: "When do you say good night?",
    image: "🌙",
    choices: [{ text: "Morning", emoji: "🌅" }, { text: "Bedtime", emoji: "🛏️" }],
    correctIndex: 1,
    correctFeedback: "That's right! You say good night at bedtime!",
  },

  // ============ WHY (easy → complex) ============
  {
    id: "why1", category: "why", difficulty: 1,
    question: "Why do we wear sunglasses?",
    image: "😎",
    choices: [{ text: "To protect our eyes", emoji: "👀" }, { text: "To hear better", emoji: "👂" }],
    correctIndex: 0,
    correctFeedback: "Yes! We wear sunglasses to protect our eyes from the sun!",
  },
  {
    id: "why2", category: "why", difficulty: 1,
    question: "Why do we eat food?",
    image: "🍎",
    choices: [{ text: "To stay strong", emoji: "💪" }, { text: "To sleep", emoji: "😴" }, { text: "For fun", emoji: "🎉" }],
    correctIndex: 0,
    correctFeedback: "That's right! We eat food to stay strong and healthy!",
  },
  {
    id: "why3", category: "why", difficulty: 1,
    question: "Why do we drink water?",
    image: "💧",
    choices: [{ text: "To stay clean", emoji: "🧼" }, { text: "Because we're thirsty", emoji: "😋" }],
    correctIndex: 1,
    correctFeedback: "Yes! We drink water because we are thirsty!",
  },
  {
    id: "why4", category: "why", difficulty: 2,
    question: "Why do we go to school?",
    image: "📖",
    choices: [{ text: "To eat", emoji: "🍔" }, { text: "To learn", emoji: "📚" }, { text: "To swim", emoji: "🏊" }],
    correctIndex: 1,
    correctFeedback: "That's right! We go to school to learn new things!",
  },
  {
    id: "why5", category: "why", difficulty: 3,
    question: "Why do birds fly south?",
    image: "🦅",
    choices: [{ text: "To find warm weather", emoji: "☀️" }, { text: "To go shopping", emoji: "🛒" }],
    correctIndex: 0,
    correctFeedback: "Yes! Birds fly south to find warm weather!",
  },
  {
    id: "why6", category: "why", difficulty: 2,
    question: "Why do we wash our hands?",
    image: "🧼",
    choices: [{ text: "To remove germs", emoji: "🦠" }, { text: "For fun", emoji: "🎉" }, { text: "To paint", emoji: "🎨" }],
    correctIndex: 0,
    correctFeedback: "That's right! We wash our hands to remove germs!",
  },
  {
    id: "why7", category: "why", difficulty: 2,
    question: "Why do we wear helmets?",
    image: "⛑️",
    choices: [{ text: "For fashion", emoji: "👗" }, { text: "To protect our head", emoji: "🛡️" }],
    correctIndex: 1,
    correctFeedback: "Yes! We wear helmets to protect our head!",
  },
  {
    id: "why8", category: "why", difficulty: 2,
    question: "Why is the boy crying?",
    image: "😢",
    choices: [{ text: "He's happy", emoji: "😊" }, { text: "He fell down", emoji: "🤕" }],
    correctIndex: 1,
    correctFeedback: "That's right! The boy is crying because he fell down!",
  },

  // ============ HOW (easy → complex) ============
  {
    id: "how1", category: "how", difficulty: 1,
    question: "How do you get to school?",
    image: "🚌",
    choices: [{ text: "By bus", emoji: "🚌" }, { text: "By swimming", emoji: "🏊" }],
    correctIndex: 0,
    correctFeedback: "Yes! You get to school by bus!",
  },
  {
    id: "how2", category: "how", difficulty: 2,
    question: "How do you make a sandwich?",
    image: "🥪",
    choices: [{ text: "Put things in bread", emoji: "🥪" }, { text: "Freeze it", emoji: "🧊" }, { text: "Shake it", emoji: "🫨" }],
    correctIndex: 0,
    correctFeedback: "That's right! You make a sandwich by putting things between bread!",
  },
  {
    id: "how3", category: "how", difficulty: 1,
    question: "How does a fish move?",
    image: "🐠",
    choices: [{ text: "It walks", emoji: "🚶" }, { text: "It swims", emoji: "🏊" }],
    correctIndex: 1,
    correctFeedback: "Yes! A fish moves by swimming!",
  },
  {
    id: "how4", category: "how", difficulty: 2,
    question: "How do you feel getting a gift?",
    image: "🎁",
    choices: [{ text: "Sad", emoji: "😢" }, { text: "Happy", emoji: "😊" }, { text: "Scared", emoji: "😨" }],
    correctIndex: 1,
    correctFeedback: "That's right! You feel happy when you get a gift!",
  },
  {
    id: "how5", category: "how", difficulty: 1,
    question: "How many legs does a dog have?",
    image: "🐕",
    choices: [{ text: "2", emoji: "✌️" }, { text: "4", emoji: "🐾" }],
    correctIndex: 1,
    correctFeedback: "Yes! A dog has 4 legs!",
  },
  {
    id: "how6", category: "how", difficulty: 1,
    question: "How do you say hello?",
    image: "👋",
    choices: [{ text: "Wave your hand", emoji: "👋" }, { text: "Close your eyes", emoji: "😑" }, { text: "Stomp feet", emoji: "🦶" }],
    correctIndex: 0,
    correctFeedback: "That's right! You say hello by waving your hand!",
  },
  {
    id: "how7", category: "how", difficulty: 2,
    question: "How do plants grow?",
    image: "🌱",
    choices: [{ text: "Sun and water", emoji: "🌞" }, { text: "With fire", emoji: "🔥" }],
    correctIndex: 0,
    correctFeedback: "Yes! Plants grow with sun and water!",
  },
  {
    id: "how8", category: "how", difficulty: 1,
    question: "How do you open a door?",
    image: "🚪",
    choices: [{ text: "Kick it", emoji: "🦶" }, { text: "Turn the handle", emoji: "🔑" }],
    correctIndex: 1,
    correctFeedback: "That's right! You open a door by turning the handle!",
  },
];

export function getQuestionsByCategory(category: WHCategory): WHQuestion[] {
  return questions
    .filter((q) => q.category === category)
    .sort((a, b) => (a.difficulty ?? 1) - (b.difficulty ?? 1));
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
