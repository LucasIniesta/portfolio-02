import styles from './Contact.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";



function Contact({linkedin, insta, git}){
    return(
        <div id='contact' className={styles.contact}>
            <h1>Contato</h1>
            <ul>
                <li><a href={linkedin} target='_blank'><FaLinkedin color='#0A66C2' size='45px'/></a></li>
                <li><a href={insta} target='_blank'><FaInstagram color='#000000' size='45px' /></a></li>
                <li><a href={git} target='_blank'><FaGithub color='#000000' size='45px' /></a></li>
            </ul>
        </div>
    )
}

export default Contact