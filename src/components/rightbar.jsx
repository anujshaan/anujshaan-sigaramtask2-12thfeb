import React from 'react'

const Rightbar = () => {
  return (
    <div className='rightbarWrapper'>
      <div className='rightbarHeader'>
        <div style={{display:'flex'}}>
          <p>My Card</p>
          <small>clear cart</small>
        </div>
        <hr />
      </div>
      <div>

      </div>
      <div className='cartValue'>
        <hr />
        <p>Items Total</p>
        <p>$200</p>
      <button className='checkoutButton'>Check Out</button>
      </div>
    </div>
  )
}

export default Rightbar