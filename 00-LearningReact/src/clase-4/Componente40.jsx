export const Component40 = ({ nombre, precio, color, agregarPrecio, agregarNombre }) => {
    const handlePrice = () => {
      agregarPrecio(precio);
      agregarNombre(nombre)
    };
  
    return (
      <section>
        <div style={{ background: color, padding: "1rem" }}>
          <p>{nombre}</p>
          <img
            src={`https://html6.es/img/rey_${nombre}.png`}
            alt="Imagen del rey"
          />
          <div>
            <p>Precio: ${precio}</p>
            <button onClick={handlePrice}>Comprar</button>
          </div>
        </div>
      </section>
    );
  };
  