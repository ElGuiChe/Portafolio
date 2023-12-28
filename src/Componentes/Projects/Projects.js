import './Projects.css';

export default function Projects({ proyectosLista }) {

    return proyectosLista.map((project) => {
        return (
            <div className="card mb-3 border-0">
                <a className="aProjects" href={project.link} target="_blank" rel="noreferrer">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={project.imagen} className="img-fluid rounded" alt={project.alt} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title h5Projects">{project.titulo}</h5>
                                <p className="card-text pProjects">{project.descripcion}</p>
                                <ul className="d-flex flex-wrap card-text list-group list-group-horizontal"> {project.tecnologias.map((tecnologia) => {
                                    return (<li className="list-group-item liProjects rounded-pill border-0">{tecnologia}</li>)
                                })}</ul>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
    )
}