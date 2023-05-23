import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import About from "./Components/About.js";
import Designers from './Components/Designers';
import Designer from './Components/Designer';



export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Clothing" element={<Index />} />
            <Route path="/Clothing/new" element={<New />} />
            <Route path="/Clothing/:id" element={<Show />} />
            <Route path="/Clothing/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/Clothing/about" element={<About />} />
            <Route path="/Designers" element={<Designers />} />
            <Route path="/designer/:id" element={<Designer />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
};
