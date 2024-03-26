import './main-img.css'
import imgMain from '/body-img.png'

const MainImg = () => {
    return (
        <header className='meuMain'>
            <img className='imgMain' src={imgMain} alt="" />
        </header>
    )
}

export default MainImg;