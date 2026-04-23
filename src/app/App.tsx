import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
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
    </BrowserRouter>
  );
}
