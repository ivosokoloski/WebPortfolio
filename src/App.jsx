import { Header } from "./header/Header";
import { About } from "./about/About";
import { Main } from "./main/Main";
import { Projects } from "./Projects/Projects";
import { Education } from "./education/Education";
import { Contact } from "./contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <About ></About>
        <div className="main-container">
        <Main id="home"></Main>
        <Education id="education"></Education>
        <Projects id="projects"></Projects>
        <Contact></Contact>
         </div>
        <Header></Header>
       
      </div>
    </>
  );
}

export default App;
