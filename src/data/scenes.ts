import scenePark from "../assets/scenes/scene-park.jpg";
import sceneKitchen from "../assets/scenes/scene-kitchen.jpg";
import sceneClassroom from "../assets/scenes/scene-classroom.jpg";
import sceneBedroom from "../assets/scenes/scene-bedroom.jpg";
import sceneBeach from "../assets/scenes/scene-beach.jpg";
import sceneFarm from "../assets/scenes/scene-farm.jpg";
import sceneZoo from "../assets/scenes/scene-zoo.jpg";
import sceneBirthday from "../assets/scenes/scene-birthday.jpg";
import sceneStore from "../assets/scenes/scene-store.jpg";
import scenePlayground from "../assets/scenes/scene-playground.jpg";
import sceneDoctor from "../assets/scenes/scene-doctor.jpg";
import sceneRainy from "../assets/scenes/scene-rainy.jpg";
import sceneLibrary from "../assets/scenes/scene-library.jpg";
import sceneGarden from "../assets/scenes/scene-garden.jpg";
import sceneBath from "../assets/scenes/scene-bath.jpg";
import sceneFirestation from "../assets/scenes/scene-firestation.jpg";
import scenePicnic from "../assets/scenes/scene-picnic.jpg";
import scenePetshop from "../assets/scenes/scene-petshop.jpg";
import sceneSnow from "../assets/scenes/scene-snow.jpg";
import sceneBusstop from "../assets/scenes/scene-busstop.jpg";

export interface SceneQuestion {
  question: string;
  choices: { text: string; emoji: string }[];
  correctIndex: number;
}

export interface Scene {
  id: string;
  title: string;
  image: string;
  emoji: string;
  questions: SceneQuestion[];
}

