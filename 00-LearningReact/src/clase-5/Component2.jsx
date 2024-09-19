export const Component2 = ({ reyes }) => {
    const handleDelete = (e) => {
      e.target.parentNode.remove();
    };
  
    return (
      <>
        <h1>Component 2</h1>
        <p>Actividad: Traer a los reyes que no tengan letra "g" en sus nombres</p>
        <p>Más un botón para eliminar</p>
        {reyes
          .filter((valor) => !valor.nombre.includes("g"))
          .map((valor) => (
            <div key={valor.nombre} style={{ marginLeft: "auto", marginRight: "auto" }}>
              {valor.nombre}
              <button style={{ marginLeft: "0.2rem" }} onClick={handleDelete}>
                Eliminar nombre
              </button>
            </div>
          ))}
      </>
    );
  };
  