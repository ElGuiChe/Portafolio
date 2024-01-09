import "./SideBar.css"
export default function SideBar() {
    return (
        <div className="d-none d-lg-block">
            <ul className="menu-hover-fill flex flex-col items-start">
                <li><a href="#acercaDeMi" value="Sobre mí">Sobre mí</a></li>
                <li><a href="#experiencia" value="Experiencia">Experiencia</a></li>
                <li><a href="#proyectos" value="Proyectos">Proyectos</a></li>
                <li><a href="#educacion" value="Educación">Educación</a></li>
            </ul>
        </div>
    )
}







