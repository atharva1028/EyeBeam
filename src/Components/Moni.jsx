import React from 'react'

import Progressive from './Progressive'
import PowerGlass from './PowerGlass'
import SunGlass from './Sunglass'
import Lens from './Lens'
const Moni = () => {
  return (
    <>
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>FREE PROGRESSIVE LENSES</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/free.png" width={'100%'} /></a>
    </div>
    <Progressive/>
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>FREE ONLINE EYE TEST</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/onlinetest.png" width={'100%'} /></a>
    </div>
    
    
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>AS SEEN ON MOUNI ROY</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/moni.gif" width={'100%'} /></a>
    </div>
    
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>AS SEEN ON KARAN JOHAR</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/karan.gif" width={'100%'} /></a>
    </div>
    <SunGlass/>
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>AS SEEN ON SHARK TANK</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/shark.gif" width={'100%'} /></a>
    </div>
    <PowerGlass/>
    <div className='d-flex justify-content-center pt-5 pb-5'>
    <h3>AQUACOLOR GLAM UP WITH LENSES</h3>
    </div>
    <div>
    <a href=""><img src="../public/images/kiara.gif" width={'100%'} /></a>
    </div>
    <Lens/>
    </>
  )
}

export default Moni