import style from './Header.module.css'

function Header({name, stack}){

    return(
        <header id='home' className={style.header}>
            <h1>{name}</h1>
            <div>
                <ul>
                    <li><a href="#contact">Contato</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>
                <h1>{stack}</h1>
            </div>
        </header>
    )
}

export default Header