import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import EventYouthChangemaker from "./pages/EventYouthChangemaker";
import EventYouthCon from "./pages/EventYouthCon";
import EventYouthImpactLabs from "./pages/EventYouthImpactLabs";
import AndhraYouthRadio from "./pages/AndhraYouthRadio";
import AndhraYuvaSankalp from "./pages/AndhraYuvaSankalp";
import YouthTalentCarnival from "./pages/YouthTalentCarnival";
import YouthArtWall from "./pages/YouthArtWall";
import CarnivalParade from "./pages/CarnivalParade";
import Yuvasrishti from "./pages/Yuvasrishti";
import JoinOurTeam from "./pages/JoinOurTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnalyticsProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Special Events */}
            <Route path="/event/youth-changemaker-talks" element={<EventYouthChangemaker />} />
            <Route path="/event/youth-con" element={<EventYouthCon />} />
            <Route path="/event/youth-impact-labs" element={<EventYouthImpactLabs />} />
            <Route path="/event/andhra-youth-radio" element={<AndhraYouthRadio />} />
            {/* Other Events */}
            <Route path="/other-events/andhra-yuva-sankalp" element={<AndhraYuvaSankalp />} />
            <Route path="/other-events/youth-talent-carnival" element={<YouthTalentCarnival />} />
            <Route path="/other-events/youth-art-wall" element={<YouthArtWall />} />
            <Route path="/other-events/carnival-parade" element={<CarnivalParade />} />
            <Route path="/other-events/yuvasrishti" element={<Yuvasrishti />} />
            {/* Join Us */}
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AnalyticsProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
