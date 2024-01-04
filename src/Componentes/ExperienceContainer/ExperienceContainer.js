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
            descripcion: "Presenté propuestas y soluciones que permitieron a la Gerencia de Administración y Finanzas contar con información financiera razonable de forma rauda y expedita.",
            link: "https://kpmg.com/cl/es/home.html",
        },
        {
            cargo: "Auditor Financiero Semi Senior",
            empresa: "PwC Venezuela",
            años: "2011 - 2014",
            pais: "Venezuela",
            descripcion: "Presenté propuestas y soluciones que permitieron a la Gerencia de Administración y Finanzas contar con información financiera razonable de forma rauda y expedita.",
            link: "https://www.pwc.com/ve/es.html",
        },
    ]

    return (
        <section  id="experienceContainer">
            <h2 className="d-lg-none d-lg-block">Experiencia</h2>
            <Experience trabajosLista={trabajos} />
            <a href='https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/TODOLIST.jpg' target="_blank" rel="noopener noreferrer">Echa un vistazo a mi CV completo aquí</a>
        </section>
    )
}