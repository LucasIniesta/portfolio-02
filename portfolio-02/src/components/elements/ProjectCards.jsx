import style from './ProjectCards.module.css'
import trilhaProgramador from '../../assets/projects/trilhaProgramador.jpg'

function ProjectCard(){
    return(
        <div className={style.card}>
            <div className={style.content}>
                <img src={trilhaProgramador} alt="erro" />
            </div>
            <div className={style.description}>
                <h3>Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora error consequuntur recusandae fugit odit voluptates rem, quis, deleniti impedit alias amet vero officia mollitia ipsa soluta! Esse aliquam unde minima?
                </p>
            </div>
        </div>
    )
}

export default ProjectCard