export const scenes: Scene[] = [
  {
    id: "park", title: "At the Park", image: scenePark, emoji: "🌳",
    questions: [
      { question: "Who is on the swing?", choices: [{ text: "The boy", emoji: "👦" }, { text: "The girl", emoji: "👧" }], correctIndex: 0 },
      { question: "What is the girl eating?", choices: [{ text: "An apple", emoji: "🍎" }, { text: "A cookie", emoji: "🍪" }], correctIndex: 0 },
      { question: "Where is the dog?", choices: [{ text: "On the bench", emoji: "🪑" }, { text: "On the grass", emoji: "🌿" }], correctIndex: 1 },
      { question: "What is flying in the sky?", choices: [{ text: "A bird", emoji: "🐦" }, { text: "A plane", emoji: "✈️" }, { text: "A kite", emoji: "🪁" }], correctIndex: 0 },
      { question: "Why is the boy happy?", choices: [{ text: "He is playing", emoji: "😄" }, { text: "He is sleeping", emoji: "😴" }], correctIndex: 0 },
      { question: "When do people go to the park?", choices: [{ text: "During the day", emoji: "☀️" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why does the dog run on the grass?", choices: [{ text: "To play and have fun", emoji: "🐕" }, { text: "To go to sleep", emoji: "😴" }, { text: "To read a book", emoji: "📖" }], correctIndex: 0 },
      { question: "What would happen if it started raining?", choices: [{ text: "People would go home", emoji: "🏠" }, { text: "People would swim", emoji: "🏊" }], correctIndex: 0 },
    ],
  },
  {
    id: "kitchen", title: "In the Kitchen", image: sceneKitchen, emoji: "🍳",
    questions: [
      { question: "Who is cooking?", choices: [{ text: "Mom", emoji: "👩" }, { text: "The boy", emoji: "👦" }], correctIndex: 0 },
      { question: "What is the boy drinking?", choices: [{ text: "Juice", emoji: "🧃" }, { text: "Milk", emoji: "🥛" }], correctIndex: 1 },
      { question: "Where is the cat?", choices: [{ text: "On the table", emoji: "🪑" }, { text: "Under the table", emoji: "⬇️" }], correctIndex: 1 },
      { question: "What is on the plate?", choices: [{ text: "Cookies", emoji: "🍪" }, { text: "Cake", emoji: "🎂" }, { text: "Pizza", emoji: "🍕" }], correctIndex: 0 },
      { question: "Why is Mom cooking?", choices: [{ text: "To make dinner", emoji: "🍽️" }, { text: "To play a game", emoji: "🎮" }], correctIndex: 0 },
      { question: "When do we eat breakfast?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At night", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why should we wash our hands before eating?", choices: [{ text: "To get rid of germs", emoji: "🧼" }, { text: "To make them wet", emoji: "💧" }, { text: "To play with water", emoji: "🌊" }], correctIndex: 0 },
      { question: "What happens if you touch a hot stove?", choices: [{ text: "You get burned", emoji: "🔥" }, { text: "You get cold", emoji: "❄️" }], correctIndex: 0 },
    ],
  },
  {
    id: "classroom", title: "At School", image: sceneClassroom, emoji: "🏫",
    questions: [
      { question: "Who is writing on the board?", choices: [{ text: "The teacher", emoji: "👩‍🏫" }, { text: "A student", emoji: "👦" }], correctIndex: 0 },
      { question: "Where are the children?", choices: [{ text: "At their desks", emoji: "📚" }, { text: "Outside", emoji: "🌳" }], correctIndex: 0 },
      { question: "What is on the wall?", choices: [{ text: "A clock", emoji: "🕐" }, { text: "A TV", emoji: "📺" }, { text: "A mirror", emoji: "🪞" }], correctIndex: 0 },
      { question: "Where are the books?", choices: [{ text: "On the shelf", emoji: "📚" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0 },
      { question: "Why do children go to school?", choices: [{ text: "To learn new things", emoji: "📖" }, { text: "To sleep", emoji: "😴" }], correctIndex: 0 },
      { question: "When is recess?", choices: [{ text: "After class", emoji: "⏰" }, { text: "During sleep", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why should you raise your hand?", choices: [{ text: "To ask a question", emoji: "✋" }, { text: "To wave goodbye", emoji: "👋" }, { text: "To stretch", emoji: "🤸" }], correctIndex: 0 },
      { question: "What happens when the bell rings?", choices: [{ text: "Class is over", emoji: "🔔" }, { text: "It starts raining", emoji: "🌧️" }], correctIndex: 0 },
    ],
  },
  {
    id: "bedroom", title: "Bedtime", image: sceneBedroom, emoji: "🛏️",
    questions: [
      { question: "Who is sleeping?", choices: [{ text: "The child", emoji: "👦" }, { text: "The cat", emoji: "🐱" }], correctIndex: 0 },
      { question: "What is on the window?", choices: [{ text: "The sun", emoji: "☀️" }, { text: "The moon", emoji: "🌙" }], correctIndex: 1 },
      { question: "Where is the teddy bear?", choices: [{ text: "On the bed", emoji: "🛏️" }, { text: "On the chair", emoji: "🪑" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0 },
      { question: "What is on the nightstand?", choices: [{ text: "A lamp", emoji: "💡" }, { text: "A toy", emoji: "🧸" }], correctIndex: 0 },
      { question: "Why is the room dark?", choices: [{ text: "Because it is nighttime", emoji: "🌙" }, { text: "Because it is lunchtime", emoji: "🍽️" }], correctIndex: 0 },
      { question: "When do you go to sleep?", choices: [{ text: "At night", emoji: "🌙" }, { text: "In the morning", emoji: "🌅" }], correctIndex: 0 },
      { question: "Why does the child hug the teddy bear?", choices: [{ text: "To feel safe and cozy", emoji: "🧸" }, { text: "To eat it", emoji: "🍽️" }, { text: "To throw it", emoji: "🏐" }], correctIndex: 0 },
      { question: "What should you do before going to bed?", choices: [{ text: "Brush your teeth", emoji: "🪥" }, { text: "Play outside", emoji: "🌳" }], correctIndex: 0 },
    ],
  },
  {
    id: "beach", title: "At the Beach", image: sceneBeach, emoji: "🏖️",
    questions: [
      { question: "What are the kids building?", choices: [{ text: "A sandcastle", emoji: "🏰" }, { text: "A house", emoji: "🏠" }], correctIndex: 0 },
      { question: "Who is swimming?", choices: [{ text: "A boy", emoji: "👦" }, { text: "A girl", emoji: "👧" }, { text: "A dog", emoji: "🐕" }], correctIndex: 0 },
      { question: "What is flying in the sky?", choices: [{ text: "A seagull", emoji: "🐦" }, { text: "A plane", emoji: "✈️" }], correctIndex: 0 },
      { question: "Where is the umbrella?", choices: [{ text: "On the sand", emoji: "🏖️" }, { text: "In the water", emoji: "🌊" }], correctIndex: 0 },
      { question: "Why do people put on sunscreen?", choices: [{ text: "To protect from the sun", emoji: "🧴" }, { text: "To get dirty", emoji: "💩" }], correctIndex: 0 },
      { question: "When do people go to the beach?", choices: [{ text: "In the summer", emoji: "☀️" }, { text: "In a snowstorm", emoji: "❄️" }], correctIndex: 0 },
      { question: "Why is the boy wearing goggles?", choices: [{ text: "To see underwater", emoji: "🥽" }, { text: "To read a book", emoji: "📖" }, { text: "To sleep", emoji: "😴" }], correctIndex: 0 },
      { question: "What would happen if a big wave came?", choices: [{ text: "The sandcastle would fall", emoji: "🌊" }, { text: "The sand would fly", emoji: "✈️" }], correctIndex: 0 },
    ],
  },
  {
    id: "farm", title: "On the Farm", image: sceneFarm, emoji: "🚜",
    questions: [
      { question: "Who is feeding the chickens?", choices: [{ text: "The farmer", emoji: "👨‍🌾" }, { text: "The boy", emoji: "👦" }], correctIndex: 0 },
      { question: "Where is the pig?", choices: [{ text: "In the barn", emoji: "🏠" }, { text: "In the mud", emoji: "💩" }], correctIndex: 1 },
      { question: "What color is the barn?", choices: [{ text: "Red", emoji: "🔴" }, { text: "Blue", emoji: "🔵" }, { text: "Green", emoji: "🟢" }], correctIndex: 0 },
      { question: "What animal says moo?", choices: [{ text: "The cow", emoji: "🐄" }, { text: "The chicken", emoji: "🐔" }], correctIndex: 0 },
      { question: "Why does the farmer water the crops?", choices: [{ text: "So they can grow", emoji: "🌱" }, { text: "To make mud", emoji: "💩" }], correctIndex: 0 },
      { question: "When do roosters crow?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why do pigs roll in mud?", choices: [{ text: "To stay cool", emoji: "🐷" }, { text: "To take a bath", emoji: "🛁" }, { text: "To fly", emoji: "✈️" }], correctIndex: 0 },
      { question: "Where do eggs come from?", choices: [{ text: "From chickens", emoji: "🐔" }, { text: "From cows", emoji: "🐄" }], correctIndex: 0 },
    ],
  },
  {
    id: "zoo", title: "At the Zoo", image: sceneZoo, emoji: "🦁",
    questions: [
      { question: "Where is the lion?", choices: [{ text: "In the cage", emoji: "🦁" }, { text: "On the tree", emoji: "🌳" }], correctIndex: 0 },
      { question: "What is the elephant doing?", choices: [{ text: "Spraying water", emoji: "💦" }, { text: "Sleeping", emoji: "😴" }], correctIndex: 0 },
      { question: "Who is climbing?", choices: [{ text: "The monkey", emoji: "🐒" }, { text: "The lion", emoji: "🦁" }, { text: "The boy", emoji: "👦" }], correctIndex: 0 },
      { question: "What is the boy holding?", choices: [{ text: "Balloons", emoji: "🎈" }, { text: "Ice cream", emoji: "🍦" }], correctIndex: 0 },
      { question: "Why are the animals in cages?", choices: [{ text: "To keep them safe", emoji: "🔒" }, { text: "Because they like it", emoji: "😊" }], correctIndex: 0 },
      { question: "When can you visit the zoo?", choices: [{ text: "During the day", emoji: "☀️" }, { text: "At 3 AM", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why does the elephant spray water?", choices: [{ text: "To cool down", emoji: "💦" }, { text: "To fly", emoji: "✈️" }, { text: "To paint", emoji: "🎨" }], correctIndex: 0 },
      { question: "What would happen if a monkey escaped?", choices: [{ text: "It would climb everywhere", emoji: "🐒" }, { text: "It would drive a car", emoji: "🚗" }], correctIndex: 0 },
    ],
  },
  {
    id: "birthday", title: "Birthday Party", image: sceneBirthday, emoji: "🎂",
    questions: [
      { question: "What is on the table?", choices: [{ text: "A cake", emoji: "🎂" }, { text: "A pizza", emoji: "🍕" }], correctIndex: 0 },
      { question: "What are the kids wearing?", choices: [{ text: "Party hats", emoji: "🎉" }, { text: "Helmets", emoji: "⛑️" }], correctIndex: 0 },
      { question: "What is next to the cake?", choices: [{ text: "Presents", emoji: "🎁" }, { text: "Books", emoji: "📚" }, { text: "Toys", emoji: "🧸" }], correctIndex: 0 },
      { question: "Where are the balloons?", choices: [{ text: "In the air", emoji: "🎈" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0 },
      { question: "Why are there candles on the cake?", choices: [{ text: "To make a birthday wish", emoji: "🕯️" }, { text: "To cook the cake", emoji: "🍳" }], correctIndex: 0 },
      { question: "When do you blow out the candles?", choices: [{ text: "After singing Happy Birthday", emoji: "🎵" }, { text: "Before the party starts", emoji: "⏰" }], correctIndex: 0 },
      { question: "Why do people give presents?", choices: [{ text: "To celebrate and show love", emoji: "🎁" }, { text: "Because they have to", emoji: "😐" }, { text: "To throw them away", emoji: "🗑️" }], correctIndex: 0 },
      { question: "How does the birthday child feel?", choices: [{ text: "Happy and excited", emoji: "🥳" }, { text: "Sad and bored", emoji: "😢" }], correctIndex: 0 },
    ],
  },
  {
    id: "store", title: "At the Store", image: sceneStore, emoji: "🛒",
    questions: [
      { question: "Who is pushing the cart?", choices: [{ text: "Mom", emoji: "👩" }, { text: "The boy", emoji: "👦" }], correctIndex: 0 },
      { question: "What is the boy picking?", choices: [{ text: "Fruit", emoji: "🍎" }, { text: "Candy", emoji: "🍬" }, { text: "Bread", emoji: "🍞" }], correctIndex: 0 },
      { question: "Where is the cashier?", choices: [{ text: "At the register", emoji: "💰" }, { text: "In the aisle", emoji: "🛒" }], correctIndex: 0 },
      { question: "What is on the shelves?", choices: [{ text: "Food", emoji: "🥫" }, { text: "Toys", emoji: "🧸" }], correctIndex: 0 },
      { question: "Why do we pay for things?", choices: [{ text: "Because they cost money", emoji: "💵" }, { text: "Because it's fun", emoji: "😄" }], correctIndex: 0 },
      { question: "When do stores close?", choices: [{ text: "At night", emoji: "🌙" }, { text: "Never", emoji: "♾️" }], correctIndex: 0 },
      { question: "Why does Mom make a shopping list?", choices: [{ text: "To remember what to buy", emoji: "📝" }, { text: "To draw pictures", emoji: "🎨" }, { text: "To play a game", emoji: "🎮" }], correctIndex: 0 },
      { question: "What happens if you drop a glass jar?", choices: [{ text: "It breaks", emoji: "💔" }, { text: "It bounces", emoji: "⬆️" }], correctIndex: 0 },
    ],
  },
  {
    id: "playground", title: "At the Playground", image: scenePlayground, emoji: "🛝",
    questions: [
      { question: "Who is on the slide?", choices: [{ text: "A boy", emoji: "👦" }, { text: "A girl", emoji: "👧" }], correctIndex: 0 },
      { question: "What are the kids playing on?", choices: [{ text: "Slide and seesaw", emoji: "🛝" }, { text: "Swings", emoji: "🎠" }], correctIndex: 0 },
      { question: "Where is the sandbox?", choices: [{ text: "Near the seesaw", emoji: "🏖️" }, { text: "Under the tree", emoji: "🌳" }], correctIndex: 0 },
      { question: "How many kids are playing?", choices: [{ text: "Four", emoji: "4️⃣" }, { text: "Two", emoji: "2️⃣" }, { text: "Six", emoji: "6️⃣" }], correctIndex: 0 },
      { question: "Why should you take turns on the slide?", choices: [{ text: "So everyone gets a turn", emoji: "🤝" }, { text: "Because it's boring", emoji: "😐" }], correctIndex: 0 },
      { question: "When is it too dark to play outside?", choices: [{ text: "At nighttime", emoji: "🌙" }, { text: "At noon", emoji: "☀️" }], correctIndex: 0 },
      { question: "Why do kids play together?", choices: [{ text: "Because it's more fun", emoji: "😄" }, { text: "Because they have to", emoji: "😐" }, { text: "To fight", emoji: "👊" }], correctIndex: 0 },
      { question: "What should you do if someone falls down?", choices: [{ text: "Help them up", emoji: "🤝" }, { text: "Laugh at them", emoji: "😂" }], correctIndex: 0 },
    ],
  },
  {
    id: "doctor", title: "At the Doctor", image: sceneDoctor, emoji: "🏥",
    questions: [
      { question: "Who is checking the boy?", choices: [{ text: "The doctor", emoji: "👩‍⚕️" }, { text: "The teacher", emoji: "👩‍🏫" }], correctIndex: 0 },
      { question: "What is the doctor using?", choices: [{ text: "A stethoscope", emoji: "🩺" }, { text: "A hammer", emoji: "🔨" }], correctIndex: 0 },
      { question: "Who is holding a clipboard?", choices: [{ text: "The nurse", emoji: "👩‍⚕️" }, { text: "The boy", emoji: "👦" }, { text: "The mom", emoji: "👩" }], correctIndex: 0 },
      { question: "Where are they?", choices: [{ text: "At the doctor's office", emoji: "🏥" }, { text: "At school", emoji: "🏫" }], correctIndex: 0 },
      { question: "Why do we go to the doctor?", choices: [{ text: "To stay healthy", emoji: "💪" }, { text: "To play games", emoji: "🎮" }], correctIndex: 0 },
      { question: "When should you see a doctor?", choices: [{ text: "When you feel sick", emoji: "🤒" }, { text: "When you're hungry", emoji: "🍔" }], correctIndex: 0 },
      { question: "Why does the doctor listen to your heart?", choices: [{ text: "To check if it's healthy", emoji: "❤️" }, { text: "To hear music", emoji: "🎵" }, { text: "To talk to it", emoji: "💬" }], correctIndex: 0 },
      { question: "What should you do if you have a fever?", choices: [{ text: "Rest and drink water", emoji: "💧" }, { text: "Go run outside", emoji: "🏃" }], correctIndex: 0 },
    ],
  },
  {
    id: "rainy", title: "Rainy Day", image: sceneRainy, emoji: "🌧️",
    questions: [
      { question: "What is the girl holding?", choices: [{ text: "An umbrella", emoji: "☂️" }, { text: "A bag", emoji: "👜" }], correctIndex: 0 },
      { question: "What is the boy wearing?", choices: [{ text: "A raincoat", emoji: "🧥" }, { text: "A swimsuit", emoji: "👙" }], correctIndex: 0 },
      { question: "What is in the sky?", choices: [{ text: "A rainbow", emoji: "🌈" }, { text: "Stars", emoji: "⭐" }, { text: "A plane", emoji: "✈️" }], correctIndex: 0 },
      { question: "Where is the frog?", choices: [{ text: "On a leaf", emoji: "🍃" }, { text: "In the puddle", emoji: "💧" }], correctIndex: 0 },
      { question: "Why do we use an umbrella?", choices: [{ text: "To stay dry", emoji: "☂️" }, { text: "To fly", emoji: "✈️" }], correctIndex: 0 },
      { question: "When do you see a rainbow?", choices: [{ text: "After the rain", emoji: "🌈" }, { text: "At night", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why are there puddles on the ground?", choices: [{ text: "Because it rained", emoji: "🌧️" }, { text: "Because someone spilled milk", emoji: "🥛" }, { text: "Because it snowed", emoji: "❄️" }], correctIndex: 0 },
      { question: "What should you wear on your feet when it rains?", choices: [{ text: "Rain boots", emoji: "🥾" }, { text: "Sandals", emoji: "🩴" }], correctIndex: 0 },
    ],
  },
  {
    id: "library", title: "At the Library", image: sceneLibrary, emoji: "📚",
    questions: [
      { question: "What are the children doing?", choices: [{ text: "Reading books", emoji: "📖" }, { text: "Playing games", emoji: "🎮" }], correctIndex: 0 },
      { question: "Where are the books?", choices: [{ text: "On the shelves", emoji: "📚" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0 },
      { question: "How many children are reading?", choices: [{ text: "Many", emoji: "👨‍👩‍👧‍👦" }, { text: "One", emoji: "1️⃣" }, { text: "None", emoji: "0️⃣" }], correctIndex: 0 },
      { question: "Where are they sitting?", choices: [{ text: "At a table and on the floor", emoji: "🪑" }, { text: "Outside", emoji: "🌳" }], correctIndex: 0 },
      { question: "Why should you be quiet in the library?", choices: [{ text: "So others can read", emoji: "🤫" }, { text: "Because it's scary", emoji: "😱" }], correctIndex: 0 },
      { question: "When do you return library books?", choices: [{ text: "When they are due", emoji: "📅" }, { text: "Never", emoji: "♾️" }], correctIndex: 0 },
      { question: "Why do people go to the library?", choices: [{ text: "To borrow and read books", emoji: "📖" }, { text: "To sleep", emoji: "😴" }, { text: "To eat lunch", emoji: "🍽️" }], correctIndex: 0 },
      { question: "What happens if you lose a library book?", choices: [{ text: "You have to pay for it", emoji: "💵" }, { text: "Nothing happens", emoji: "😊" }], correctIndex: 0 },
    ],
  },
  {
    id: "garden", title: "In the Garden", image: sceneGarden, emoji: "🌻",
    questions: [
      { question: "Who is watering the flowers?", choices: [{ text: "Grandma", emoji: "👵" }, { text: "The boy", emoji: "👦" }], correctIndex: 0 },
      { question: "What is the boy doing?", choices: [{ text: "Digging", emoji: "⛏️" }, { text: "Running", emoji: "🏃" }, { text: "Reading", emoji: "📖" }], correctIndex: 0 },
      { question: "What is flying around?", choices: [{ text: "Butterflies", emoji: "🦋" }, { text: "Airplanes", emoji: "✈️" }], correctIndex: 0 },
      { question: "What flowers are growing?", choices: [{ text: "Sunflowers", emoji: "🌻" }, { text: "Roses", emoji: "🌹" }], correctIndex: 0 },
      { question: "Why do flowers need water?", choices: [{ text: "To grow big and strong", emoji: "🌱" }, { text: "To go swimming", emoji: "🏊" }], correctIndex: 0 },
      { question: "When do flowers bloom?", choices: [{ text: "In spring and summer", emoji: "🌸" }, { text: "In winter", emoji: "❄️" }], correctIndex: 0 },
      { question: "Why do bees visit flowers?", choices: [{ text: "To collect nectar", emoji: "🐝" }, { text: "To sleep on them", emoji: "😴" }, { text: "To eat the leaves", emoji: "🍃" }], correctIndex: 0 },
      { question: "What do plants need to grow?", choices: [{ text: "Sun and water", emoji: "☀️" }, { text: "Toys and games", emoji: "🧸" }], correctIndex: 0 },
    ],
  },
  {
    id: "bath", title: "Bath Time", image: sceneBath, emoji: "🛁",
    questions: [
      { question: "Where is the boy?", choices: [{ text: "In the bathtub", emoji: "🛁" }, { text: "In bed", emoji: "🛏️" }], correctIndex: 0 },
      { question: "What is the boy playing with?", choices: [{ text: "Rubber ducks", emoji: "🦆" }, { text: "Cars", emoji: "🚗" }], correctIndex: 0 },
      { question: "What is floating?", choices: [{ text: "Bubbles", emoji: "🫧" }, { text: "Boats", emoji: "⛵" }, { text: "Fish", emoji: "🐟" }], correctIndex: 0 },
      { question: "Where is the towel?", choices: [{ text: "Hanging up", emoji: "🧣" }, { text: "In the water", emoji: "💧" }], correctIndex: 0 },
      { question: "Why do we take a bath?", choices: [{ text: "To get clean", emoji: "🧼" }, { text: "To get dirty", emoji: "💩" }], correctIndex: 0 },
      { question: "When do you take a bath?", choices: [{ text: "Before bedtime", emoji: "🌙" }, { text: "During school", emoji: "🏫" }], correctIndex: 0 },
      { question: "Why do we use soap?", choices: [{ text: "To wash away germs", emoji: "🧴" }, { text: "To eat it", emoji: "🍽️" }, { text: "To paint with it", emoji: "🎨" }], correctIndex: 0 },
      { question: "What happens if water is too hot?", choices: [{ text: "It can burn you", emoji: "🔥" }, { text: "It turns to ice", emoji: "🧊" }], correctIndex: 0 },
    ],
  },
  {
    id: "firestation", title: "Fire Station", image: sceneFirestation, emoji: "🚒",
    questions: [
      { question: "Who works here?", choices: [{ text: "Firefighter", emoji: "👨‍🚒" }, { text: "Teacher", emoji: "👩‍🏫" }], correctIndex: 0 },
      { question: "What color is the fire truck?", choices: [{ text: "Red", emoji: "🔴" }, { text: "Blue", emoji: "🔵" }, { text: "Green", emoji: "🟢" }], correctIndex: 0 },
      { question: "What animal is there?", choices: [{ text: "A dalmatian dog", emoji: "🐕" }, { text: "A cat", emoji: "🐱" }], correctIndex: 0 },
      { question: "What is on the ground?", choices: [{ text: "A fire hose", emoji: "🔥" }, { text: "A ball", emoji: "⚽" }], correctIndex: 0 },
      { question: "Why do firefighters wear helmets?", choices: [{ text: "To protect their heads", emoji: "⛑️" }, { text: "To look cool", emoji: "😎" }], correctIndex: 0 },
      { question: "When should you call 911?", choices: [{ text: "In an emergency", emoji: "🚨" }, { text: "When you're bored", emoji: "😐" }], correctIndex: 0 },
      { question: "Why is the fire truck red?", choices: [{ text: "So people can see it easily", emoji: "🔴" }, { text: "Because red is pretty", emoji: "🌹" }, { text: "Because it's hot", emoji: "🔥" }], correctIndex: 0 },
      { question: "What should you do if there's a fire?", choices: [{ text: "Get out and call for help", emoji: "🚨" }, { text: "Hide under the bed", emoji: "🛏️" }], correctIndex: 0 },
    ],
  },
  {
    id: "picnic", title: "Picnic Time", image: scenePicnic, emoji: "🧺",
    questions: [
      { question: "Where are the children sitting?", choices: [{ text: "On a blanket", emoji: "🧣" }, { text: "On chairs", emoji: "🪑" }], correctIndex: 0 },
      { question: "What are they eating?", choices: [{ text: "Sandwiches", emoji: "🥪" }, { text: "Pizza", emoji: "🍕" }, { text: "Ice cream", emoji: "🍦" }], correctIndex: 0 },
      { question: "What is on the grass?", choices: [{ text: "A ball", emoji: "⚽" }, { text: "A book", emoji: "📖" }], correctIndex: 0 },
      { question: "What insects are near the food?", choices: [{ text: "Ants", emoji: "🐜" }, { text: "Bees", emoji: "🐝" }], correctIndex: 0 },
      { question: "Why do we eat outside during a picnic?", choices: [{ text: "To enjoy the nice weather", emoji: "☀️" }, { text: "Because the kitchen is broken", emoji: "🔧" }], correctIndex: 0 },
      { question: "When is a good time for a picnic?", choices: [{ text: "On a sunny day", emoji: "☀️" }, { text: "During a thunderstorm", emoji: "⛈️" }], correctIndex: 0 },
      { question: "Why do ants come to the picnic?", choices: [{ text: "They smell the food", emoji: "🐜" }, { text: "They want to play", emoji: "😄" }, { text: "They are lost", emoji: "🗺️" }], correctIndex: 0 },
      { question: "What should you do with trash after eating?", choices: [{ text: "Throw it in a trash can", emoji: "🗑️" }, { text: "Leave it on the ground", emoji: "⬇️" }], correctIndex: 0 },
    ],
  },
  {
    id: "petshop", title: "Pet Shop", image: scenePetshop, emoji: "🐾",
    questions: [
      { question: "What animals are in cages?", choices: [{ text: "Puppies and kittens", emoji: "🐕" }, { text: "Lions", emoji: "🦁" }], correctIndex: 0 },
      { question: "Where are the fish?", choices: [{ text: "In a tank", emoji: "🐟" }, { text: "On the shelf", emoji: "📚" }], correctIndex: 0 },
      { question: "What bird is there?", choices: [{ text: "A parrot", emoji: "🦜" }, { text: "An eagle", emoji: "🦅" }, { text: "A penguin", emoji: "🐧" }], correctIndex: 0 },
      { question: "Who works at the shop?", choices: [{ text: "The shopkeeper", emoji: "🧑‍💼" }, { text: "A doctor", emoji: "👨‍⚕️" }], correctIndex: 0 },
      { question: "Why do pets need food and water?", choices: [{ text: "To stay alive and healthy", emoji: "💪" }, { text: "To play games", emoji: "🎮" }], correctIndex: 0 },
      { question: "When should you walk your dog?", choices: [{ text: "Every day", emoji: "🐕" }, { text: "Once a year", emoji: "📅" }], correctIndex: 0 },
      { question: "Why do fish live in water?", choices: [{ text: "They breathe with gills", emoji: "🐟" }, { text: "They like swimming pools", emoji: "🏊" }, { text: "They are thirsty", emoji: "💧" }], correctIndex: 0 },
      { question: "What do you need before getting a pet?", choices: [{ text: "Food, a home, and love", emoji: "❤️" }, { text: "A spaceship", emoji: "🚀" }], correctIndex: 0 },
    ],
  },
  {
    id: "snow", title: "Snow Day", image: sceneSnow, emoji: "⛄",
    questions: [
      { question: "What are the children building?", choices: [{ text: "A snowman", emoji: "⛄" }, { text: "A sandcastle", emoji: "🏰" }], correctIndex: 0 },
      { question: "What is falling from the sky?", choices: [{ text: "Snowflakes", emoji: "❄️" }, { text: "Rain", emoji: "🌧️" }, { text: "Leaves", emoji: "🍂" }], correctIndex: 0 },
      { question: "What is the boy doing?", choices: [{ text: "Sledding", emoji: "🛷" }, { text: "Swimming", emoji: "🏊" }], correctIndex: 0 },
      { question: "What are the kids wearing?", choices: [{ text: "Warm coats and hats", emoji: "🧥" }, { text: "Swimsuits", emoji: "👙" }], correctIndex: 0 },
      { question: "Why do we wear warm clothes in the snow?", choices: [{ text: "To stay warm", emoji: "🧣" }, { text: "To look funny", emoji: "🤡" }], correctIndex: 0 },
      { question: "When does it snow?", choices: [{ text: "In winter", emoji: "❄️" }, { text: "In summer", emoji: "☀️" }], correctIndex: 0 },
      { question: "Why does the snowman melt?", choices: [{ text: "Because the sun warms it up", emoji: "☀️" }, { text: "Because it's hungry", emoji: "🍔" }, { text: "Because it's tired", emoji: "😴" }], correctIndex: 0 },
      { question: "What happens to water when it gets very cold?", choices: [{ text: "It turns to ice", emoji: "🧊" }, { text: "It disappears", emoji: "💨" }], correctIndex: 0 },
    ],
  },
  {
    id: "busstop", title: "Bus Stop", image: sceneBusstop, emoji: "🚌",
    questions: [
      { question: "What are the children waiting for?", choices: [{ text: "The school bus", emoji: "🚌" }, { text: "A taxi", emoji: "🚕" }], correctIndex: 0 },
      { question: "Who is waving goodbye?", choices: [{ text: "The mom", emoji: "👩" }, { text: "The teacher", emoji: "👩‍🏫" }, { text: "The dog", emoji: "🐕" }], correctIndex: 0 },
      { question: "What are the kids carrying?", choices: [{ text: "Backpacks", emoji: "🎒" }, { text: "Balloons", emoji: "🎈" }], correctIndex: 0 },
      { question: "What animal is watching?", choices: [{ text: "A dog", emoji: "🐕" }, { text: "A cat", emoji: "🐱" }], correctIndex: 0 },
      { question: "Why do children take the bus to school?", choices: [{ text: "Because school is far away", emoji: "🏫" }, { text: "Because they like buses", emoji: "🚌" }], correctIndex: 0 },
      { question: "When does the school bus come?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0 },
      { question: "Why should you wait in line at the bus stop?", choices: [{ text: "To be safe and fair", emoji: "🤝" }, { text: "To play a game", emoji: "🎮" }, { text: "To run around", emoji: "🏃" }], correctIndex: 0 },
      { question: "What should you do when the bus arrives?", choices: [{ text: "Wait for it to stop, then get on", emoji: "✋" }, { text: "Run in front of it", emoji: "🏃" }], correctIndex: 0 },
    ],
  },
];

export function getSceneProgress(): Record<string, Record<number, boolean>> {
  try {
    const saved = localStorage.getItem("wh-scene-progress");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function saveSceneAnswer(sceneId: string, questionIndex: number) {
  const progress = getSceneProgress();
  if (!progress[sceneId]) progress[sceneId] = {};
  progress[sceneId][questionIndex] = true;
  localStorage.setItem("wh-scene-progress", JSON.stringify(progress));
}

export function getSceneCompletionCount(sceneId: string): number {
  const progress = getSceneProgress();
  return progress[sceneId] ? Object.keys(progress[sceneId]).length : 0;
}
