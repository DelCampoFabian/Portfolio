import React from 'react'
import { BsTelephoneFill, BsLinkedin , BsGithub} from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import emailjs from "@emailjs/browser"


const Contacto = () => {
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm("service_rikfk2k","template_ex9nrfr",event.target,"i0qLKdC66I2-znkDj")
        .then((response)=> console.log(response))
        .catch((error)=> console.log(error))
        
    }

    return (
        <main className='contacto'>
            <h2 className='contacto__titulo'>Mi <span className='contacto__titulo-span'>Contacto</span></h2>
            <div className='contacto__media-container'>
                <div className='contacto__links'>
                    <ul className='contacto__lista'>
                        <li className='contacto__lista-li'><i><BsTelephoneFill /></i> <a href="https://api.whatsapp.com/send?phone=542966642599" target="_blank">+54-2966642599</a>  </li>
                        <li className='contacto__lista-li'><i><GrMail /></i><a href="mailto:fabydelcampo@hotmail.com" target="_blank">fabydelcampo@hotmail.com</a></li>
                        <li className='contacto__lista-li'><i><BsLinkedin /></i><a href="https://www.linkedin.com/in/fabian-del-campo-705817250/" target="_blank">Linkedin</a></li>
                        <li className='contacto__lista-li'><i><BsGithub /></i><a href="https://github.com/DelCampoFabian" target="_blank">GitHub</a></li>
                    </ul>
                </div>
                <form className='contacto__form' onSubmit={sendEmail}>
                    <input className='contacto__form-input' type="text" name='user_name' required="required" placeholder='Nombre'/>
                    <input className='contacto__form-input' type="email" name='user_email' required="required" placeholder='Email'/>
                    <textarea className='contacto__form-textarea' name='user_mensaje' placeholder='Mensaje'></textarea>
                    <button className='contacto__form-button' type='submit'>Enviar mensaje</button>
                </form>
            </div>
           
        </main>
    )
}

export default Contacto