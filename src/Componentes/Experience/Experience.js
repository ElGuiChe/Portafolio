

export default function Experience({ trabajosLista }) {

    return trabajosLista.map((trabajo) => {
        return (
            <div className="card mb-3 border-0">
                <a className="aProjects" href={trabajo.link} target="_blank" rel="noreferrer">
                    <div className="row g-0 backgroundEffect">
                        <div className="col-md-4 pt-3">
                            <span>{trabajo.años}</span>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title h5Projects">{trabajo.cargo}</h5>
                                <h5 className="card-title h5Projects">{trabajo.empresa}</h5>
                                <p className="card-text pExperience">{trabajo.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
    )
}