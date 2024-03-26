import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import MainImg from './Main-Img/main-img'
import Footer from './Footer/footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <MainImg/>
  <Footer/>
  </React.StrictMode>,
)
