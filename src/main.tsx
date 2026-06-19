import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Mainpage from "./pages/mainpage";
import About from "./pages/About";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Mainpage />}>
          <Route path="" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<About />}></Route>
          <Route path="contact" element={<About />}></Route>
          <Route path="gallery" element={<About />}></Route>
          <Route path="Achievements" element={<About />}></Route>
        </Route>
        <Route path="*" element={<App />} />
      </Routes>
    </HelmetProvider>
  </BrowserRouter>,
);
