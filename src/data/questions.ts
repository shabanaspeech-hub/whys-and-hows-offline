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
  // ============ WHO ============
  {
    id: "who1", category: "who", difficulty: 1,
    question: "Who puts out fires?",
    image: "🚒",
    choices: [{ text: "Firefighter", emoji: "👨‍🚒" }, { text: "Teacher", emoji: "👩‍🏫" }, { text: "Baker", emoji: "👨‍🍳" }],
    correctIndex: 0,
    correctFeedback: "A firefighter puts out fires.",
  },
  {
    id: "who2", category: "who", difficulty: 1,
    question: "Who teaches kids at school?",
    image: "🏫",
    choices: [{ text: "Doctor", emoji: "👨‍⚕️" }, { text: "Teacher", emoji: "👩‍🏫" }],
    correctIndex: 1,
    correctFeedback: "A teacher teaches kids at school.",
  },
  {
    id: "who3", category: "who", difficulty: 1,
    question: "Who gives you medicine?",
    image: "💊",
    choices: [{ text: "Farmer", emoji: "👨‍🌾" }, { text: "Singer", emoji: "🎤" }, { text: "Doctor", emoji: "👨‍⚕️" }],
    correctIndex: 2,
    correctFeedback: "A doctor gives me medicine.",
  },
  {
    id: "who4", category: "who", difficulty: 1,
    question: "Who delivers letters?",
    image: "✉️",
    choices: [{ text: "Postman", emoji: "📮" }, { text: "Police officer", emoji: "👮" }],
    correctIndex: 0,
    correctFeedback: "A postman delivers letters.",
  },
  {
    id: "who5", category: "who", difficulty: 2,
    question: "Who flies an airplane?",
    image: "✈️",
    choices: [{ text: "Pilot", emoji: "👨‍✈️" }, { text: "Nurse", emoji: "👩‍⚕️" }, { text: "Cook", emoji: "👨‍🍳" }],
    correctIndex: 0,
    correctFeedback: "A pilot flies an airplane.",
  },
  {
    id: "who6", category: "who", difficulty: 2,
    question: "Who bakes bread and cakes?",
    image: "🍞",
    choices: [{ text: "Soldier", emoji: "💂" }, { text: "Baker", emoji: "👨‍🍳" }],
    correctIndex: 1,
    correctFeedback: "A baker bakes bread and cakes.",
  },
  {
    id: "who7", category: "who", difficulty: 2,
    question: "Who catches bad people?",
    image: "🚓",
    choices: [{ text: "Chef", emoji: "👨‍🍳" }, { text: "Artist", emoji: "🎨" }, { text: "Police officer", emoji: "👮" }],
    correctIndex: 2,
    correctFeedback: "A police officer catches bad people.",
  },
  {
    id: "who8", category: "who", difficulty: 2,
    question: "Who helps sick animals?",
    image: "🐶",
    choices: [{ text: "Vet", emoji: "🩺" }, { text: "Barber", emoji: "💈" }],
    correctIndex: 0,
    correctFeedback: "A vet helps sick animals.",
  },

  // ============ WHAT ============
  {
    id: "what1", category: "what", difficulty: 1,
    question: "What do you use to eat soup?",
    image: "🍲",
    choices: [{ text: "Fork", emoji: "🍴" }, { text: "Spoon", emoji: "🥄" }],
    correctIndex: 1,
    correctFeedback: "I use a spoon to eat soup.",
  },
  {
    id: "what2", category: "what", difficulty: 1,
    question: "What do you wear on your feet?",
    image: "👟",
    choices: [{ text: "Hat", emoji: "🎩" }, { text: "Gloves", emoji: "🧤" }, { text: "Shoes", emoji: "👟" }],
    correctIndex: 2,
    correctFeedback: "I wear shoes on my feet.",
  },
  {
    id: "what3", category: "what", difficulty: 1,
    question: "What animal says 'moo'?",
    image: "🐄",
    choices: [{ text: "Dog", emoji: "🐕" }, { text: "Cow", emoji: "🐄" }, { text: "Cat", emoji: "🐱" }],
    correctIndex: 1,
    correctFeedback: "A cow says 'moo'.",
  },
  {
    id: "what4", category: "what", difficulty: 1,
    question: "What do you use to brush your teeth?",
    image: "🦷",
    choices: [{ text: "Comb", emoji: "🪮" }, { text: "Toothbrush", emoji: "🪥" }],
    correctIndex: 1,
    correctFeedback: "I use a toothbrush to brush my teeth.",
  },
  {
    id: "what5", category: "what", difficulty: 2,
    question: "What do you use to cut paper?",
    image: "📄",
    choices: [{ text: "Scissors", emoji: "✂️" }, { text: "Pen", emoji: "🖊️" }, { text: "Ruler", emoji: "📏" }],
    correctIndex: 0,
    correctFeedback: "I use scissors to cut paper.",
  },
  {
    id: "what6", category: "what", difficulty: 1,
    question: "What do you drink when you are thirsty?",
    image: "💧",
    choices: [{ text: "Water", emoji: "💧" }, { text: "Ketchup", emoji: "🍅" }],
    correctIndex: 0,
    correctFeedback: "I drink water when I am thirsty.",
  },
  {
    id: "what7", category: "what", difficulty: 1,
    question: "What do you sit on?",
    image: "💺",
    choices: [{ text: "Table", emoji: "🍽️" }, { text: "Chair", emoji: "💺" }, { text: "Lamp", emoji: "💡" }],
    correctIndex: 1,
    correctFeedback: "I sit on a chair.",
  },
  {
    id: "what8", category: "what", difficulty: 2,
    question: "What do you use when it rains?",
    image: "🌧️",
    choices: [{ text: "Sunglasses", emoji: "🕶️" }, { text: "Umbrella", emoji: "☂️" }],
    correctIndex: 1,
    correctFeedback: "I use an umbrella when it rains.",
  },

  // ============ WHERE ============
  {
    id: "where1", category: "where", difficulty: 1,
    question: "Where do you buy food?",
    image: "🛒",
    choices: [{ text: "Library", emoji: "📚" }, { text: "Store", emoji: "🏪" }, { text: "Park", emoji: "🌳" }],
    correctIndex: 1,
    correctFeedback: "I buy food at the store.",
  },
  {
    id: "where2", category: "where", difficulty: 1,
    question: "Where do fish live?",
    image: "🐟",
    choices: [{ text: "Tree", emoji: "🌲" }, { text: "Water", emoji: "🌊" }],
    correctIndex: 1,
    correctFeedback: "Fish live in the water.",
  },
  {
    id: "where3", category: "where", difficulty: 1,
    question: "Where do you sleep?",
    image: "🛏️",
    choices: [{ text: "Kitchen", emoji: "🍳" }, { text: "Bed", emoji: "🛏️" }, { text: "Garden", emoji: "🌻" }],
    correctIndex: 1,
    correctFeedback: "I sleep in my bed.",
  },
  {
    id: "where4", category: "where", difficulty: 1,
    question: "Where do you read books?",
    image: "📖",
    choices: [{ text: "Library", emoji: "📚" }, { text: "Beach", emoji: "🏖️" }],
    correctIndex: 0,
    correctFeedback: "I read books at the library.",
  },
  {
    id: "where5", category: "where", difficulty: 2,
    question: "Where do you see lions and tigers?",
    image: "🦁",
    choices: [{ text: "School", emoji: "🏫" }, { text: "Zoo", emoji: "🦒" }, { text: "Office", emoji: "🏢" }],
    correctIndex: 1,
    correctFeedback: "I see lions and tigers at the zoo.",
  },
  {
    id: "where6", category: "where", difficulty: 2,
    question: "Where do birds build nests?",
    image: "🐦",
    choices: [{ text: "Underground", emoji: "🕳️" }, { text: "In trees", emoji: "🌳" }],
    correctIndex: 1,
    correctFeedback: "Birds build nests in trees.",
  },
  {
    id: "where7", category: "where", difficulty: 1,
    question: "Where do you play on swings?",
    image: "🛝",
    choices: [{ text: "Bathroom", emoji: "🚿" }, { text: "Playground", emoji: "🛝" }, { text: "Kitchen", emoji: "🍳" }],
    correctIndex: 1,
    correctFeedback: "I play on swings at the playground.",
  },
  {
    id: "where8", category: "where", difficulty: 1,
    question: "Where do you go when you are sick?",
    image: "🏥",
    choices: [{ text: "Park", emoji: "🌳" }, { text: "Hospital", emoji: "🏥" }],
    correctIndex: 1,
    correctFeedback: "I go to the hospital when I am sick.",
  },

  // ============ WHEN ============
  {
    id: "when1", category: "when", difficulty: 1,
    question: "When do you eat breakfast?",
    image: "🌅",
    choices: [{ text: "At night", emoji: "🌙" }, { text: "In the morning", emoji: "🌅" }],
    correctIndex: 1,
    correctFeedback: "I eat breakfast in the morning.",
  },
  {
    id: "when2", category: "when", difficulty: 1,
    question: "When do stars come out?",
    image: "⭐",
    choices: [{ text: "Morning", emoji: "🌅" }, { text: "Afternoon", emoji: "☀️" }, { text: "Night", emoji: "🌙" }],
    correctIndex: 2,
    correctFeedback: "Stars come out at night.",
  },
  {
    id: "when3", category: "when", difficulty: 1,
    question: "When do you open presents?",
    image: "🎁",
    choices: [{ text: "On my birthday", emoji: "🎂" }, { text: "At bedtime", emoji: "😴" }],
    correctIndex: 0,
    correctFeedback: "I open presents on my birthday.",
  },
  {
    id: "when4", category: "when", difficulty: 2,
    question: "When do you wear a coat?",
    image: "🧥",
    choices: [{ text: "When it's hot", emoji: "🔥" }, { text: "When it's cold", emoji: "❄️" }, { text: "At the beach", emoji: "🏖️" }],
    correctIndex: 1,
    correctFeedback: "I wear a coat when it is cold.",
  },
  {
    id: "when5", category: "when", difficulty: 1,
    question: "When do you brush your teeth?",
    image: "🪥",
    choices: [{ text: "Before bed", emoji: "🌙" }, { text: "While running", emoji: "🏃" }],
    correctIndex: 0,
    correctFeedback: "I brush my teeth before bed.",
  },
  {
    id: "when6", category: "when", difficulty: 1,
    question: "When do you use an umbrella?",
    image: "☂️",
    choices: [{ text: "Sunny day", emoji: "☀️" }, { text: "Rainy day", emoji: "🌧️" }],
    correctIndex: 1,
    correctFeedback: "I use an umbrella on a rainy day.",
  },
  {
    id: "when7", category: "when", difficulty: 2,
    question: "When do leaves fall from trees?",
    image: "🍂",
    choices: [{ text: "Spring", emoji: "🌸" }, { text: "Summer", emoji: "☀️" }, { text: "Autumn", emoji: "🍂" }],
    correctIndex: 2,
    correctFeedback: "Leaves fall from trees in autumn.",
  },
  {
    id: "when8", category: "when", difficulty: 1,
    question: "When do you say good night?",
    image: "🌙",
    choices: [{ text: "Morning", emoji: "🌅" }, { text: "Bedtime", emoji: "🛏️" }],
    correctIndex: 1,
    correctFeedback: "I say good night at bedtime.",
  },

  // ============ WHY ============
  {
    id: "why1", category: "why", difficulty: 1,
    question: "Why do you wear sunglasses?",
    image: "😎",
    choices: [{ text: "To protect my eyes", emoji: "👀" }, { text: "To hear better", emoji: "👂" }],
    correctIndex: 0,
    correctFeedback: "I wear sunglasses to protect my eyes from the sun.",
  },
  {
    id: "why2", category: "why", difficulty: 1,
    question: "Why do you eat food?",
    image: "🍎",
    choices: [{ text: "To stay strong", emoji: "💪" }, { text: "To sleep", emoji: "😴" }, { text: "For fun", emoji: "🎉" }],
    correctIndex: 0,
    correctFeedback: "I eat food to stay strong and healthy.",
  },
  {
    id: "why3", category: "why", difficulty: 1,
    question: "Why do you drink water?",
    image: "💧",
    choices: [{ text: "To stay clean", emoji: "🧼" }, { text: "Because I am thirsty", emoji: "😋" }],
    correctIndex: 1,
    correctFeedback: "I drink water because I am thirsty.",
  },
  {
    id: "why4", category: "why", difficulty: 2,
    question: "Why do you go to school?",
    image: "🏫",
    choices: [{ text: "To eat", emoji: "🍔" }, { text: "To learn", emoji: "📚" }, { text: "To swim", emoji: "🏊" }],
    correctIndex: 1,
    correctFeedback: "I go to school to learn new things.",
  },
  {
    id: "why5", category: "why", difficulty: 2,
    question: "Why do you put on a coat?",
    image: "🧥",
    choices: [{ text: "Because it is cold", emoji: "❄️" }, { text: "To go swimming", emoji: "🏊" }],
    correctIndex: 0,
    correctFeedback: "I put on a coat because it is cold.",
  },
  {
    id: "why6", category: "why", difficulty: 2,
    question: "Why do you wash your hands?",
    image: "🧼",
    choices: [{ text: "To clean off germs", emoji: "🦠" }, { text: "For fun", emoji: "🎉" }, { text: "To paint", emoji: "🎨" }],
    correctIndex: 0,
    correctFeedback: "I wash my hands to clean off germs.",
  },
  {
    id: "why7", category: "why", difficulty: 2,
    question: "Why do you wear a helmet?",
    image: "⛑️",
    choices: [{ text: "For fashion", emoji: "👗" }, { text: "To keep my head safe", emoji: "🛡️" }],
    correctIndex: 1,
    correctFeedback: "I wear a helmet to keep my head safe.",
  },
  {
    id: "why8", category: "why", difficulty: 2,
    question: "Why is the boy crying?",
    image: "😢",
    choices: [{ text: "He is happy", emoji: "😊" }, { text: "He fell down", emoji: "🤕" }],
    correctIndex: 1,
    correctFeedback: "The boy is crying because he fell down.",
  },

  // ============ HOW ============
  {
    id: "how1", category: "how", difficulty: 1,
    question: "How do you go to school?",
    image: "🚌",
    choices: [{ text: "By bus", emoji: "🚌" }, { text: "By swimming", emoji: "🏊" }],
    correctIndex: 0,
    correctFeedback: "I go to school by bus.",
  },
  {
    id: "how2", category: "how", difficulty: 2,
    question: "How do you make a sandwich?",
    image: "🥪",
    choices: [{ text: "Put food in bread", emoji: "🥪" }, { text: "Freeze it", emoji: "🧊" }, { text: "Shake it", emoji: "🫨" }],
    correctIndex: 0,
    correctFeedback: "I make a sandwich by putting food in bread.",
  },
  {
    id: "how3", category: "how", difficulty: 1,
    question: "How does a fish move?",
    image: "🐠",
    choices: [{ text: "It walks", emoji: "🚶" }, { text: "It swims", emoji: "🏊" }],
    correctIndex: 1,
    correctFeedback: "A fish moves by swimming.",
  },
  {
    id: "how4", category: "how", difficulty: 2,
    question: "How do you feel when you get a gift?",
    image: "🎁",
    choices: [{ text: "Sad", emoji: "😢" }, { text: "Happy", emoji: "😊" }, { text: "Scared", emoji: "😨" }],
    correctIndex: 1,
    correctFeedback: "I feel happy when I get a gift.",
  },
  {
    id: "how5", category: "how", difficulty: 1,
    question: "How many legs does a dog have?",
    image: "🐕",
    choices: [{ text: "2", emoji: "✌️" }, { text: "4", emoji: "🐾" }],
    correctIndex: 1,
    correctFeedback: "A dog has 4 legs.",
  },
  {
    id: "how6", category: "how", difficulty: 1,
    question: "How do you say hello?",
    image: "👋",
    choices: [{ text: "Wave my hand", emoji: "👋" }, { text: "Close my eyes", emoji: "😑" }, { text: "Stomp my feet", emoji: "🦶" }],
    correctIndex: 0,
    correctFeedback: "I say hello by waving my hand.",
  },
  {
    id: "how7", category: "how", difficulty: 2,
    question: "How do plants grow?",
    image: "🌱",
    choices: [{ text: "With sun and water", emoji: "🌞" }, { text: "With fire", emoji: "🔥" }],
    correctIndex: 0,
    correctFeedback: "Plants grow with sun and water.",
  },
  {
    id: "how8", category: "how", difficulty: 1,
    question: "How do you open a door?",
    image: "🚪",
    choices: [{ text: "Kick it", emoji: "🦶" }, { text: "Turn the handle", emoji: "🔑" }],
    correctIndex: 1,
    correctFeedback: "I open a door by turning the handle.",
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
