import React from 'react'

const PeticionAPI = () => {
    
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerPersonajes = async () => {
        try {
            const res = await fetch(`https://api.disneyapi.dev/characters/?page=${paginacion}`)
            const {data} = await res.json()
            setPersonajes(data)
        } catch (error) {
            console.log(error)
        }
    }
    const siguiente = async () =>{
        await setPaginacion(paginacion + 1)
        obtenerPersonajes()
    }
    const atras = async () =>{
        await setPaginacion(paginacion - 1)
        obtenerPersonajes()
    }
    return (
        <div>
            <h1>PETICIÓN AL API PERSONAJES DE DISNEY+</h1>
            <button onClick={obtenerPersonajes}> Traer Personajes </button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}> Atrás</button>
            {
                personajes.map((resultado) => (
                    <div key ={resultado._id}>
                        <h4>{resultado._id}.{resultado.name}</h4>
                        <img src={resultado.imageUrl} alt={resultado.name}/>
                    </div>
                )
                )
            }
        </div>
    )
}

export default PeticionAPI