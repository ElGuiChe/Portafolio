import './Education.css'

export default function Education({ educacionLista }) {

    return educacionLista.map((certificado) => {
        if (certificado.link !== undefined) {
            return (
                <div className="container-fluid p-3">
                    <h5 className="h5Projects">{certificado.centroEducativo}</h5>
                    <p className="mb-1 pProjects">{certificado.titulo}</p>
                    <a className="aEducation" href={certificado.link} target="_blank" rel="noreferrer">
                        <small>Ver certificado</small>
                    </a>
                </div>
            )
        } else {
            return (
                <div className="container-fluid p-3">
                    <h5 className="h5Projects">{certificado.centroEducativo}</h5>
                    <p className="mb-1 pProjects">{certificado.titulo}</p>
                </div>
            )
        }
    }
    )
}
