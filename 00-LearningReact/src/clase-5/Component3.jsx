export const Component3 = ({ reyes }) => {
    const finded = reyes.find((valor) =>
      valor.nombre.toLowerCase().startsWith("e")
    );
  
    return (
      <div>
        <h1>Component 3 </h1>
        <p>Actividad: Traer el primer rey con letra e</p>
        {finded ? <p>{finded.nombre}</p> : <p>No fue encontrado</p>}
      </div>
    );
  };
  