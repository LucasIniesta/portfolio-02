import style from './ProjectCards.module.css'
import Tag from './Tag'
import { useState } from 'react'

function ProjectCard({link, title, description, img, tags}){
    const [content, setContent] = useState(style.content2)
    const [tag, setTag] = useState(style.tag2)

    function showTag(){
        setContent(style.content)
        setTag(style.tag)
    }

    function hideTag(){
        setContent(style.content2)
        setTag(style.tag2)
    }


    return(
        <div className={style.card}>
            <div onMouseEnter={showTag} onMouseLeave={hideTag} className={content}>
                <a href={link} target='_blank'><img src={img} alt="erro" /></a>
                <div className={tag}>
                    {tags.map(tag => (
                        <Tag key={tag.index} tag={tag}/>
                    ))}
                </div>
            </div>
            <div className={style.description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard