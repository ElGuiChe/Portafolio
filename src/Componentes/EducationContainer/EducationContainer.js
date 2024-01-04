import Education from "../Education/Education"

export default function EducationContainer () {

    const educacion = [
        {
            centroEducativo: "Universidad Central de Venezuela",
            titulo: "Licenciado en Contaduría Pública",
        },
        {
            centroEducativo: "Coderhouse",
            titulo: "React Js",
            link:"https://www.coderhouse.cl/certificados/6335580b17df71002456f26c",
        },
        {
            centroEducativo: "Coderhouse",
            titulo: "JavaScript",
            link: "https://www.coderhouse.cl/certificados/62d76ca371103300193f9e6e",
        },
        {
            centroEducativo: "Coderhouse",
            titulo: "Desarrollo Web",
            link: "https://www.coderhouse.cl/certificados/626d6bccbb0f26002556f1e0",
        },
        {
            centroEducativo: "EF Education First",
            titulo: "",
            link: "https://www.coderhouse.cl/certificados/626d6bccbb0f26002556f1e0",
        },
    ]

        return (
            <section  id="educationContainer">
                <h2 className="d-lg-none d-lg-block">Educación</h2>
                <Education educacionLista={educacion} />
            </section>
        )
    
}