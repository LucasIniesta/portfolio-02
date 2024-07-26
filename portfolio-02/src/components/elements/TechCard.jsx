import styles from './TechCard.module.css'

function TechCard({title, description, icon: Icon}){
    return(
        <div className={styles.techCard}>
            <div className={styles.icon}>
                <Icon size='80%'/>
            </div>
            <div className={styles.content}>
            <h4>{title}</h4>
            <p>
                {description}
            </p>
            </div>
        </div>
    )
}

export default TechCard