import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import SponsorshipPackages from "./pages/SponsorshipPackages";
import VendorPackages from "./pages/VendorPackages";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorship-packages" element={<SponsorshipPackages />} />
          <Route path="/vendor-packages" element={<VendorPackages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
