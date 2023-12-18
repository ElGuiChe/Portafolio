export default function () {

    const prueba ={
        backgroundColor: "red",
        width: "100px",
        heigth: "100px",
        padding: "50px",
    }

    const proyectos = [
        {
            titulo: "Tienda Javascript",
            descripcion: "Tienda virtual desarrollada principalmente con HTML, CSS y JAVASCRIPT. La tienda incluye varias secciones estáticas así como un carrito de compra funcional que además permite hacer la conversión a otras monedas mediante el uso de API. En este proyecto no aplica el uso de librerías o frameworks",
            tecnologias: ["JAVASCRIPT", "HTML", "CSS", "SASS", "API", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: "",
            alt:"",
        },
        {
            titulo: "Tienda React",
            descripcion: "Tienda virtual desarrollada en React. En este proyecto los productos se encuentran en una base de datos de Firebase y son llamados por la aplicación para ser mostrados al usuario. Adicionalmente cuenta con un carrito de compras funcional que al finalizar la compra envía al servidor de Firebase, los datos solicitados al usuario mediante un formulario",
            tecnologias: ["REACT", "JAVASCRIPT", "FIREBASE", "FIRESTORE", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: ""
        },
        {
            titulo: "To Do List",
            descripcion: "Esta lista de pendientes se encuentra conectada a un servidor en Firebase. En este proyecto se crean, modifican y eliminan documentos en la nube de Firestore y se manipula el DOM mediante hooks de react para que el usuario pueda visualizar su listado de pendientes.",
            tecnologias: ["REACT", "JAVASCRIPT", "FIREBASE", "FIRESTORE", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: 'https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/TODOLIST.jpg'
        },
        {
            titulo: "Portafolio Personal",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut placerat felis. Cras at velit elit. Aenean euismod arcu id ultricies euismod. Duis sollicitudin volutpat justo vel placerat. Vestibulum eu felis cursus, luctus quam at, vehicula sem.",
            tecnologias: ["React", "Javascript", "CSS"],
            imagen: ""
        },
    ]

    return proyectos.map((project) => {
        return (
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={project.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{project.titulo}</h5>
                            <p className="card-text">{project.descripcion}</p>
                            <ul className="card-text list-group list-group-horizontal"> {project.tecnologias.map((tecnologia)=>{
                                return(<li className="list-group-item">{tecnologia}</li>)
                            })}</ul>
                        </div>
                        <div style={prueba}></div>
                    </div>
                </div>
            </div>
        )
    }
    )
}