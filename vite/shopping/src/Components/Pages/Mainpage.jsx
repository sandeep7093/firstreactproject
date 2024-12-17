import React, { useState } from 'react'
import Header from '../Shopcompo/Header'
import Banner from '../Shopcompo/Banner'
import Collections from '../Shopcompo/Collections'
import {Gents,Ladies} from '../data'
import Women from '../Shopcompo/Women'
import Footer from '../Shopcompo/Footer'

const Mainpage = () => {
    const [men,getfash]=useState(Gents)
    const [women,fash]=useState(Ladies)
    
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections  men={men} women={women} alt="men"/>
        <Women women={women}/>
        <Footer/>
       
      
    </div>
  )
}

export default Mainpage
