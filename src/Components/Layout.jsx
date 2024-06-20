import React from 'react'
import CardLayout from './CardGlass.jsx'
import BlueScreen from './BlueScreen.jsx'
import SwiperCard from './Swiper-1.jsx'
import Purpose from './Purpose.jsx'
import Moni from './Moni.jsx'
import NavbarComponent from './NavbarComponent.jsx'
import MyNavbar from './MyNavbar.jsx'

import Eyeglass from './Eyeglass.jsx'
const Layout = () => {
  return (
    <>
        <MyNavbar/>
        <NavbarComponent />
        <CardLayout />
        <BlueScreen />
        <SwiperCard />
        <Purpose />
        <Eyeglass/>
        <Moni />
        
    </>
  )
}

export default Layout