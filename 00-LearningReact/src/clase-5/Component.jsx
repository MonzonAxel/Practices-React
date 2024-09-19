export const Component = ({ reyes }) => {
    return (
      <>
        <p>Lista de reyes con sus reinados y comida diaria</p>
        {reyes.map((valor) => (
          <div key={valor.nombre}>
            <span style={{ color: "red" }}>{valor.nombre.toUpperCase()}</span>{" "}
            comio {valor.vacasComidas} vacas en sus {valor.reinado} años de
            reinado
            <img
              src={`https://www.html6.es/img/rey_${valor.nombre.toLocaleLowerCase()}.png`}
              alt="Nombre del rey"
            />
          </div>
        ))}
      </>
    );
  };