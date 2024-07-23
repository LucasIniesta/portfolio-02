import styles from './Contact.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";



function Contact(){
    return(
        <div className={styles.contact}>
            <h1>Contato</h1>
            <ul>
                <li><a href=""><FaLinkedin color='#0A66C2' size='45px'/></a></li>
                <li><a href=""><FaInstagram color='#000000' size='45px' /></a></li>
                <li><a href=""><FaGithub color='#000000' size='45px' /></a></li>
            </ul>
        </div>
    )
}

export default Contact