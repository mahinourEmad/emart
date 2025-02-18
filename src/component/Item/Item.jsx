import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='Item' style={{width:"250px"}}>
        <img src={props.image} style={{width:'100%'}}/>
        <p>{props.name}</p>
        <div className="Item_Price">
            <div className="item_new_price">${props.new_price}</div>
            <div className='item_old_price'>${props.old_price}</div>
        </div>

    </div>
  )
}

export default Item