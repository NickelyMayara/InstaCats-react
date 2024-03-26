import './header.css'
import imgCats from '/logo.png'

const Header = () => {
    return (
        <header className='meuHeader'>
            <img src={imgCats} alt="" />
            <nav className='nav-bar'>
                <a href="">LOGIN</a>
                <a href="">REGISTRAR</a>
            </nav>
        </header>
    )
}

export default Header;