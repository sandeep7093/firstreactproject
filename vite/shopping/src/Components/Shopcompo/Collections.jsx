import React from 'react'

const Collections = (props) => {
  const {title,image1,image2,image3,image4,image5,image6}=props.men
 

  return (
    <div className='collection'>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="pics">
        <img src={image1} alt="image1"/>
        <img src={image2} alt="image2"/>
        <img src={image3} alt="image3"/>
        <img src={image4} alt="image4"/>
        <img src={image5} alt="image5"/>
        <img src={image6} alt="image6"/>
      </div>
     
      
    </div>
  )
}

export default Collections
