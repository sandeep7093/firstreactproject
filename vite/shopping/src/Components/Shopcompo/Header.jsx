import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
    <div className="left">
        <div className="title">
            <h2>Shopping Mall</h2>
        </div>
       
    </div>
    <div className="center">
        <ul>
            <li>Womens</li>
            <li>Mens</li>
            <li>Childrens</li>
        </ul>
    </div>
    <div className="search">
        <input type="text" placeholder='Search...'/>
    </div>
    <div className="right">
        <div className="signin">
            <p>Signin/Signup</p>
        </div>
        <div className="cart">
            <p>Cart</p>
        </div>
    </div>
      
    </div>
  )
}

export default Header
