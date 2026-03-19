import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { runValidation } from "./lib/validation";

// Run data validation in development
if (import.meta.env.DEV) {
  runValidation();
}

createRoot(document.getElementById("root")!).render(<App />);
