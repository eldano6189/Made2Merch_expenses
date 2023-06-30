import { Routes, Route } from "react-router-dom";

import Header from "./components/global/header/header";
import Navigation from "./components/global/navigation/navigation";
import Journey from "./pages/journey/journey";
import Settings from "./pages/settings/settings";
import Reports from "./pages/reports/reports";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/journey" element={<Journey />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
};

export default App;
