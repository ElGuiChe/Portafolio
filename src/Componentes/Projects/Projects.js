export default function () {

    const proyectos = [
        {
            titulo: "Proyecto 1",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut placerat felis. Cras at velit elit. Aenean euismod arcu id ultricies euismod. Duis sollicitudin volutpat justo vel placerat. Vestibulum eu felis cursus, luctus quam at, vehicula sem.",
            tecnologias: ["React", "Javascript", "CSS"],
        },
        {
            titulo: "Proyecto 2",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut placerat felis. Cras at velit elit. Aenean euismod arcu id ultricies euismod. Duis sollicitudin volutpat justo vel placerat. Vestibulum eu felis cursus, luctus quam at, vehicula sem.",
            tecnologias: ["React", "Javascript", "CSS"],
        },
    ]

    return proyectos.map((project) => {
        return (
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{project.titulo}</h5>
                            <p class="card-text">{project.descripcion}</p>
                            <p class="card-text"><small class="text-muted">{project.tecnologias}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    )
}