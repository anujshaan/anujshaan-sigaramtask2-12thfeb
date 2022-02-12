import React from 'react'

const ProductCard = (item) => {
    
  return (
    <div className='productCardWrapper'>
        <img src={item.item.image} alt="" style={{width:'80px'}} />
        <div className="productDetails">
            <p>{item.item.title}</p>
            <p>{item.item.price}</p>
            <p>{item.item.description}</p>
        </div>
        <div>
            <p>quantity</p>
        </div>
    </div>
  )
}

export default ProductCard