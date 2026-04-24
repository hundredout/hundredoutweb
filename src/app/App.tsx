import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AppPage } from "./pages/AppPage";
import { GearPage } from "./pages/GearPage";
import { ClubPage } from "./pages/ClubPage";
import { AboutPage } from "./pages/AboutPage";
import { ContentPage } from "./pages/ContentPage";
import { CampaignsPage } from "./pages/CampaignsPage";
import { DownloadPage } from "./pages/DownloadPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/gear" element={<GearPage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
