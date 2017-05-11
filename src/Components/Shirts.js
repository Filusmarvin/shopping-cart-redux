import React from 'react'
import './Css.css'
require



// showInput()
// <input type="text" ref={(input)=> {this.text = input} }/>

const ShirtList = ({ shirts, cartItems, shirtTypes, addShirt, removeShirt }) => (

<div>
<p> Cart Items{cartItems} </p>
  <ul className="shirts">
    {shirtTypes.map((shirtType, index ) => {
      let src = require(shirtType.src)
      return (
          <li key={index}>
            <h1>{shirtType.name}</h1>
            <img src={src} alt="picture"/>
            <div className="footer">
              <p>{shirtType.color}</p>
              <p>{shirtType.size}</p>
              <p>${shirtType.price}</p>
            </div>
            <div className="buttons">
              <div> <button onClick={addShirt.bind(this, index)}> add shirt to cart</button> </div>
            </div>
          </li>
      )
      }
    )}
  </ul>

  <ul className="shirt-cart" >
    {shirts.map((shirt, index)=> {
      let src = require(shirt.src)
      return (
        <li className="cart"key={index}>
        <div className="cartItems">
          <img className="cartPic" src={src} alt="picture"/>
          <div className="shirtBox">
            <p>{shirt.name}</p>
            <p>{shirt.color}</p>
            <p>${shirt.size}</p>
            <p>{shirt.price}</p>
          </div>
        </div>
        <div className="addButton"> <button onClick={removeShirt.bind(this, index)}> remove shirt from cart </button> </div>
        </li>
      )
    })}
  </ul>
  <button > calculate price </button>
</div>
)
export default ShirtList
