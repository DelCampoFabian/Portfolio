import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <main className='inicio'>
            <h1 className='inicio__titulo'>Fabián <span className='inicio__titulo-span'>Del Campo</span></h1>
            <h4 className='inicio__profesion'>Frontend Developer</h4>
            <Link to="/contacto" className='inicio__contacto'>Contacto</Link>
        </main>
      )
}

export default Inicio