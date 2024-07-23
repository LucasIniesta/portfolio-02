import styles from './SkillsCard.module.css'

function SkillsCard(){
    return(
        <div className={styles.skillsCard}>
            <div>
                <h2>Title</h2>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </div>
    )
}

export default SkillsCard