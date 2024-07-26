import styles from './SkillsCard.module.css'

function SkillsCard({title, items}){
    return(
        <div className={styles.skillsCard}>
            <div>
                <h2>{title}</h2>
                <ul>
                    {items && items.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillsCard