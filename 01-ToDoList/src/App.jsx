import { useEffect, useRef, useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [conditionEdit, setConditionEdit] = useState(null);
  const [editValue, setEditValue] = useState("");
  const editRef = useRef(null)

  // Al cargar la página, trae las tareas del localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        setTask(JSON.parse(storedTasks)); // Convierte de JSON a array
    }
}, []);

// Guarda las tareas en el localStorage cada vez que el estado de 'task' cambie
useEffect(() => {
    if (task.length > 0) { //Sin este if no funciona.
            localStorage.setItem("tasks", JSON.stringify(task)); // Convierte el array en JSON
        }
    }, [task]);

  useEffect(()=>{
    if(conditionEdit !== null && editRef.current){
        editRef.current.focus()
    }
  },[conditionEdit])
  
  const setValue = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTask([...task, 
        {
        text:inputValue, 
        complete:false
    }]);
    setInputValue("");
  };

  const handleDelete = (indexToDelete) => {
    setTask(task.filter((_, index) => index !== indexToDelete));
  };

  const editTask = (index) => {
    setConditionEdit(index)  // Seteo un indice para entrar en la condicion mediante isEdit
    setEditValue(task[index].text) // Seteo y obtengo el value del input que se edita , sino este se vacia al editar.
  };

  const saveTask = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index].text = editValue;
    setTask(updatedTasks);
    setConditionEdit(null); 
  };

  const handleKeyDown = (e,index) => {
    if(e.key == "Enter") saveTask(index)
  }

  const handleComplete = (index) => {
    const updateComplete = [...task];
    updateComplete[index].complete = !updateComplete[index].complete
    setTask(updateComplete)
  }

  const handleDeleteAll = () => {
    setTask([])
  }

  return (


    <div>
      <form onSubmit={onSubmitChange}>
        <label htmlFor="text">Insertar la tarea</label>
        <input type="text" value={inputValue} onChange={setValue} />
        <button type="submit">Agregar Tarea</button>
        <button onClick={handleDeleteAll}>Eliminar Todo</button>
      </form>
      <div>
        <ul>
          {task.map((tasks, index) => (
            <li key={index}>
                <button onClick={() => handleComplete(index)}
                style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid black",
                    marginRight: "10px",
                    backgroundColor: tasks.complete ? "green" : "red",
                    color: "white",
                    cursor: "pointer",
                }}
                >
                </button>
              {conditionEdit === index ? (
                <>
                  <input
                    ref={editRef}
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e,index)}
                  />
                  <button onClick={() => saveTask(index)}>Guardar</button>
                </>
              ) : (
                <>
                  <span style={{textDecoration: tasks.complete ? "line-through" : "none" }}>{tasks.text}</span>
                  <button onClick={() => editTask(index)}>Editar Tarea</button>
                </>
              )}
              <button onClick={() => handleDelete(index)}>
                    Eliminar tarea
                  </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;