import ProjectCard from '../elements/ProjectCards'
import style from './Projects.module.css'

function Projects({projects}){
    return(
        <div id='projects' className={style.projects}>
            <h1>Projetos</h1>
            <div className={style.cards}>
            {projects.map(project =>(
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description}
                    img={project.img}
                    tags={project.tags}
                    link={project.link}
                />
            ))}
            </div>
        </div>
    )
}

export default Projects