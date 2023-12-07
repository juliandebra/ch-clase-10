import React, { useState } from 'react'

const Formulario = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    const [show, setShow] = useState(false)
    console.log(user)

    const handleSubmit = (event) => {
        event.preventDefault()
        setShow(true)
        
        console.log('Se envió el form', event)
    }
    const changeName = (e) => setUser({...user, name: e.target.value})
  return (
    <div>
        {!show && 
            <form onSubmit={handleSubmit}>
                <label >Nombre de usuario:</label>
                <input type="text" onChange={changeName}/>
                <label >Email del usuario:</label>
                <input type="email" onChange={(e) => setUser({...user, email: e.target.value })}/>
                <button>Enviar</button>
            </form>}
        {show && 'Se envió el form, ' + user.name}
    </div>
  )
}

export default Formulario