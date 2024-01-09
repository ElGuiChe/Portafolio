import Projects from "../Projects/Projects";

export default function ProjectsContainer() {

    const proyectos = [
        {
            titulo: "Tienda Javascript",
            descripcion: "Tienda virtual desarrollada principalmente con HTML, CSS y JAVASCRIPT. La tienda incluye varias secciones estáticas así como un carrito de compra funcional que además permite hacer la conversión a otras monedas mediante el uso de API. En este proyecto no aplica el uso de librerías o frameworks.",
            tecnologias: ["JAVASCRIPT", "HTML", "CSS", "SASS", "API", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: "https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/JAVASCRIPTSHOP.png",
            alt: "Imagen proyecto tienda Javascript",
            link: "https://elguiche.github.io/BeGreen/index.html",
        },
        {
            titulo: "Tienda React",
            descripcion: "Tienda virtual desarrollada en React. En este proyecto los productos se encuentran en una base de datos de Firebase y son llamados por la aplicación para ser mostrados al usuario. Adicionalmente cuenta con un carrito de compras funcional que al finalizar la compra envía al servidor de Firebase, los datos solicitados al usuario mediante un formulario.",
            tecnologias: ["REACT", "JAVASCRIPT", "FIREBASE", "FIRESTORE", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: "https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/REACTSHOP.jpg",
            alt: "Imagen proyecto tienda React",
            link: "https://delicate-rolypoly-f9574a.netlify.app/",
        },
        {
            titulo: "To Do List",
            descripcion: "Esta lista de pendientes se encuentra conectada a un servidor en Firebase. En este proyecto se crean, modifican y eliminan documentos en la nube de Firestore y se manipula el DOM mediante hooks de react para que el usuario pueda visualizar su listado de pendientes.",
            tecnologias: ["REACT", "JAVASCRIPT", "FIREBASE", "FIRESTORE", "BOOTSTRAP", "GIT", "GITHUB"],
            imagen: 'https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/TODOLIST.jpg',
            alt: "Imagen proyecto To Do List",
            link: "https://animated-lily-875d5a.netlify.app/",
        },
        {
            titulo: "Portafolio Personal",
            descripcion: "Portafolio personal desarrollado con React.",
            tecnologias: ["REACT", "JAVASCRIPT", "BOOTSTRAP", "CSS"],
            imagen: "https://raw.githubusercontent.com/ElGuiChe/Portafolio/master/public/images/PORTAFOLIO.png",
            alt: "Imagen proyecto Portafolio Personal",
            link: "",
        },
    ]

    return (
        <section className="mb-4" id="proyectos">
            <h2>Proyectos</h2>
            <Projects proyectosLista={proyectos} />
        </section>
    )
}