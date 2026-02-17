export type WHCategory = "who" | "what" | "where" | "when" | "why" | "how";

export interface WHQuestion {
  id: string;
  category: WHCategory;
  question: string;
  image: string; // emoji for simplicity & offline
  choices: string[];
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
  // WHO questions
  { id: "who1", category: "who", question: "Who puts out fires?", image: "🚒", choices: ["Firefighter", "Teacher", "Baker", "Pilot"], correctIndex: 0 },
  { id: "who2", category: "who", question: "Who teaches kids at school?", image: "🏫", choices: ["Doctor", "Teacher", "Chef", "Driver"], correctIndex: 1 },
  { id: "who3", category: "who", question: "Who takes care of sick people?", image: "🏥", choices: ["Farmer", "Painter", "Doctor", "Singer"], correctIndex: 2 },
  { id: "who4", category: "who", question: "Who delivers letters to your house?", image: "📬", choices: ["Police", "Mail carrier", "Dentist", "Vet"], correctIndex: 1 },
  { id: "who5", category: "who", question: "Who flies an airplane?", image: "✈️", choices: ["Pilot", "Nurse", "Clown", "Cook"], correctIndex: 0 },
  { id: "who6", category: "who", question: "Who bakes bread and cakes?", image: "🎂", choices: ["Plumber", "Baker", "Soldier", "Astronaut"], correctIndex: 1 },
  { id: "who7", category: "who", question: "Who helps you when you are lost?", image: "👮", choices: ["Teacher", "Chef", "Police officer", "Artist"], correctIndex: 2 },
  { id: "who8", category: "who", question: "Who takes care of animals?", image: "🐾", choices: ["Vet", "Barber", "Lifeguard", "Judge"], correctIndex: 0 },

  // WHAT questions
  { id: "what1", category: "what", question: "What do you use to eat soup?", image: "🍲", choices: ["Fork", "Knife", "Spoon", "Cup"], correctIndex: 2 },
  { id: "what2", category: "what", question: "What do you wear on your feet?", image: "🦶", choices: ["Hat", "Gloves", "Shoes", "Scarf"], correctIndex: 2 },
  { id: "what3", category: "what", question: "What animal says 'moo'?", image: "🐄", choices: ["Dog", "Cat", "Cow", "Duck"], correctIndex: 2 },
  { id: "what4", category: "what", question: "What do you use to brush your teeth?", image: "🪥", choices: ["Comb", "Toothbrush", "Pencil", "Spoon"], correctIndex: 1 },
  { id: "what5", category: "what", question: "What do you use to cut paper?", image: "✂️", choices: ["Scissors", "Ruler", "Pen", "Tape"], correctIndex: 0 },
  { id: "what6", category: "what", question: "What do you drink in the morning?", image: "🥛", choices: ["Soup", "Milk", "Ketchup", "Oil"], correctIndex: 1 },
  { id: "what7", category: "what", question: "What has four legs and you sit on it?", image: "🪑", choices: ["Table", "Chair", "Bed", "Lamp"], correctIndex: 1 },
  { id: "what8", category: "what", question: "What do you use when it rains?", image: "🌧️", choices: ["Sunglasses", "Umbrella", "Fan", "Towel"], correctIndex: 1 },

  // WHERE questions
  { id: "where1", category: "where", question: "Where do you go to buy food?", image: "🛒", choices: ["Library", "Store", "Park", "Hospital"], correctIndex: 1 },
  { id: "where2", category: "where", question: "Where do fish live?", image: "🐟", choices: ["Tree", "Sky", "Water", "Desert"], correctIndex: 2 },
  { id: "where3", category: "where", question: "Where do you sleep at night?", image: "😴", choices: ["Kitchen", "Garage", "Bed", "Garden"], correctIndex: 2 },
  { id: "where4", category: "where", question: "Where do you go to read books?", image: "📚", choices: ["Library", "Beach", "Zoo", "Pool"], correctIndex: 0 },
  { id: "where5", category: "where", question: "Where do you go to see animals?", image: "🦁", choices: ["School", "Office", "Zoo", "Church"], correctIndex: 2 },
  { id: "where6", category: "where", question: "Where do birds build nests?", image: "🐦", choices: ["Underground", "In water", "In trees", "In caves"], correctIndex: 2 },
  { id: "where7", category: "where", question: "Where do you go to play on swings?", image: "🎠", choices: ["Bathroom", "Playground", "Kitchen", "Office"], correctIndex: 1 },
  { id: "where8", category: "where", question: "Where do you go when you're sick?", image: "🤒", choices: ["Park", "School", "Doctor", "Store"], correctIndex: 2 },

