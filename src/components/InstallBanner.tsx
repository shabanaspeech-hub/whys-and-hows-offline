import { useState, useEffect } from "react";
import { X, Download, Share, Monitor } from "lucide-react";
import { Button } from "./ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type Platform = "ios" | "android" | "desktop";

const detectPlatform = (): Platform => {
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return "ios";
  if (/android/i.test(ua)) return "android";
  return "desktop";
};

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [platform, setPlatform] = useState<Platform>("desktop");
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches
      || (navigator as any).standalone === true;
    setIsStandalone(standalone);
    if (standalone) return;

    const dismissed = localStorage.getItem("install-banner-dismissed");
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    const detected = detectPlatform();
    setPlatform(detected);

    if (detected === "ios") {
      setShowBanner(true);
      return;
    }

    // Chrome/Edge/Android – listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // For desktop browsers that support install but may not fire the event immediately
    // Show a helpful banner after a short delay
    const timer = setTimeout(() => {
      if (detected === "desktop") {
        setShowBanner(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShowBanner(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("install-banner-dismissed", String(Date.now()));
  };

  if (isStandalone || !showBanner) return null;

  const instructions: Record<Platform, React.ReactNode> = {
    ios: (
      <p className="text-xs opacity-90">
        Tap <Share className="inline h-3 w-3" /> then <strong>"Add to Home Screen"</strong>
      </p>
    ),
    android: (
      <p className="text-xs opacity-90">Add to your home screen for quick access!</p>
    ),
    desktop: (
      <p className="text-xs opacity-90">
        {deferredPrompt
          ? "Install this app on your computer for quick access!"
          : <>Click the <strong>install icon ⊕</strong> in your browser's address bar</>
        }
      </p>
    ),
  };

  const icon = platform === "desktop" ? "💻" : "📲";
  const showInstallButton = deferredPrompt && platform !== "ios";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-primary text-primary-foreground shadow-lg animate-in slide-in-from-bottom">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm">Install WH Questions</p>
          {instructions[platform]}
        </div>
        {showInstallButton && (
          <Button size="sm" variant="secondary" onClick={handleInstall} className="shrink-0">
            <Download className="h-4 w-4 mr-1" /> Install
          </Button>
        )}
        <button onClick={handleDismiss} className="p-1 opacity-70 hover:opacity-100">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default InstallBanner;
