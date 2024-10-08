import { useState } from "react";

export const Component91 = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        text: input,
        complete: false,
        unidad:1
      },
    ]);
    setInput("");
  };

  const handleEdit = (index) => {
    setIsEdit(index);
    setEditValue(task[index].text) // muestra el texto que tenia previamente la tarea en el input de edicion, sino habra en el input de edicion , aparecera vacio.
  };

  const handleKeyDown = (e,index) => {
    if (e.key == "Enter"){
      const EditNewTask = [...task]
      EditNewTask[index].text = editValue
      setTask(EditNewTask)

      setIsEdit(false)
      setEditValue("")
    }
  }

  const handleDelete = (indexed) => {
    const newTask = task.filter((__,index) => index !== indexed)
    setTask(newTask)
  }

  const handleUnidadAdd = (index) => {
    const newUnidad = [...task]
    newUnidad[index].unidad += 1
    setTask(newUnidad)
  }

  const handleUnidadLess = (index) => {
    const newUnidad = [...task]

    if(newUnidad[index].unidad == 1) return
    newUnidad[index].unidad -= 1
    setTask(newUnidad)
  }

  return (
    <>
      <h3>Actividad 2 || to do List modo Spagetti</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Tarea a insertar:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {task.map((tasks, index) => (
          <li key={index}>
            {isEdit === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e,index)}
              />
            ) : (
              <>
                <span>
                  {tasks.text} ({tasks.unidad} unidades)
                </span>

                <button onClick={() => handleUnidadAdd(index)}>+</button>
                <button onClick={() => handleUnidadLess(index)}>-</button>

                <button type="button" onClick={() => handleEdit(index)}>
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
