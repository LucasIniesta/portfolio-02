import ProjectCard from '../elements/ProjectCards'
import style from './Projects.module.css'

function Projects(){
    return(
        <div className={style.projects}>
            <h1>Projetos</h1>
            <div className={style.cards}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Projects