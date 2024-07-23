import TechCard from '../elements/TechCard'
import styles from './Techs.module.css'

function Techs(){
    return(
        <div className={styles.techs}>
            <TechCard/>
            <TechCard/>
            <TechCard/>
            <TechCard/>
        </div>
    )
}

export default Techs