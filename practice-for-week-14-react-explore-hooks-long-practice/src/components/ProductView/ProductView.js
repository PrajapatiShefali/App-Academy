import React, { useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
const [sideOpen,setSideOpen]=useState(true)
const [selectItem,setSelectItem]=useState('')
const [isSelected,setIsSelected]=useState(false)
useEffect(()=>{
  if (selectItem)
    setSideOpen(true)
},[selectItem])
useEffect(()=>{
  if (!sideOpen)
    setSelectItem('')
},[sideOpen])
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectItem.id===item.id}
              onClick={() =>setSelectItem(item)}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectItem}/>
      </div>
    </div>
  );
}

export default ProductView;