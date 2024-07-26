import style from './Header.module.css'
import { useState, useEffect } from 'react'

function Header({title, stack}){
    const [text, setText] = useState('')
    const texts = stack
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [time, setTime] = useState(100)
    
    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, [time])
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % texts.length
        let fullText = texts[i]  
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setTime(40)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setTime(100)
            setLoop(loop+1)
        }
    }

    return(
        <header id='home' className={style.header}>
            <h1>{title}</h1>
            <div>
                <ul>
                    <li><a href="#contact">Contato</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>
                <h1>{text}</h1>
            </div>
        </header>
    )
}

export default Header