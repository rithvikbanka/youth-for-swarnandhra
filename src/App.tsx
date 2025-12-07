import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventYouthChangemaker from "./pages/EventYouthChangemaker";
import EventYouthCon from "./pages/EventYouthCon";
import EventYouthImpactLabs from "./pages/EventYouthImpactLabs";
import JoinOurTeam from "./pages/JoinOurTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/event/youth-changemaker-talks" element={<EventYouthChangemaker />} />
          <Route path="/event/youth-con" element={<EventYouthCon />} />
          <Route path="/event/youth-impact-labs" element={<EventYouthImpactLabs />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
