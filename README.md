# 🗣️ WH Questions — Speech Therapy Quiz App

A browser-based speech therapy quiz app for children, built with React + Vite. Designed for offline use with localStorage-based progress tracking, voice feedback, and child-friendly UI.

**Developed by Speech Language Therapist Shabana Tariq**

---

## Features

- 📝 **6 WH Question Categories**: Who, What, Where, When, Why, How
- 🖼️ **20 Picture Scenes** with contextual WH questions
- ⭐ **Star reward system** for correct answers
- 🗣️ **Voice feedback** using SpeechSynthesis API
- 🎵 **Sound effects** for correct/wrong answers and milestones
- ⚙️ **Settings page** to adjust voice speed, pitch, and toggle categories
- 📱 **Responsive design** optimized for tablets, phones, and laptops
- 💾 **All progress stored in localStorage** — no backend required

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (fast build tool)
- **React Router** (HashRouter for static hosting)
- **Framer Motion** (animations)
- **Tailwind CSS** + **shadcn/ui**
- **Web Audio API** (sound effects)
- **SpeechSynthesis API** (voice narration)

---

## Running Locally

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

---

## Build for Production

```sh
npm run build
```

This outputs a static site to the `dist/` folder, ready for deployment.

---

## Deployment

### Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com).
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy. The included `public/_redirects` file handles SPA routing.

### Vercel

1. Import your repo at [Vercel](https://vercel.com).
2. Vercel auto-detects Vite. Set:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
3. Add a `vercel.json` to the project root (optional, HashRouter handles routing):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### GitHub Pages

1. Install the gh-pages package:
   ```sh
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set `base` in `vite.config.ts` if deploying to a subdirectory:
   ```ts
   base: "/<REPO_NAME>/",
   ```

4. Run:
   ```sh
   npm run deploy
   ```

The app uses **HashRouter**, so all routes work without server-side redirects — no 404 issues on refresh.

### WordPress (iframe Embedding)

Embed the deployed app inside any WordPress page using an iframe:

```html
<iframe
  src="https://your-deployed-url.com"
  width="100%"
  height="800"
  style="border: none; border-radius: 16px; max-width: 900px; margin: 0 auto; display: block;"
  allow="autoplay; speaker; microphone"
  title="WH Questions Speech Therapy App"
></iframe>
```

> **Tip**: Use a Custom HTML block in WordPress. Adjust `height` as needed. The `allow` attribute enables speech synthesis audio.

---

## Folder Structure

```
├── public/
│   ├── _redirects          # Netlify SPA redirect
│   ├── 404.html            # GitHub Pages SPA fallback
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/scenes/      # 20 scene images (bundled by Vite)
│   ├── components/         # React components
│   │   ├── CategoryCard.tsx
│   │   ├── Confetti.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── SceneQuestionCard.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── data/
│   │   ├── questions.ts    # WH question data + progress helpers
│   │   └── scenes.ts       # Scene data + progress helpers
│   ├── lib/
│   │   ├── settings.ts     # localStorage settings
│   │   ├── sounds.ts       # Web Audio API sound effects
│   │   ├── speech.ts       # SpeechSynthesis wrapper
│   │   └── utils.ts        # Tailwind merge utility
│   ├── pages/
│   │   ├── Index.tsx        # Home / category selection
│   │   ├── QuizPage.tsx     # WH quiz page
│   │   ├── SceneQuizPage.tsx# Scene quiz page
│   │   ├── ScenesPage.tsx   # Scene selection grid
│   │   └── SettingsPage.tsx # Voice & category settings
│   ├── App.tsx              # Root with HashRouter
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind + custom styles
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## License

This project is for educational and therapeutic use.
