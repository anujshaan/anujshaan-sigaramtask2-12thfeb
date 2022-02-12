import React,{useState} from 'react'


const ProductCard = (item) => {
    
  return (
    <div className='productCardWrapper'>
        <img src={item.item.image} alt="" style={{width:'80px'}} />
        <div className="productDetails">
            <p>{item.item.title}</p>
            <p>{item.item.price}</p>
            <p>{item.item.description}</p>
        </div>
        <div className='productQuantity'>
            <div>-</div>
            <p>1</p>
            <div>+</div>
        </div>
    </div>
  )
}

export default ProductCard