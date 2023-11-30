import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import AboutMe from "./AboutMe/AboutMe";
import ProjectPage from "./ProjectPage/ProjectPage";
import ContactPage from "./ContactPage/ContactPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/projectpage" element={<ProjectPage />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
