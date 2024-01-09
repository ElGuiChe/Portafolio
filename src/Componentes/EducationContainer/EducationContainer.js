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
            titulo: "English Certificate 69/100 (C1 Advanced)",
            link: "https://www.efset.org/cert/129P97",
        },
    ]

        return (
            <section className="mb-4" id="educacion">
                <h2>Educación</h2>
                <Education educacionLista={educacion} />
            </section>
        )
    
}