import { useState } from "react"

const App = () => {

    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const setValue = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitChange = (e) => {
        e.preventDefault()
        if(inputValue.trim() === "") return
        setTask([...task,inputValue])
        setInputValue("")
    }

    const handleDelete = (indexToDelete) => {
        setTask(task.filter((_,index) => index !== indexToDelete ))
    }

    return(
        <div>
            <form onSubmit={onSubmitChange}>
                <label htmlFor="text">Insertar la tarea</label>
                <input 
                type="text"
                value={inputValue}
                onChange={setValue}
                />
                <button type="submit">Agregar Tarea</button>
                {/* { error ? <p>{error}</p>
                        : setError("")
                } */}
            </form>
            <div>
                <ul> 
                    {task.map((tasks,index)=>(
                        <li key={index}>{tasks}
                            <button onClick={() => handleDelete(index)}>Eliminar tarea</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App