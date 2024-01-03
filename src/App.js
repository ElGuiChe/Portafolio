import SideBar from '../src/Componentes/SideBar/SideBar';
import './App.css';
import AboutMe from './Componentes/AboutMe/AboutMe';
import ExperienceContainer from './Componentes/ExperienceContainer/ExperienceContainer';
import PresentationCard from './Componentes/PresentationCard/PresentationCard';
import ProjectsContainer from './Componentes/ProjectsContainer/ProjectsContainer';
import SocialMedia from './Componentes/SocialMedia/SocialMedia';

function App() {
  return (
        <div className="container-fluid containerCustom">
          <div className="row">
            <div className="col-md-5 p-96">
              <div className="sticky-top">
                <PresentationCard />
                <SideBar />
                <SocialMedia />
              </div>
            </div>
            <div className="col-md-7 p-96">
              <AboutMe />
              <ProjectsContainer />
              <ExperienceContainer/>
            </div>
          </div>
        </div>
  );
}

export default App;
