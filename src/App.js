import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/global/header/header";
import Navigation from "./components/global/navigation/navigation";
import SplashScreen from "./components/specific/splash-screen/splashscreen";

import Statistics from "./pages/statistics/statistics";
import Journey from "./pages/journey/journey";
import Settings from "./pages/settings/settings";
import Reports from "./pages/reports/reports";
import Print from "./pages/print/print";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <SplashScreen />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Statistics />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/print" element={<Print />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Navigation />
    </div>
  );
};

export default App;
