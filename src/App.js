import SideBar from '../src/Componentes/SideBar/SideBar';
import './App.css';
import AboutMe from './Componentes/AboutMe/AboutMe';
import PresentationCard from './Componentes/PresentationCard/PresentationCard';
import Projects from './Componentes/Projects/Projects';
import SocialMedia from './Componentes/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <PresentationCard />
          <SideBar />
          <SocialMedia/>
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
