import { Route, Routes } from "react-router-dom";
import Nav1 from "./components/Navbar";
import Land from "./pages/landingpage";
import Kanban from "./pages/Activity";
import Recognize from "./pages/Recognize";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav1 />
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/Activity" element={<Kanban />} />
        <Route path="/Recognize" element={<Recognize />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
