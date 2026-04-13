import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuizPage from "./pages/QuizPage";
import SettingsPage from "./pages/SettingsPage";
import ScenesPage from "./pages/ScenesPage";
import SceneQuizPage from "./pages/SceneQuizPage";
import NotFound from "./pages/NotFound";
import InstallBanner from "./components/InstallBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz/:category" element={<QuizPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/scenes" element={<ScenesPage />} />
          <Route path="/scenes/:sceneId" element={<SceneQuizPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
