import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Quiz from "./pages/Quiz";
import Countdown from "./pages/Countdown";
import MemoryJar from "./pages/MemoryJar";
import Messages from "./pages/Messages";
import FunFacts from "./pages/FunFacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/memory-jar" element={<MemoryJar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/fun-facts" element={<FunFacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
