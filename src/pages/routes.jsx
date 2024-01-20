import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/experiencias" element={ <Experience/> }></Route>
                <Route path="/habilidades" element={ <Skills/> }></Route>
                <Route path="/projetos" element={ <Projects/> }></Route>
                <Route path="/contato" element={ <Contact/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;