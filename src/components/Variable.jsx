import React from 'react'

const Variable = () =>{
    const saludo = "Hola mundo"
    const imagen = 'https://picsum.photos/200'
    const texto_alt = 'Esto es una imagen'
    return (
        <div>
            <h1>{saludo}</h1>
            <img src={imagen} alt={texto_alt}/>
        </div>
    )
}

export default Variable