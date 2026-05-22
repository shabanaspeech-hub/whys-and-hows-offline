import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { runValidation } from "./lib/validation";

// Run data validation in development
if (import.meta.env.DEV) {
  runValidation();
}

createRoot(document.getElementById("root")!).render(<App />);

// PWA service worker registration — guarded against Lovable preview & iframes
const isInIframe = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

const host = window.location.hostname;
const isPreviewHost =
  host.includes("id-preview--") ||
  host.includes("lovableproject.com") ||
  host.includes("lovableproject-dev.com") ||
  host.startsWith("preview--");

if (isInIframe || isPreviewHost) {
  // Make sure no stale SW from a previous build keeps serving cached assets in preview
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
  }
} else if (import.meta.env.PROD && "serviceWorker" in navigator) {
  import("virtual:pwa-register")
    .then(({ registerSW }) => {
      registerSW({ immediate: true });
    })
    .catch(() => {
      // ignore — PWA is a progressive enhancement
    });
}
