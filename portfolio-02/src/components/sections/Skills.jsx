import SkillsCard from '../elements/SkillsCard'
import styles from './Skills.module.css'

function Skills(){
    return(
        <div className={styles.skills}>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
        </div>
    )
}

export default Skills