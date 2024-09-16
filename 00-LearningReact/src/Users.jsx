import { useEffect, useState } from "react"

export const Users = () =>{

    const [user,setUser]=useState([])

    const getFetch = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUser(data)  
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        setTimeout(() =>{
            getFetch()
        },1000)
    },[])

    return(
        <div>
            <ul>
            {user.length > 0 
                    ? user.map(user => { 
                        return <li key={user.id}>{user.name}</li> 
                    }) 
                    : <li>Cargando usuarios...</li>
                }
            </ul>
        </div>
    )
}