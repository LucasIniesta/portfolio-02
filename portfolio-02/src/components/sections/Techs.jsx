import TechCard from '../elements/TechCard'
import styles from './Techs.module.css'

function Techs({techs}){
    return(
        <div className={styles.techs}>
            {techs.map(tech =>(
                <TechCard key={tech.id} title={tech.title} description={tech.description} icon={tech.icon}/>
            ))}
        </div>
    )
}

export default Techs