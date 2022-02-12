import React,{useState} from 'react'


const ProductCard = (item) => {
    
    let [quantity, setQuantity] = useState(0);
    const handleDecrease = () =>{
        if(quantity > 0){
            setQuantity(--quantity);
        }
    }
    const handleIncrease = () =>{
        setQuantity(++quantity);
    }
  return (
    <div className='productCardWrapper'>
        <img src={item.item.image} alt="" style={{width:'80px'}} />
        <div className="productDetails">
            <p>{item.item.title}</p>
            <p>{item.item.price}</p>
            <p>{item.item.description}</p>
        </div>
        <div className='productQuantity'>
            <div onClick={handleDecrease}>-</div>
            <p>{quantity}</p>
            <div onClick={handleIncrease}>+</div>
        </div>
    </div>
  )
}

export default ProductCard