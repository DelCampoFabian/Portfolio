import React from 'react'
import { Link } from 'react-router-dom'
import "animate.css"

const Inicio = () => {
    return (
        <main className='inicio animate__animated animate__backInRight animate__slow'>
            <h1 className='inicio__titulo animate__animated animate__backInRight'>Fabián <span className='inicio__titulo-span'>Del Campo</span></h1>
            <h4 className='inicio__profesion'>Frontend Developer</h4>
            <Link to="/Portfolio/contacto" className='inicio__contacto'>Contacto</Link>
        </main>
      )
}

export default Inicio