import styles from './TechCard.module.css'
import { CgWebsite } from "react-icons/cg";

function TechCard(){
    return(
        <div className={styles.techCard}>
            <div className={styles.icon}>
                <CgWebsite size='80%'/>
            </div>
            <div className={styles.content}>
            <h4>TecTitle</h4>
            <p>
                Lorem ipsum dolor sit.
            </p>
            </div>
        </div>
    )
}

export default TechCard