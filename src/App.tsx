import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { TourDetailPage } from "./pages/TourDetailPage";

function App() {
  return (
    <div
      className="min-h-screen font-fantasy"
      style={{ backgroundColor: "#0F1513" }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour/:tourId" element={<TourDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
