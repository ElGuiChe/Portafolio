import SideBar from '../src/Componentes/SideBar/SideBar';
import './App.css';
import AboutMe from './Componentes/AboutMe/AboutMe';
import PresentationCard from './Componentes/PresentationCard/PresentationCard';
import Projects from './Componentes/Projects/Projects';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <PresentationCard />
          <SideBar />
        </div>
        <div className="col-8">
          <AboutMe />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
