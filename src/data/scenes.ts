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
  /** Full sentence model spoken after correct answer */
  correctFeedback: string;
}

/** Object tag describing an element's location in the scene */
export interface SceneObjectTag {
  object: string;
  location: string;
}

export interface Scene {
  id: string;
  title: string;
  image: string;
  emoji: string;
  /** Tagged objects in the scene for spatial accuracy */
  objectTags?: SceneObjectTag[];
  questions: SceneQuestion[];
}

export const scenes: Scene[] = [
  {
    id: "park", title: "At the Park", image: scenePark, emoji: "🌳",
    objectTags: [
      { object: "boy", location: "on the swing" },
      { object: "girl", location: "sitting on bench" },
      { object: "dog", location: "on the grass" },
      { object: "bird", location: "flying in the sky" },
      { object: "kite", location: "in the sky" },
      { object: "tree", location: "behind the bench" },
    ],
    questions: [
      { question: "Who is on the swing?", choices: [{ text: "The boy", emoji: "👦" }, { text: "The girl", emoji: "👧" }], correctIndex: 0, correctFeedback: "Yes! The boy is on the swing!" },
      { question: "What is the girl eating?", choices: [{ text: "An apple", emoji: "🍎" }, { text: "A cookie", emoji: "🍪" }], correctIndex: 0, correctFeedback: "That's right! The girl is eating an apple!" },
      { question: "Where is the dog?", choices: [{ text: "On the bench", emoji: "🪑" }, { text: "On the grass", emoji: "🌿" }], correctIndex: 1, correctFeedback: "Yes! The dog is on the grass!" },
      { question: "What is flying in the sky?", choices: [{ text: "A bird", emoji: "🐦" }, { text: "A plane", emoji: "✈️" }, { text: "A kite", emoji: "🪁" }], correctIndex: 0, correctFeedback: "That's right! A bird is flying in the sky!" },
      { question: "Why is the boy happy?", choices: [{ text: "He is playing", emoji: "😄" }, { text: "He is sleeping", emoji: "😴" }], correctIndex: 0, correctFeedback: "Yes! The boy is happy because he is playing!" },
      { question: "When do people go to the park?", choices: [{ text: "During the day", emoji: "☀️" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! People go to the park during the day!" },
      { question: "Why does the dog run on the grass?", choices: [{ text: "To play and have fun", emoji: "🐕" }, { text: "To go to sleep", emoji: "😴" }, { text: "To read a book", emoji: "📖" }], correctIndex: 0, correctFeedback: "Yes! The dog runs on the grass to play and have fun!" },
      { question: "What would happen if it started raining?", choices: [{ text: "People would go home", emoji: "🏠" }, { text: "People would swim", emoji: "🏊" }], correctIndex: 0, correctFeedback: "That's right! If it started raining, people would go home!" },
    ],
  },
  {
    id: "kitchen", title: "In the Kitchen", image: sceneKitchen, emoji: "🍳",
    objectTags: [
      { object: "mom", location: "at the stove" },
      { object: "boy", location: "at the table" },
      { object: "cat", location: "under the table" },
      { object: "cookies", location: "on the plate" },
      { object: "milk glass", location: "on the table" },
    ],
    questions: [
      { question: "Who is cooking?", choices: [{ text: "Mom", emoji: "👩" }, { text: "The boy", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! Mom is cooking!" },
      { question: "What is the boy drinking?", choices: [{ text: "Juice", emoji: "🧃" }, { text: "Milk", emoji: "🥛" }], correctIndex: 1, correctFeedback: "That's right! The boy is drinking milk!" },
      { question: "Where is the cat?", choices: [{ text: "On the table", emoji: "🪑" }, { text: "Under the table", emoji: "⬇️" }], correctIndex: 1, correctFeedback: "Yes! The cat is under the table!" },
      { question: "What is on the plate?", choices: [{ text: "Cookies", emoji: "🍪" }, { text: "Cake", emoji: "🎂" }, { text: "Pizza", emoji: "🍕" }], correctIndex: 0, correctFeedback: "That's right! Cookies are on the plate!" },
      { question: "Why is Mom cooking?", choices: [{ text: "To make dinner", emoji: "🍽️" }, { text: "To play a game", emoji: "🎮" }], correctIndex: 0, correctFeedback: "Yes! Mom is cooking to make dinner!" },
      { question: "When do we eat breakfast?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At night", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! We eat breakfast in the morning!" },
      { question: "Why should we wash our hands before eating?", choices: [{ text: "To get rid of germs", emoji: "🧼" }, { text: "To make them wet", emoji: "💧" }, { text: "To play with water", emoji: "🌊" }], correctIndex: 0, correctFeedback: "Yes! We wash our hands before eating to get rid of germs!" },
      { question: "What happens if you touch a hot stove?", choices: [{ text: "You get burned", emoji: "🔥" }, { text: "You get cold", emoji: "❄️" }], correctIndex: 0, correctFeedback: "That's right! If you touch a hot stove, you can get burned!" },
    ],
  },
  {
    id: "classroom", title: "At School", image: sceneClassroom, emoji: "🏫",
    objectTags: [
      { object: "teacher", location: "at the board" },
      { object: "children", location: "at their desks" },
      { object: "clock", location: "on the wall" },
      { object: "books", location: "on the shelf" },
    ],
    questions: [
      { question: "Who is writing on the board?", choices: [{ text: "The teacher", emoji: "👩‍🏫" }, { text: "A student", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! The teacher is writing on the board!" },
      { question: "Where are the children?", choices: [{ text: "At their desks", emoji: "📚" }, { text: "Outside", emoji: "🌳" }], correctIndex: 0, correctFeedback: "That's right! The children are at their desks!" },
      { question: "What is on the wall?", choices: [{ text: "A clock", emoji: "🕐" }, { text: "A TV", emoji: "📺" }, { text: "A mirror", emoji: "🪞" }], correctIndex: 0, correctFeedback: "Yes! A clock is on the wall!" },
      { question: "Where are the books?", choices: [{ text: "On the shelf", emoji: "📚" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0, correctFeedback: "That's right! The books are on the shelf!" },
      { question: "Why do children go to school?", choices: [{ text: "To learn new things", emoji: "📖" }, { text: "To sleep", emoji: "😴" }], correctIndex: 0, correctFeedback: "Yes! Children go to school to learn new things!" },
      { question: "When is recess?", choices: [{ text: "After class", emoji: "⏰" }, { text: "During sleep", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! Recess is after class!" },
      { question: "Why should you raise your hand?", choices: [{ text: "To ask a question", emoji: "✋" }, { text: "To wave goodbye", emoji: "👋" }, { text: "To stretch", emoji: "🤸" }], correctIndex: 0, correctFeedback: "Yes! You raise your hand to ask a question!" },
      { question: "What happens when the bell rings?", choices: [{ text: "Class is over", emoji: "🔔" }, { text: "It starts raining", emoji: "🌧️" }], correctIndex: 0, correctFeedback: "That's right! When the bell rings, class is over!" },
    ],
  },
  {
    id: "bedroom", title: "Bedtime", image: sceneBedroom, emoji: "🛏️",
    objectTags: [
      { object: "child", location: "in bed" },
      { object: "moon", location: "in the window" },
      { object: "teddy bear", location: "on the bed" },
      { object: "lamp", location: "on the nightstand" },
    ],
    questions: [
      { question: "Who is sleeping?", choices: [{ text: "The child", emoji: "👦" }, { text: "The cat", emoji: "🐱" }], correctIndex: 0, correctFeedback: "Yes! The child is sleeping!" },
      { question: "What is on the window?", choices: [{ text: "The sun", emoji: "☀️" }, { text: "The moon", emoji: "🌙" }], correctIndex: 1, correctFeedback: "That's right! The moon is in the window!" },
      { question: "Where is the teddy bear?", choices: [{ text: "On the bed", emoji: "🛏️" }, { text: "On the chair", emoji: "🪑" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0, correctFeedback: "Yes! The teddy bear is on the bed!" },
      { question: "What is on the nightstand?", choices: [{ text: "A lamp", emoji: "💡" }, { text: "A toy", emoji: "🧸" }], correctIndex: 0, correctFeedback: "That's right! A lamp is on the nightstand!" },
      { question: "Why is the room dark?", choices: [{ text: "Because it is nighttime", emoji: "🌙" }, { text: "Because it is lunchtime", emoji: "🍽️" }], correctIndex: 0, correctFeedback: "Yes! The room is dark because it is nighttime!" },
      { question: "When do you go to sleep?", choices: [{ text: "At night", emoji: "🌙" }, { text: "In the morning", emoji: "🌅" }], correctIndex: 0, correctFeedback: "That's right! You go to sleep at night!" },
      { question: "Why does the child hug the teddy bear?", choices: [{ text: "To feel safe and cozy", emoji: "🧸" }, { text: "To eat it", emoji: "🍽️" }, { text: "To throw it", emoji: "🏐" }], correctIndex: 0, correctFeedback: "Yes! The child hugs the teddy bear to feel safe and cozy!" },
      { question: "What should you do before going to bed?", choices: [{ text: "Brush your teeth", emoji: "🪥" }, { text: "Play outside", emoji: "🌳" }], correctIndex: 0, correctFeedback: "That's right! You should brush your teeth before going to bed!" },
    ],
  },
  {
    id: "beach", title: "At the Beach", image: sceneBeach, emoji: "🏖️",
    objectTags: [
      { object: "kids", location: "on the sand" },
      { object: "sandcastle", location: "on the sand" },
      { object: "boy", location: "in the water" },
      { object: "seagull", location: "flying in the sky" },
      { object: "umbrella", location: "on the sand" },
    ],
    questions: [
      { question: "What are the kids building?", choices: [{ text: "A sandcastle", emoji: "🏰" }, { text: "A house", emoji: "🏠" }], correctIndex: 0, correctFeedback: "Yes! The kids are building a sandcastle!" },
      { question: "Who is swimming?", choices: [{ text: "A boy", emoji: "👦" }, { text: "A girl", emoji: "👧" }, { text: "A dog", emoji: "🐕" }], correctIndex: 0, correctFeedback: "That's right! A boy is swimming!" },
      { question: "What is flying in the sky?", choices: [{ text: "A seagull", emoji: "🐦" }, { text: "A plane", emoji: "✈️" }], correctIndex: 0, correctFeedback: "Yes! A seagull is flying in the sky!" },
      { question: "Where is the umbrella?", choices: [{ text: "On the sand", emoji: "🏖️" }, { text: "In the water", emoji: "🌊" }], correctIndex: 0, correctFeedback: "That's right! The umbrella is on the sand!" },
      { question: "Why do people put on sunscreen?", choices: [{ text: "To protect from the sun", emoji: "🧴" }, { text: "To get dirty", emoji: "💩" }], correctIndex: 0, correctFeedback: "Yes! People put on sunscreen to protect their skin from the sun!" },
      { question: "When do people go to the beach?", choices: [{ text: "In the summer", emoji: "☀️" }, { text: "In a snowstorm", emoji: "❄️" }], correctIndex: 0, correctFeedback: "That's right! People go to the beach in the summer!" },
      { question: "Why is the boy wearing goggles?", choices: [{ text: "To see underwater", emoji: "🥽" }, { text: "To read a book", emoji: "📖" }, { text: "To sleep", emoji: "😴" }], correctIndex: 0, correctFeedback: "Yes! The boy is wearing goggles to see underwater!" },
      { question: "What would happen if a big wave came?", choices: [{ text: "The sandcastle would fall", emoji: "🌊" }, { text: "The sand would fly", emoji: "✈️" }], correctIndex: 0, correctFeedback: "That's right! If a big wave came, the sandcastle would fall down!" },
    ],
  },
  {
    id: "farm", title: "On the Farm", image: sceneFarm, emoji: "🚜",
    objectTags: [
      { object: "farmer", location: "near the chickens" },
      { object: "pig", location: "in the mud" },
      { object: "barn", location: "in the background" },
      { object: "cow", location: "in the field" },
      { object: "chickens", location: "near the farmer" },
    ],
    questions: [
      { question: "Who is feeding the chickens?", choices: [{ text: "The farmer", emoji: "👨‍🌾" }, { text: "The boy", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! The farmer is feeding the chickens!" },
      { question: "Where is the pig?", choices: [{ text: "In the barn", emoji: "🏠" }, { text: "In the mud", emoji: "💩" }], correctIndex: 1, correctFeedback: "That's right! The pig is in the mud!" },
      { question: "What color is the barn?", choices: [{ text: "Red", emoji: "🔴" }, { text: "Blue", emoji: "🔵" }, { text: "Green", emoji: "🟢" }], correctIndex: 0, correctFeedback: "Yes! The barn is red!" },
      { question: "What animal says moo?", choices: [{ text: "The cow", emoji: "🐄" }, { text: "The chicken", emoji: "🐔" }], correctIndex: 0, correctFeedback: "That's right! The cow says moo!" },
      { question: "Why does the farmer water the crops?", choices: [{ text: "So they can grow", emoji: "🌱" }, { text: "To make mud", emoji: "💩" }], correctIndex: 0, correctFeedback: "Yes! The farmer waters the crops so they can grow!" },
      { question: "When do roosters crow?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! Roosters crow in the morning!" },
      { question: "Why do pigs roll in mud?", choices: [{ text: "To stay cool", emoji: "🐷" }, { text: "To take a bath", emoji: "🛁" }, { text: "To fly", emoji: "✈️" }], correctIndex: 0, correctFeedback: "Yes! Pigs roll in mud to stay cool!" },
      { question: "Where do eggs come from?", choices: [{ text: "From chickens", emoji: "🐔" }, { text: "From cows", emoji: "🐄" }], correctIndex: 0, correctFeedback: "That's right! Eggs come from chickens!" },
    ],
  },
  {
    id: "zoo", title: "At the Zoo", image: sceneZoo, emoji: "🦁",
    objectTags: [
      { object: "lion", location: "in the enclosure" },
      { object: "elephant", location: "spraying water" },
      { object: "monkey", location: "climbing" },
      { object: "boy", location: "holding balloons" },
    ],
    questions: [
      { question: "Where is the lion?", choices: [{ text: "In the enclosure", emoji: "🦁" }, { text: "On the tree", emoji: "🌳" }], correctIndex: 0, correctFeedback: "Yes! The lion is in the enclosure!" },
      { question: "What is the elephant doing?", choices: [{ text: "Spraying water", emoji: "💦" }, { text: "Sleeping", emoji: "😴" }], correctIndex: 0, correctFeedback: "That's right! The elephant is spraying water!" },
      { question: "Who is climbing?", choices: [{ text: "The monkey", emoji: "🐒" }, { text: "The lion", emoji: "🦁" }, { text: "The boy", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! The monkey is climbing!" },
      { question: "What is the boy holding?", choices: [{ text: "Balloons", emoji: "🎈" }, { text: "Ice cream", emoji: "🍦" }], correctIndex: 0, correctFeedback: "That's right! The boy is holding balloons!" },
      { question: "Why are the animals in enclosures?", choices: [{ text: "To keep them safe", emoji: "🔒" }, { text: "Because they like it", emoji: "😊" }], correctIndex: 0, correctFeedback: "Yes! The animals are in enclosures to keep them safe!" },
      { question: "When can you visit the zoo?", choices: [{ text: "During the day", emoji: "☀️" }, { text: "At 3 AM", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! You can visit the zoo during the day!" },
      { question: "Why does the elephant spray water?", choices: [{ text: "To cool down", emoji: "💦" }, { text: "To fly", emoji: "✈️" }, { text: "To paint", emoji: "🎨" }], correctIndex: 0, correctFeedback: "Yes! The elephant sprays water to cool down!" },
      { question: "What would happen if a monkey escaped?", choices: [{ text: "It would climb everywhere", emoji: "🐒" }, { text: "It would drive a car", emoji: "🚗" }], correctIndex: 0, correctFeedback: "That's right! If a monkey escaped, it would climb everywhere!" },
    ],
  },
  {
    id: "birthday", title: "Birthday Party", image: sceneBirthday, emoji: "🎂",
    objectTags: [
      { object: "cake", location: "on the table" },
      { object: "kids", location: "around the table" },
      { object: "party hats", location: "on the kids' heads" },
      { object: "presents", location: "next to the cake" },
      { object: "balloons", location: "in the air" },
    ],
    questions: [
      { question: "What is on the table?", choices: [{ text: "A cake", emoji: "🎂" }, { text: "A pizza", emoji: "🍕" }], correctIndex: 0, correctFeedback: "Yes! A cake is on the table!" },
      { question: "What are the kids wearing?", choices: [{ text: "Party hats", emoji: "🎉" }, { text: "Helmets", emoji: "⛑️" }], correctIndex: 0, correctFeedback: "That's right! The kids are wearing party hats!" },
      { question: "What is next to the cake?", choices: [{ text: "Presents", emoji: "🎁" }, { text: "Books", emoji: "📚" }, { text: "Toys", emoji: "🧸" }], correctIndex: 0, correctFeedback: "Yes! Presents are next to the cake!" },
      { question: "Where are the balloons?", choices: [{ text: "In the air", emoji: "🎈" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0, correctFeedback: "That's right! The balloons are in the air!" },
      { question: "Why are there candles on the cake?", choices: [{ text: "To make a birthday wish", emoji: "🕯️" }, { text: "To cook the cake", emoji: "🍳" }], correctIndex: 0, correctFeedback: "Yes! The candles are on the cake to make a birthday wish!" },
      { question: "When do you blow out the candles?", choices: [{ text: "After singing Happy Birthday", emoji: "🎵" }, { text: "Before the party starts", emoji: "⏰" }], correctIndex: 0, correctFeedback: "That's right! You blow out the candles after singing Happy Birthday!" },
      { question: "Why do people give presents?", choices: [{ text: "To celebrate and show love", emoji: "🎁" }, { text: "Because they have to", emoji: "😐" }, { text: "To throw them away", emoji: "🗑️" }], correctIndex: 0, correctFeedback: "Yes! People give presents to celebrate and show love!" },
      { question: "How does the birthday child feel?", choices: [{ text: "Happy and excited", emoji: "🥳" }, { text: "Sad and bored", emoji: "😢" }], correctIndex: 0, correctFeedback: "That's right! The birthday child feels happy and excited!" },
    ],
  },
  {
    id: "store", title: "At the Store", image: sceneStore, emoji: "🛒",
    objectTags: [
      { object: "mom", location: "pushing the cart" },
      { object: "boy", location: "picking fruit" },
      { object: "cashier", location: "at the register" },
      { object: "food", location: "on the shelves" },
    ],
    questions: [
      { question: "Who is pushing the cart?", choices: [{ text: "Mom", emoji: "👩" }, { text: "The boy", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! Mom is pushing the cart!" },
      { question: "What is the boy picking?", choices: [{ text: "Fruit", emoji: "🍎" }, { text: "Candy", emoji: "🍬" }, { text: "Bread", emoji: "🍞" }], correctIndex: 0, correctFeedback: "That's right! The boy is picking fruit!" },
      { question: "Where is the cashier?", choices: [{ text: "At the register", emoji: "💰" }, { text: "In the aisle", emoji: "🛒" }], correctIndex: 0, correctFeedback: "Yes! The cashier is at the register!" },
      { question: "What is on the shelves?", choices: [{ text: "Food", emoji: "🥫" }, { text: "Toys", emoji: "🧸" }], correctIndex: 0, correctFeedback: "That's right! Food is on the shelves!" },
      { question: "Why do we pay for things?", choices: [{ text: "Because they cost money", emoji: "💵" }, { text: "Because it's fun", emoji: "😄" }], correctIndex: 0, correctFeedback: "Yes! We pay for things because they cost money!" },
      { question: "When do stores close?", choices: [{ text: "At night", emoji: "🌙" }, { text: "Never", emoji: "♾️" }], correctIndex: 0, correctFeedback: "That's right! Stores close at night!" },
      { question: "Why does Mom make a shopping list?", choices: [{ text: "To remember what to buy", emoji: "📝" }, { text: "To draw pictures", emoji: "🎨" }, { text: "To play a game", emoji: "🎮" }], correctIndex: 0, correctFeedback: "Yes! Mom makes a shopping list to remember what to buy!" },
      { question: "What happens if you drop a glass jar?", choices: [{ text: "It breaks", emoji: "💔" }, { text: "It bounces", emoji: "⬆️" }], correctIndex: 0, correctFeedback: "That's right! If you drop a glass jar, it breaks!" },
    ],
  },
  {
    id: "playground", title: "At the Playground", image: scenePlayground, emoji: "🛝",
    objectTags: [
      { object: "boy", location: "on the slide" },
      { object: "kids", location: "on the seesaw" },
      { object: "sandbox", location: "near the seesaw" },
    ],
    questions: [
      { question: "Who is on the slide?", choices: [{ text: "A boy", emoji: "👦" }, { text: "A girl", emoji: "👧" }], correctIndex: 0, correctFeedback: "Yes! A boy is on the slide!" },
      { question: "What are the kids playing on?", choices: [{ text: "Slide and seesaw", emoji: "🛝" }, { text: "Swings", emoji: "🎠" }], correctIndex: 0, correctFeedback: "That's right! The kids are playing on the slide and seesaw!" },
      { question: "Where is the sandbox?", choices: [{ text: "Near the seesaw", emoji: "🏖️" }, { text: "Under the tree", emoji: "🌳" }], correctIndex: 0, correctFeedback: "Yes! The sandbox is near the seesaw!" },
      { question: "How many kids are playing?", choices: [{ text: "Four", emoji: "4️⃣" }, { text: "Two", emoji: "2️⃣" }, { text: "Six", emoji: "6️⃣" }], correctIndex: 0, correctFeedback: "That's right! Four kids are playing!" },
      { question: "Why should you take turns on the slide?", choices: [{ text: "So everyone gets a turn", emoji: "🤝" }, { text: "Because it's boring", emoji: "😐" }], correctIndex: 0, correctFeedback: "Yes! You should take turns so everyone gets a turn!" },
      { question: "When is it too dark to play outside?", choices: [{ text: "At nighttime", emoji: "🌙" }, { text: "At noon", emoji: "☀️" }], correctIndex: 0, correctFeedback: "That's right! It is too dark to play outside at nighttime!" },
      { question: "Why do kids play together?", choices: [{ text: "Because it's more fun", emoji: "😄" }, { text: "Because they have to", emoji: "😐" }, { text: "To fight", emoji: "👊" }], correctIndex: 0, correctFeedback: "Yes! Kids play together because it is more fun!" },
      { question: "What should you do if someone falls down?", choices: [{ text: "Help them up", emoji: "🤝" }, { text: "Laugh at them", emoji: "😂" }], correctIndex: 0, correctFeedback: "That's right! If someone falls down, you should help them up!" },
    ],
  },
  {
    id: "doctor", title: "At the Doctor", image: sceneDoctor, emoji: "🏥",
    objectTags: [
      { object: "doctor", location: "checking the boy" },
      { object: "stethoscope", location: "doctor is using it" },
      { object: "nurse", location: "holding clipboard" },
      { object: "boy", location: "sitting on exam table" },
    ],
    questions: [
      { question: "Who is checking the boy?", choices: [{ text: "The doctor", emoji: "👩‍⚕️" }, { text: "The teacher", emoji: "👩‍🏫" }], correctIndex: 0, correctFeedback: "Yes! The doctor is checking the boy!" },
      { question: "What is the doctor using?", choices: [{ text: "A stethoscope", emoji: "🩺" }, { text: "A hammer", emoji: "🔨" }], correctIndex: 0, correctFeedback: "That's right! The doctor is using a stethoscope!" },
      { question: "Who is holding a clipboard?", choices: [{ text: "The nurse", emoji: "👩‍⚕️" }, { text: "The boy", emoji: "👦" }, { text: "The mom", emoji: "👩" }], correctIndex: 0, correctFeedback: "Yes! The nurse is holding a clipboard!" },
      { question: "Where are they?", choices: [{ text: "At the doctor's office", emoji: "🏥" }, { text: "At school", emoji: "🏫" }], correctIndex: 0, correctFeedback: "That's right! They are at the doctor's office!" },
      { question: "Why do we go to the doctor?", choices: [{ text: "To stay healthy", emoji: "💪" }, { text: "To play games", emoji: "🎮" }], correctIndex: 0, correctFeedback: "Yes! We go to the doctor to stay healthy!" },
      { question: "When should you see a doctor?", choices: [{ text: "When you feel sick", emoji: "🤒" }, { text: "When you're hungry", emoji: "🍔" }], correctIndex: 0, correctFeedback: "That's right! You should see a doctor when you feel sick!" },
      { question: "Why does the doctor listen to your heart?", choices: [{ text: "To check if it's healthy", emoji: "❤️" }, { text: "To hear music", emoji: "🎵" }, { text: "To talk to it", emoji: "💬" }], correctIndex: 0, correctFeedback: "Yes! The doctor listens to your heart to check if it is healthy!" },
      { question: "What should you do if you have a fever?", choices: [{ text: "Rest and drink water", emoji: "💧" }, { text: "Go run outside", emoji: "🏃" }], correctIndex: 0, correctFeedback: "That's right! If you have a fever, you should rest and drink water!" },
    ],
  },
  {
    id: "rainy", title: "Rainy Day", image: sceneRainy, emoji: "🌧️",
    objectTags: [
      { object: "girl", location: "holding umbrella" },
      { object: "boy", location: "wearing raincoat" },
      { object: "rainbow", location: "in the sky" },
      { object: "frog", location: "on a leaf" },
      { object: "puddles", location: "on the ground" },
    ],
    questions: [
      { question: "What is the girl holding?", choices: [{ text: "An umbrella", emoji: "☂️" }, { text: "A bag", emoji: "👜" }], correctIndex: 0, correctFeedback: "Yes! The girl is holding an umbrella!" },
      { question: "What is the boy wearing?", choices: [{ text: "A raincoat", emoji: "🧥" }, { text: "A swimsuit", emoji: "👙" }], correctIndex: 0, correctFeedback: "That's right! The boy is wearing a raincoat!" },
      { question: "What is in the sky?", choices: [{ text: "A rainbow", emoji: "🌈" }, { text: "Stars", emoji: "⭐" }, { text: "A plane", emoji: "✈️" }], correctIndex: 0, correctFeedback: "Yes! A rainbow is in the sky!" },
      { question: "Where is the frog?", choices: [{ text: "On a leaf", emoji: "🍃" }, { text: "In the puddle", emoji: "💧" }], correctIndex: 0, correctFeedback: "That's right! The frog is on a leaf!" },
      { question: "Why do we use an umbrella?", choices: [{ text: "To stay dry", emoji: "☂️" }, { text: "To fly", emoji: "✈️" }], correctIndex: 0, correctFeedback: "Yes! We use an umbrella to stay dry!" },
      { question: "When do you see a rainbow?", choices: [{ text: "After the rain", emoji: "🌈" }, { text: "At night", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! You see a rainbow after the rain!" },
      { question: "Why are there puddles on the ground?", choices: [{ text: "Because it rained", emoji: "🌧️" }, { text: "Because someone spilled milk", emoji: "🥛" }, { text: "Because it snowed", emoji: "❄️" }], correctIndex: 0, correctFeedback: "Yes! There are puddles on the ground because it rained!" },
      { question: "What should you wear on your feet when it rains?", choices: [{ text: "Rain boots", emoji: "🥾" }, { text: "Sandals", emoji: "🩴" }], correctIndex: 0, correctFeedback: "That's right! You should wear rain boots when it rains!" },
    ],
  },
  {
    id: "library", title: "At the Library", image: sceneLibrary, emoji: "📚",
    objectTags: [
      { object: "children", location: "reading at tables" },
      { object: "books", location: "on the shelves" },
      { object: "librarian", location: "at the desk" },
    ],
    questions: [
      { question: "What are the children doing?", choices: [{ text: "Reading books", emoji: "📖" }, { text: "Playing games", emoji: "🎮" }], correctIndex: 0, correctFeedback: "Yes! The children are reading books!" },
      { question: "Where are the books?", choices: [{ text: "On the shelves", emoji: "📚" }, { text: "On the floor", emoji: "⬇️" }], correctIndex: 0, correctFeedback: "That's right! The books are on the shelves!" },
      { question: "How many children are reading?", choices: [{ text: "Many", emoji: "👨‍👩‍👧‍👦" }, { text: "One", emoji: "1️⃣" }, { text: "None", emoji: "0️⃣" }], correctIndex: 0, correctFeedback: "Yes! Many children are reading!" },
      { question: "Where are they sitting?", choices: [{ text: "At a table and on the floor", emoji: "🪑" }, { text: "Outside", emoji: "🌳" }], correctIndex: 0, correctFeedback: "That's right! They are sitting at a table and on the floor!" },
      { question: "Why should you be quiet in the library?", choices: [{ text: "So others can read", emoji: "🤫" }, { text: "Because it's scary", emoji: "😱" }], correctIndex: 0, correctFeedback: "Yes! You should be quiet in the library so others can read!" },
      { question: "When do you return library books?", choices: [{ text: "When they are due", emoji: "📅" }, { text: "Never", emoji: "♾️" }], correctIndex: 0, correctFeedback: "That's right! You return library books when they are due!" },
      { question: "Why do people go to the library?", choices: [{ text: "To borrow and read books", emoji: "📖" }, { text: "To sleep", emoji: "😴" }, { text: "To eat lunch", emoji: "🍽️" }], correctIndex: 0, correctFeedback: "Yes! People go to the library to borrow and read books!" },
      { question: "What happens if you lose a library book?", choices: [{ text: "You have to pay for it", emoji: "💵" }, { text: "Nothing happens", emoji: "😊" }], correctIndex: 0, correctFeedback: "That's right! If you lose a library book, you have to pay for it!" },
    ],
  },
  {
    id: "garden", title: "In the Garden", image: sceneGarden, emoji: "🌻",
    objectTags: [
      { object: "grandma", location: "watering flowers" },
      { object: "boy", location: "digging" },
      { object: "butterflies", location: "flying around" },
      { object: "sunflowers", location: "growing in garden" },
    ],
    questions: [
      { question: "Who is watering the flowers?", choices: [{ text: "Grandma", emoji: "👵" }, { text: "The boy", emoji: "👦" }], correctIndex: 0, correctFeedback: "Yes! Grandma is watering the flowers!" },
      { question: "What is the boy doing?", choices: [{ text: "Digging", emoji: "⛏️" }, { text: "Running", emoji: "🏃" }, { text: "Reading", emoji: "📖" }], correctIndex: 0, correctFeedback: "That's right! The boy is digging!" },
      { question: "What is flying around?", choices: [{ text: "Butterflies", emoji: "🦋" }, { text: "Airplanes", emoji: "✈️" }], correctIndex: 0, correctFeedback: "Yes! Butterflies are flying around!" },
      { question: "What flowers are growing?", choices: [{ text: "Sunflowers", emoji: "🌻" }, { text: "Roses", emoji: "🌹" }], correctIndex: 0, correctFeedback: "That's right! Sunflowers are growing in the garden!" },
      { question: "Why do flowers need water?", choices: [{ text: "To grow big and strong", emoji: "🌱" }, { text: "To go swimming", emoji: "🏊" }], correctIndex: 0, correctFeedback: "Yes! Flowers need water to grow big and strong!" },
      { question: "When do flowers bloom?", choices: [{ text: "In spring and summer", emoji: "🌸" }, { text: "In winter", emoji: "❄️" }], correctIndex: 0, correctFeedback: "That's right! Flowers bloom in spring and summer!" },
      { question: "Why do bees visit flowers?", choices: [{ text: "To collect nectar", emoji: "🐝" }, { text: "To sleep on them", emoji: "😴" }, { text: "To eat the leaves", emoji: "🍃" }], correctIndex: 0, correctFeedback: "Yes! Bees visit flowers to collect nectar!" },
      { question: "What do plants need to grow?", choices: [{ text: "Sun and water", emoji: "☀️" }, { text: "Toys and games", emoji: "🧸" }], correctIndex: 0, correctFeedback: "That's right! Plants need sun and water to grow!" },
    ],
  },
  {
    id: "bath", title: "Bath Time", image: sceneBath, emoji: "🛁",
    objectTags: [
      { object: "boy", location: "in the bathtub" },
      { object: "rubber ducks", location: "in the water" },
      { object: "bubbles", location: "floating in air" },
      { object: "towel", location: "hanging on rack" },
    ],
    questions: [
      { question: "Where is the boy?", choices: [{ text: "In the bathtub", emoji: "🛁" }, { text: "In bed", emoji: "🛏️" }], correctIndex: 0, correctFeedback: "Yes! The boy is in the bathtub!" },
      { question: "What is the boy playing with?", choices: [{ text: "Rubber ducks", emoji: "🦆" }, { text: "Cars", emoji: "🚗" }], correctIndex: 0, correctFeedback: "That's right! The boy is playing with rubber ducks!" },
      { question: "What is floating?", choices: [{ text: "Bubbles", emoji: "🫧" }, { text: "Boats", emoji: "⛵" }, { text: "Fish", emoji: "🐟" }], correctIndex: 0, correctFeedback: "Yes! Bubbles are floating!" },
      { question: "Where is the towel?", choices: [{ text: "Hanging up", emoji: "🧣" }, { text: "In the water", emoji: "💧" }], correctIndex: 0, correctFeedback: "That's right! The towel is hanging up!" },
      { question: "Why do we take a bath?", choices: [{ text: "To get clean", emoji: "🧼" }, { text: "To get dirty", emoji: "💩" }], correctIndex: 0, correctFeedback: "Yes! We take a bath to get clean!" },
      { question: "When do you take a bath?", choices: [{ text: "Before bedtime", emoji: "🌙" }, { text: "During school", emoji: "🏫" }], correctIndex: 0, correctFeedback: "That's right! You take a bath before bedtime!" },
      { question: "Why do we use soap?", choices: [{ text: "To wash away germs", emoji: "🧴" }, { text: "To eat it", emoji: "🍽️" }, { text: "To paint with it", emoji: "🎨" }], correctIndex: 0, correctFeedback: "Yes! We use soap to wash away germs!" },
      { question: "What happens if water is too hot?", choices: [{ text: "It can burn you", emoji: "🔥" }, { text: "It turns to ice", emoji: "🧊" }], correctIndex: 0, correctFeedback: "That's right! If water is too hot, it can burn you!" },
    ],
  },
  {
    id: "firestation", title: "Fire Station", image: sceneFirestation, emoji: "🚒",
    objectTags: [
      { object: "firefighter", location: "near the truck" },
      { object: "fire truck", location: "in the station" },
      { object: "dalmatian", location: "on the ground" },
      { object: "fire hose", location: "on the ground" },
    ],
    questions: [
      { question: "Who works here?", choices: [{ text: "Firefighter", emoji: "👨‍🚒" }, { text: "Teacher", emoji: "👩‍🏫" }], correctIndex: 0, correctFeedback: "Yes! A firefighter works at the fire station!" },
      { question: "What color is the fire truck?", choices: [{ text: "Red", emoji: "🔴" }, { text: "Blue", emoji: "🔵" }, { text: "Green", emoji: "🟢" }], correctIndex: 0, correctFeedback: "That's right! The fire truck is red!" },
      { question: "What animal is there?", choices: [{ text: "A dalmatian dog", emoji: "🐕" }, { text: "A cat", emoji: "🐱" }], correctIndex: 0, correctFeedback: "Yes! A dalmatian dog is at the fire station!" },
      { question: "What is on the ground?", choices: [{ text: "A fire hose", emoji: "🔥" }, { text: "A ball", emoji: "⚽" }], correctIndex: 0, correctFeedback: "That's right! A fire hose is on the ground!" },
      { question: "Why do firefighters wear helmets?", choices: [{ text: "To protect their heads", emoji: "⛑️" }, { text: "To look cool", emoji: "😎" }], correctIndex: 0, correctFeedback: "Yes! Firefighters wear helmets to protect their heads!" },
      { question: "When should you call 911?", choices: [{ text: "In an emergency", emoji: "🚨" }, { text: "When you're bored", emoji: "😐" }], correctIndex: 0, correctFeedback: "That's right! You should call 911 in an emergency!" },
      { question: "Why is the fire truck red?", choices: [{ text: "So people can see it easily", emoji: "🔴" }, { text: "Because red is pretty", emoji: "🌹" }, { text: "Because it's hot", emoji: "🔥" }], correctIndex: 0, correctFeedback: "Yes! The fire truck is red so people can see it easily!" },
      { question: "What should you do if there's a fire?", choices: [{ text: "Get out and call for help", emoji: "🚨" }, { text: "Hide under the bed", emoji: "🛏️" }], correctIndex: 0, correctFeedback: "That's right! If there is a fire, you should get out and call for help!" },
    ],
  },
  {
    id: "picnic", title: "Picnic Time", image: scenePicnic, emoji: "🧺",
    objectTags: [
      { object: "children", location: "on a blanket" },
      { object: "sandwiches", location: "on the blanket" },
      { object: "ball", location: "on the grass" },
      { object: "ants", location: "near the food" },
    ],
    questions: [
      { question: "Where are the children sitting?", choices: [{ text: "On a blanket", emoji: "🧣" }, { text: "On chairs", emoji: "🪑" }], correctIndex: 0, correctFeedback: "Yes! The children are sitting on a blanket!" },
      { question: "What are they eating?", choices: [{ text: "Sandwiches", emoji: "🥪" }, { text: "Pizza", emoji: "🍕" }, { text: "Ice cream", emoji: "🍦" }], correctIndex: 0, correctFeedback: "That's right! They are eating sandwiches!" },
      { question: "What is on the grass?", choices: [{ text: "A ball", emoji: "⚽" }, { text: "A book", emoji: "📖" }], correctIndex: 0, correctFeedback: "Yes! A ball is on the grass!" },
      { question: "What insects are near the food?", choices: [{ text: "Ants", emoji: "🐜" }, { text: "Bees", emoji: "🐝" }], correctIndex: 0, correctFeedback: "That's right! Ants are near the food!" },
      { question: "Why do we eat outside during a picnic?", choices: [{ text: "To enjoy the nice weather", emoji: "☀️" }, { text: "Because the kitchen is broken", emoji: "🔧" }], correctIndex: 0, correctFeedback: "Yes! We eat outside during a picnic to enjoy the nice weather!" },
      { question: "When is a good time for a picnic?", choices: [{ text: "On a sunny day", emoji: "☀️" }, { text: "During a thunderstorm", emoji: "⛈️" }], correctIndex: 0, correctFeedback: "That's right! A sunny day is a good time for a picnic!" },
      { question: "Why do ants come to the picnic?", choices: [{ text: "They smell the food", emoji: "🐜" }, { text: "They want to play", emoji: "😄" }, { text: "They are lost", emoji: "🗺️" }], correctIndex: 0, correctFeedback: "Yes! Ants come to the picnic because they smell the food!" },
      { question: "What should you do with trash after eating?", choices: [{ text: "Throw it in a trash can", emoji: "🗑️" }, { text: "Leave it on the ground", emoji: "⬇️" }], correctIndex: 0, correctFeedback: "That's right! You should throw trash in a trash can after eating!" },
    ],
  },
  {
    id: "petshop", title: "Pet Shop", image: scenePetshop, emoji: "🐾",
    objectTags: [
      { object: "puppies and kittens", location: "in cages" },
      { object: "fish", location: "in a tank" },
      { object: "parrot", location: "on a perch" },
      { object: "shopkeeper", location: "at the counter" },
    ],
    questions: [
      { question: "What animals are in cages?", choices: [{ text: "Puppies and kittens", emoji: "🐕" }, { text: "Lions", emoji: "🦁" }], correctIndex: 0, correctFeedback: "Yes! Puppies and kittens are in the cages!" },
      { question: "Where are the fish?", choices: [{ text: "In a tank", emoji: "🐟" }, { text: "On the shelf", emoji: "📚" }], correctIndex: 0, correctFeedback: "That's right! The fish are in a tank!" },
      { question: "What bird is there?", choices: [{ text: "A parrot", emoji: "🦜" }, { text: "An eagle", emoji: "🦅" }, { text: "A penguin", emoji: "🐧" }], correctIndex: 0, correctFeedback: "Yes! A parrot is at the pet shop!" },
      { question: "Who works at the shop?", choices: [{ text: "The shopkeeper", emoji: "🧑‍💼" }, { text: "A doctor", emoji: "👨‍⚕️" }], correctIndex: 0, correctFeedback: "That's right! The shopkeeper works at the pet shop!" },
      { question: "Why do pets need food and water?", choices: [{ text: "To stay alive and healthy", emoji: "💪" }, { text: "To play games", emoji: "🎮" }], correctIndex: 0, correctFeedback: "Yes! Pets need food and water to stay alive and healthy!" },
      { question: "When should you walk your dog?", choices: [{ text: "Every day", emoji: "🐕" }, { text: "Once a year", emoji: "📅" }], correctIndex: 0, correctFeedback: "That's right! You should walk your dog every day!" },
      { question: "Why do fish live in water?", choices: [{ text: "They breathe with gills", emoji: "🐟" }, { text: "They like swimming pools", emoji: "🏊" }, { text: "They are thirsty", emoji: "💧" }], correctIndex: 0, correctFeedback: "Yes! Fish live in water because they breathe with gills!" },
      { question: "What do you need before getting a pet?", choices: [{ text: "Food, a home, and love", emoji: "❤️" }, { text: "A spaceship", emoji: "🚀" }], correctIndex: 0, correctFeedback: "That's right! Before getting a pet, you need food, a home, and love!" },
    ],
  },
  {
    id: "snow", title: "Snow Day", image: sceneSnow, emoji: "⛄",
    objectTags: [
      { object: "children", location: "building snowman" },
      { object: "snowflakes", location: "falling from sky" },
      { object: "boy", location: "sledding on hill" },
      { object: "snowman", location: "in the yard" },
    ],
    questions: [
      { question: "What are the children building?", choices: [{ text: "A snowman", emoji: "⛄" }, { text: "A sandcastle", emoji: "🏰" }], correctIndex: 0, correctFeedback: "Yes! The children are building a snowman!" },
      { question: "What is falling from the sky?", choices: [{ text: "Snowflakes", emoji: "❄️" }, { text: "Rain", emoji: "🌧️" }, { text: "Leaves", emoji: "🍂" }], correctIndex: 0, correctFeedback: "That's right! Snowflakes are falling from the sky!" },
      { question: "What is the boy doing?", choices: [{ text: "Sledding", emoji: "🛷" }, { text: "Swimming", emoji: "🏊" }], correctIndex: 0, correctFeedback: "Yes! The boy is sledding!" },
      { question: "What are the kids wearing?", choices: [{ text: "Warm coats and hats", emoji: "🧥" }, { text: "Swimsuits", emoji: "👙" }], correctIndex: 0, correctFeedback: "That's right! The kids are wearing warm coats and hats!" },
      { question: "Why do we wear warm clothes in the snow?", choices: [{ text: "To stay warm", emoji: "🧣" }, { text: "To look funny", emoji: "🤡" }], correctIndex: 0, correctFeedback: "Yes! We wear warm clothes in the snow to stay warm!" },
      { question: "When does it snow?", choices: [{ text: "In winter", emoji: "❄️" }, { text: "In summer", emoji: "☀️" }], correctIndex: 0, correctFeedback: "That's right! It snows in winter!" },
      { question: "Why does the snowman melt?", choices: [{ text: "Because the sun warms it up", emoji: "☀️" }, { text: "Because it's hungry", emoji: "🍔" }, { text: "Because it's tired", emoji: "😴" }], correctIndex: 0, correctFeedback: "Yes! The snowman melts because the sun warms it up!" },
      { question: "What happens to water when it gets very cold?", choices: [{ text: "It turns to ice", emoji: "🧊" }, { text: "It disappears", emoji: "💨" }], correctIndex: 0, correctFeedback: "That's right! Water turns to ice when it gets very cold!" },
    ],
  },
  {
    id: "busstop", title: "Bus Stop", image: sceneBusstop, emoji: "🚌",
    objectTags: [
      { object: "children", location: "waiting at bus stop" },
      { object: "mom", location: "waving goodbye" },
      { object: "backpacks", location: "on kids' backs" },
      { object: "dog", location: "watching nearby" },
    ],
    questions: [
      { question: "What are the children waiting for?", choices: [{ text: "The school bus", emoji: "🚌" }, { text: "A taxi", emoji: "🚕" }], correctIndex: 0, correctFeedback: "Yes! The children are waiting for the school bus!" },
      { question: "Who is waving goodbye?", choices: [{ text: "The mom", emoji: "👩" }, { text: "The teacher", emoji: "👩‍🏫" }, { text: "The dog", emoji: "🐕" }], correctIndex: 0, correctFeedback: "That's right! The mom is waving goodbye!" },
      { question: "What are the kids carrying?", choices: [{ text: "Backpacks", emoji: "🎒" }, { text: "Balloons", emoji: "🎈" }], correctIndex: 0, correctFeedback: "Yes! The kids are carrying backpacks!" },
      { question: "What animal is watching?", choices: [{ text: "A dog", emoji: "🐕" }, { text: "A cat", emoji: "🐱" }], correctIndex: 0, correctFeedback: "That's right! A dog is watching!" },
      { question: "Why do children take the bus to school?", choices: [{ text: "Because school is far away", emoji: "🏫" }, { text: "Because they like buses", emoji: "🚌" }], correctIndex: 0, correctFeedback: "Yes! Children take the bus because school is far away!" },
      { question: "When does the school bus come?", choices: [{ text: "In the morning", emoji: "🌅" }, { text: "At midnight", emoji: "🌙" }], correctIndex: 0, correctFeedback: "That's right! The school bus comes in the morning!" },
      { question: "Why should you wait in line at the bus stop?", choices: [{ text: "To be safe and fair", emoji: "🤝" }, { text: "To play a game", emoji: "🎮" }, { text: "To run around", emoji: "🏃" }], correctIndex: 0, correctFeedback: "Yes! You should wait in line at the bus stop to be safe and fair!" },
      { question: "What should you do when the bus arrives?", choices: [{ text: "Wait for it to stop, then get on", emoji: "✋" }, { text: "Run in front of it", emoji: "🏃" }], correctIndex: 0, correctFeedback: "That's right! When the bus arrives, you should wait for it to stop, then get on!" },
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
