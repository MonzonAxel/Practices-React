import "./stylesClase7Act.css";
export const Clase7Actividad = () => {

  const valores = [
    {
      titulo: "Aprenda React intensivamente con una profesora nativa",
      texto: "2 semanas. Una profesora sólo para ti (12h/día)",
      boton1: "Profesora",
      foto: "marta.PNG",
      nombre: "Marta Ríos",
      boton2: "Lugar",
      direccion: "48 St Laurent Boulevard, Montreal, Canadá",
    },
    {
      titulo: "Learn React intensively with a native teacher",
      texto: "2 weeks. A teacher just for you (12h/day)",
      boton1: "Professor",
      nombre: "Grace Trembley",
      foto: "grace.PNG",
      boton2: "Lotacion",
      direccion: "65 Stonehaven, Ottawa, Canadá",
    },
    {
      titulo: "Apprenez React intensément avec un professeur natif",
      texto: "2 semaines. Un professeur rien que pour vous (12h/jour)",
      boton1: "Professeur",
      nombre: "Aimée Mathieu",
      foto: "aimee.PNG",
      boton2: "Emplacement",
      direccion: "2700 Rue Jean-Perrin #190, Québec, Canadá",
    },
    {
      idioma: 0,
    },
  ];

  return (
    <div>
      <div>
        <p>Cambiar al Idioma deseado</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <h2>{valores.titulo}</h2>
        <p>2 dias a la semana una profesora solo para ti </p>
      </div>
      <div>
        <button>Profesora</button>
        <button>Lugar</button>
      </div>
      <div>
        <p>Profesor</p>
        <img src="" alt="Imagen Profesor" />
        <p>Nombre  Profesor</p>
      </div>
      <div>
        <p>Lugar</p>
        <p>Direccion</p>
      </div>
    </div>
  );
};