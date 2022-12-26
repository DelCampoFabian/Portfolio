import React, { useState } from 'react';
import fotoPerfil from "../../assets/img/fotoPerfil.jpg";
import {AiOutlineCloseCircle} from "react-icons/ai"
import {FaUser, FaBirthdayCake, FaPhoneAlt} from "react-icons/fa"
import {MdLocationPin, MdAlternateEmail} from "react-icons/md"
import CV from "../../assets/img/CV-Fabian-Del-Campo.pdf"

const SobreMi = ({handleHeader}) => {
const [about, setAbout] = useState(false)
const handleViews = () =>{
    setAbout(!about)
}
if (about){
    return (
        <section className="skills__container">
                <div className='path__top'><span onClick={() => {
                    handleHeader();
                    handleViews();
                    }} className='skills__close'><i><AiOutlineCloseCircle/></i></span>
                </div>
                <div className='about__container'>
                    <div className='imagen__container'>
                        <img className='imagen__container-img' src={fotoPerfil} alt="Del Campo Fabián" />
                    </div>
                    <h3 className='about__titulo'>Fabián <span className='about__titulo-span'>Del Campo</span></h3>
                    <h4 className='about__profesion'>Frontend developer</h4>
                    <div className='about__registro'>
                        <h6 className='about__registro-info'><i><FaUser/></i> Fabián Del Campo</h6>
                        <h6 className='about__registro-info'><i><FaBirthdayCake/></i> 28/04/1998</h6>
                        <h6 className='about__registro-info'><i><MdLocationPin/></i> Santa Cruz, Rio Gallegos.</h6>
                        <h6 className='about__registro-info'><i><FaPhoneAlt/></i> +54-2966642599</h6>
                        <h6 className='about__registro-info'><i><MdAlternateEmail/></i> fabydelcampo@hotmail.com</h6>
                        <a href={CV} target="_blank" className='about__cv'>Download CV</a>
                    </div>
                </div>
                <div className='skills__media-container'>
                    <div className='aboutMe__container'>
                        <h3 className='aboutMe__titulo'>Sobre <span className='aboutMe__titulo-span'>Mi</span></h3>
                        <p className='aboutMe__descripcion'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum suscipit consectetur quo blanditiis assumenda labore distinctio atque voluptas illo, enim quae qui vitae quos esse ullam, eum consequuntur eius?</p>
                    </div>
                    <div className='aboutMe__container'>
                        <h3 className='aboutMe__titulo'>Mis <span className='aboutMe__titulo-span'>habilidades</span></h3>
                        <div className='skills__conatainer'>
                            <h5 className='skills__titulo'>Frontend:</h5>
                            <p  className='skills__descripcion'>HTML - Css - Sass - Bootstrap - JavaScript - ReactJS </p>
                            <h5 className='skills__titulo'>Backend (Cursando):</h5>
                            <p  className='skills__descripcion'>NodeJS - ExpressJS - SQL - MongoDB</p>
                            <h5 className='skills__titulo'>Herramientas</h5>
                            <p  className='skills__descripcion'>Vsc - Git - GitHub</p>
                        </div>
                    </div>
                    <div className='aboutMe__container'>
                        <h3 className='aboutMe__titulo'>Mis <span className='aboutMe__titulo-span'>certificaciones</span></h3>
                        <div className='skills__conatainer'>
                            <h5 className='skills__titulo'>Coderhouse 2022</h5>
                            <a href='https://www.coderhouse.com/certificados/6294af3d047f4700246e61bc' target="_blank" className='skills__enlace'>Desarrollo Web</a>
                            <h5 className='skills__titulo'>Coderhouse 2022:</h5>
                            <a href='https://www.coderhouse.com/certificados/62e8a3a35b0b060019a884c0' target="_blank" className='skills__enlace'>JavaScript</a>
                            <h5 className='skills__titulo'>Coderhouse 2022</h5>
                            <a href='https://www.coderhouse.com/certificados/637fcafb9c65c3000ef898aa' target="_blank" className='skills__enlace'>ReactJS</a><br/>
                            <a href='https://www.coderhouse.com/certificados/637fcafb9c65c3000ef898ad' target="_blank" className='skills__enlace'>Carrera Frontend</a>
                        </div>
                    </div>
                </div>
            </section>
    )    
}

  return (
    <main className={`sobreMi ${about ? "close__skills" : ""}`}>
        <div className='perfil__container'>
            <img className='perfil__container-img' src={fotoPerfil} alt="Del Campo Fabián" />
        </div>
        <div className='sobreMi__media-container'>
            <div className='nombre__container'>
                <h2 className='nombre__titulo'>Fabián <span className='nombre__titulo-span'>Del Campo</span></h2>
                <h4 className='nombre__profesion'>Frontend developer</h4>
            </div>
            <div className='descripcion__container'>
                <p className='descripcion__parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos doloribus rerum quidem fugit assumenda error? Porro dolore excepturi provident, iure culpa, odit cum eum sint sunt nobis doloremque eaque.</p>
                <button onClick={() => {
                    handleHeader();
                    handleViews();
                }} className='descripcion__button'>Ver más</button>
            </div>
        </div>
    </main>
  )
}

export default SobreMi