import { useState } from 'react'

const Login = () => {
  const [nombre, setNombre] = useState('pepe')

  const changeName = () => {
    setNombre('juan')
  }

  return (
    <div>
      <h2>{nombre}</h2>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  )
}

export default Login
