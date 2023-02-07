import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {IoClose} from "react-icons/io5"
import { NavLink } from 'react-router-dom'
import logoPersonal from "../../assets/img/logoPersonal.png"

const Header = ({header}) => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
    }
    
    return (
        <nav className={`navegacion ${header ? "cerrar__bars" : ""}`}>
            <h3 className='navegacion__titulo'><img src={logoPersonal} alt="" /></h3>
            <ul className={`navegacion__ul ${menu ? 'ul__active' : ''}`}>
                <li className='navegacion__ul-li'><NavLink onClick={handleMenu} to="/Portfolio" >Inicio</NavLink></li>
                <li className='navegacion__ul-li'><NavLink onClick={handleMenu} to="/Portfolio/sobreMi">Sobre mi</NavLink></li>
                <li className='navegacion__ul-li'><NavLink onClick={handleMenu} to="/Portfolio/proyectos">Proyectos</NavLink></li>
                <li className='navegacion__ul-li'><NavLink onClick={handleMenu} to="/Portfolio/contacto">Contacto</NavLink></li>
            </ul>
            <div onClick={handleMenu} className={`navegacion__bars ${menu ? "cerrar__bars" : ""}`}>
                <i><FaBars/></i>
            </div>
            <div onClick={handleMenu} className={`navegacion__close ${menu ? 'close__active' : ''}`}>
                <i><IoClose/></i>
            </div>
        </nav>
    )
}

export default Header