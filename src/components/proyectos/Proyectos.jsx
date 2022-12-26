import React, { useEffect, useState } from 'react'
import { ListaProductos } from '../../lista-proyectos/ListaProyectos'




const Proyectos = () => {
    const [proyectos, setProyectos] = useState([])


    useEffect(() => {
        const getProyectos = new Promise((resolve) => {
            resolve(ListaProductos)
        })
        getProyectos.then((respuesta) => {
            setProyectos(respuesta)
        })
    }, [])



    return (
        <main className="proyectos__container">
            <div className='titulo__proyectos'>
                <h2 className='proyecto__titulo'>Mis <span className='proyecto__titulo-span'>Proyectos</span></h2>
            </div>
            <div className='proyecto__card-container'>
                {
                    proyectos.map((item) => {
                        return (
                            <div key={item.sitio} className="proyecto__card" >
                                <img className='proyecto__card-img' src={`..${item.imagen}`} alt={item.titulo} />
                                <h6 className='proyecto__card-titulo'>{item.titulo}</h6>
                                <a className='proyecto__card-enlace' target="_blank" href={item.sitio}>Sitio</a>
                                <a className='proyecto__card-enlace' target="_blank" href={item.repo}>Repositorio</a>
                            </div>
                        )
                    })
                }
            </div>


        </main>
    )
}

export default Proyectos