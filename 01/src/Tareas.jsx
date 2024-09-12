import { useForm } from "./hooks/useForm";

export const Tareas = () => {
  const { form, onInputChange } = useForm({tarea:[]});

  const { tarea } = form;

  const submit = (e) => {
    e.preventDefault();
    console.log(tarea);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          id="tarea"
          name="tarea"
          value={tarea}
          onChange={onInputChange}
        />
      </form>
      <ul>
        {/* {tarea.length > 0 
        ? tarea.map(tareas => (<li key={tareas.length}>{tareas}</li>))
        : "Aun no hay tareas"} */}
      </ul>
    </>
  );
};
