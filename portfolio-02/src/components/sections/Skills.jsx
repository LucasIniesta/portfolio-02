import SkillsCard from '../elements/SkillsCard'
import styles from './Skills.module.css'

function Skills({skills}){
    return(
        <div className={styles.skills}>
            {skills && skills.map(skill => (
                <SkillsCard 
                    key={skill.id} 
                    title={skill.title}
                    items={skill.items}
                />
            ))}
        </div>
    )
}

export default Skills