import SideBar from '../src/Componentes/SideBar/SideBar';
import './App.css';
import AboutMe from './Componentes/AboutMe/AboutMe';
import EducationContainer from './Componentes/EducationContainer/EducationContainer';
import ExperienceContainer from './Componentes/ExperienceContainer/ExperienceContainer';
import PresentationCard from './Componentes/PresentationCard/PresentationCard';
import ProjectsContainer from './Componentes/ProjectsContainer/ProjectsContainer';
import SocialMedia from './Componentes/SocialMedia/SocialMedia';

function App() {
  return (
        <div className="container-fluid containerCustom">
          <div className="row">
            <div className="col-lg-5 p-96">
              <div className="sticky-top">
                <PresentationCard />
                <SideBar />
                <SocialMedia />
              </div>
            </div>
            <div className="col-lg-7 p-96">
              <AboutMe />
              <ExperienceContainer/>
              <ProjectsContainer />
              <EducationContainer/>
            </div>
          </div>
        </div>
  );
}

export default App;
