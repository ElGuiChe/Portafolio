import Experience from "../Experience/Experience";

export default function ExperienceContainer() {

    const trabajos = [
        {
            cargo: "Analista Contable Senior",
            empresa: "Nexus Payment Systems SpA - Minsait",
            años: "2019 - 2023",
            pais: "Chile",
            descripcion: "Presenté propuestas y soluciones que permitieron a la Gerencia de Administración y Finanzas contar con información financiera razonable de forma rauda y expedita.",
            link: "https://www.minsait.com/es",
        },
        {
            cargo: "Auditor Financiero Senior",
            empresa: "KPMG Chile",
            años: "2014 - 2019",
            pais: "Chile",
            descripcion: "Responsable de asistir en el desarrollo de auditorías, asi como liderar equipos de trabajo. Funcionar como enlace, entre las necesidades del cliente y gerente de KPMG. Levantamiento de procesos, controles y elaboración de pruebas de auditoría.",
            link: "https://kpmg.com/cl/es/home.html",
        },
        {
            cargo: "Auditor Financiero Semi Senior",
            empresa: "PwC Venezuela",
            años: "2011 - 2014",
            pais: "Venezuela",
            descripcion: "Prestar asistencia en la ejecución de pruebas de auditoría",
            link: "https://www.pwc.com/ve/es.html",
        },
    ]

    return (
        <section className="mb-4" id="experiencia">
            <h2>Experiencia</h2>
            <Experience trabajosLista={trabajos} />
            <small>
                <a ClassName="aprueba" Style={"color: rgb(94, 234, 212) !important"} href='https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/TODOLIST.jpg' target="_blank" rel="noopener noreferrer">Echa un vistazo a mi CV completo aquí</a>
            </small>
        </section>
    )
}