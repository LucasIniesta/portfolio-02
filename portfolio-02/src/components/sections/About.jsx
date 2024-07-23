import styles from './About.module.css'

function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre mim</h1>
            <div>
                <h3>Nome</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex distinctio, error unde commodi fugit temporibus dolorum corporis doloribus exercitationem consequatur laudantium et aspernatur inventore, adipisci eaque vero molestiae nihil architecto!
                </p>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About