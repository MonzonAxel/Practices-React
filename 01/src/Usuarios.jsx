import { useEffect, useState } from "react"

export const Usuarios = () =>{ 

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>{
            const usuariosFiltrados = data.map(({name,id,company})=>{
                name,
                id,
                company
            })
        })  
    },[])

    return(
        <ul>
            {usuarios.map(usuario => (<li>{usuario.name}</li>))}
        </ul>
    )

}
