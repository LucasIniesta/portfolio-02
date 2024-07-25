import styles from './About.module.css'

function About({name, description, insta, git, mail}){
    return(
        <div id='about' className={styles.about}>
            <h1>Sobre mim</h1>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                    <li><a href={insta} target='_blank'>Instagram</a></li>
                    <li><a href={git} target='_blank'>GitHub</a></li>
                    <li><a 
                        href={mail} target='_blank'>Email</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About