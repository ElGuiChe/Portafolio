import "./SideBar.css"
export default function SideBar() {
    return (
        <div className="d-none d-lg-block">
            <ul className="menu-hover-fill flex flex-col items-start">
                <li><a href="#aboutMe" value="Sobre mí">Sobre mí</a></li>
                <li><a href="#experienceContainer" value="Experiencia">Experiencia</a></li>
                <li><a href="#projectsContainer" value="Proyectos">Proyectos</a></li>
                <li><a href="#educationContainer" value="Educación">Educación</a></li>
            </ul>
        </div>
    )
}







