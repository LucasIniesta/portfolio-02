import styles from './Tag.module.css'

function Tag({tag}){
    return(
        <div className={styles.tag}>
            {tag}
        </div>
    )
}

export default Tag