  // WHEN questions
  { id: "when1", category: "when", question: "When do you eat breakfast?", image: "🌅", choices: ["At night", "In the morning", "At midnight", "Never"], correctIndex: 1 },
  { id: "when2", category: "when", question: "When do stars come out?", image: "⭐", choices: ["Morning", "Afternoon", "Night", "Noon"], correctIndex: 2 },
  { id: "when3", category: "when", question: "When do you open presents?", image: "🎁", choices: ["At school", "On your birthday", "At bedtime", "At lunch"], correctIndex: 1 },
  { id: "when4", category: "when", question: "When do you wear a coat?", image: "🧥", choices: ["When it's hot", "When it's cold", "At the beach", "In summer"], correctIndex: 1 },
  { id: "when5", category: "when", question: "When do you brush your teeth?", image: "🦷", choices: ["Before bed", "At school", "While running", "Never"], correctIndex: 0 },
  { id: "when6", category: "when", question: "When do we use an umbrella?", image: "☂️", choices: ["Sunny day", "Rainy day", "Snowy day", "Windy day"], correctIndex: 1 },
  { id: "when7", category: "when", question: "When do leaves fall from trees?", image: "🍂", choices: ["Spring", "Summer", "Autumn", "Winter"], correctIndex: 2 },
  { id: "when8", category: "when", question: "When do you say 'good night'?", image: "🌙", choices: ["Morning", "Afternoon", "Bedtime", "Lunch"], correctIndex: 2 },

  // WHY questions
  { id: "why1", category: "why", question: "Why do we wear sunglasses?", image: "😎", choices: ["To look cool", "To protect our eyes", "To see in the dark", "To hear better"], correctIndex: 1 },
  { id: "why2", category: "why", question: "Why do we eat food?", image: "🍎", choices: ["For fun", "To stay strong", "To sleep", "To play"], correctIndex: 1 },
  { id: "why3", category: "why", question: "Why do we drink water?", image: "💧", choices: ["To stay clean", "Because it's blue", "Because we're thirsty", "To cook"], correctIndex: 2 },
  { id: "why4", category: "why", question: "Why do we go to school?", image: "📖", choices: ["To eat", "To sleep", "To learn", "To swim"], correctIndex: 2 },
  { id: "why5", category: "why", question: "Why do birds fly south in winter?", image: "🦅", choices: ["For fun", "To find warm weather", "To visit friends", "To go shopping"], correctIndex: 1 },
  { id: "why6", category: "why", question: "Why do we wash our hands?", image: "🧼", choices: ["To get wet", "To remove germs", "For fun", "To paint"], correctIndex: 1 },
  { id: "why7", category: "why", question: "Why do we wear helmets?", image: "⛑️", choices: ["For fashion", "To protect our head", "To stay warm", "To look tall"], correctIndex: 1 },
  { id: "why8", category: "why", question: "Why is the boy crying?", image: "😢", choices: ["He's happy", "He fell down", "He's sleeping", "He's eating"], correctIndex: 1 },

  // HOW questions
  { id: "how1", category: "how", question: "How do you get to school?", image: "🚌", choices: ["By bus", "By flying", "By swimming", "By digging"], correctIndex: 0 },
  { id: "how2", category: "how", question: "How do you make a sandwich?", image: "🥪", choices: ["Cook it", "Put things between bread", "Freeze it", "Shake it"], correctIndex: 1 },
  { id: "how3", category: "how", question: "How does a fish move in water?", image: "🐠", choices: ["It walks", "It flies", "It swims", "It jumps"], correctIndex: 2 },
  { id: "how4", category: "how", question: "How do you feel when you get a gift?", image: "🎁", choices: ["Sad", "Angry", "Happy", "Scared"], correctIndex: 2 },
  { id: "how5", category: "how", question: "How many legs does a dog have?", image: "🐕", choices: ["2", "4", "6", "8"], correctIndex: 1 },
  { id: "how6", category: "how", question: "How do you say hello to someone?", image: "👋", choices: ["Wave your hand", "Close your eyes", "Turn around", "Stomp your feet"], correctIndex: 0 },
  { id: "how7", category: "how", question: "How do plants grow?", image: "🌱", choices: ["With sun and water", "With ice", "In the dark", "With fire"], correctIndex: 0 },
  { id: "how8", category: "how", question: "How do you open a door?", image: "🚪", choices: ["Kick it", "Turn the handle", "Yell at it", "Sit on it"], correctIndex: 1 },
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
