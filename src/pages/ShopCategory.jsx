import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import Logo_dropdown from '../component/assets/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'
import Item from '../component/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shopCategory'>
      <img src={props.banner} alt="bannerImg_error" className="bannerr" style={{width:"85%", }}/>
      <div className='sort_index'>
        <div className='left_text'>
          <span className='bolt_text'>showing 1-12</span>
          <span> out of 54 products</span>
        </div>
        <div className="sortDrapdown">
          <span>Sort by </span>
          <img src={Logo_dropdown} alt="" className="logo_dropdown" />
        </div>
      </div>
      <div className="sort_items">
        {
          all_product.map((item, i)=> {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            }
            else {
              return null;
            }
          }
          )
        }
      </div>
      <div className="checkNow_btn">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory