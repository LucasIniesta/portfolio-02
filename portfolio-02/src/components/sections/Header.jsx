import style from './Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <h1>DNC</h1>
            <div>
                <ul>
                    <li>contato</li>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>home</li>
                </ul>
                <h1>front-end.web(developer)</h1>
            </div>
        </header>
    )
}

export default Header