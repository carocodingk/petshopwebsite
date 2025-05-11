import React from 'react';
import './Shoppingcart.css'
import add from './icons/add_white.svg'
import minus from './icons/minus_white.svg'
import { Link } from 'react-router-dom';

function Shoppingcart(props){

  const subtotalChart = () => {
    let shippingFee, total
    let extraFee = props.extraFee * props.checkOut.subTotal
    let subTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(props.checkOut.subTotal);
    
    if (props.checkOut.subTotal === 0){
      shippingFee = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(0);
      total = 0
    }
    else{
      shippingFee = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(props.shippingFee);
      total = props.checkOut.subTotal + extraFee + props.shippingFee 
    }
    extraFee = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(extraFee);
    total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(total);

    return(
    <div id='subtotalChart'>
      <div className='shoppingFlex shoppingTxtContainer1 shoppingBottomBorder'>
        <p className='subtotalTxtLarge'>Order summary</p>
        <p className='subtotalTxtLarge'>{props.checkOut.numberItems} Item(s)</p>
      </div>
      <div className='shoppingTxtContainer shoppingBottomBorder'>
        <div className='shoppingFlex'>
          <p>Item(s) subtotal</p>
          <p>{subTotal}</p>
        </div>
        <div className='shoppingFlex'>
          <p>Extra fees (8.875%)</p>
          <p>{extraFee}</p>
        </div>
        <div className='shoppingFlex'>
          <p>Shipping</p>
          <p>{shippingFee}</p>
        </div>
      </div>
      <div className='shoppingFlex shoppingTxtContainer shoppingBottomBorder'>
        <p className='subtotalTxtLarge'>Order total</p>
        <p className='subtotalTxtLarge'>{total}</p>
      </div>
      <Link to="/web-application-retail-pet-store-react/Signin">
      <button id='checkoutButton' className='shoppingButton'>CHECKOUT</button>
      </Link>
    </div>
    );
  }

  const shoppingCart = Object.entries(props.shoppingList).map(item => {
    let subTotal = item[1].productQty * item[1].productPrice
    subTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(subTotal);
    return(
      <div id="product" className='shoppingFlex shoppingItem shoppingBottomBorder'>
        <img className='shoppingImg' src={require("" + item[1].productImg)} alt={item[1].productName}/>
        <div className='shoppingContent'>
          <p className='shoppingTxtMedium txtBold'>{item[1].productName}</p>
          <div className='shoppingFlex'>
            <div>
              <p>Product ID: {item[0]}</p>
              <p>{item[1].productPriceString}</p>
              <button className='removeButton' onClick={() => {removeProduct(item[0])}}>Remove</button>
            </div>
            <div>
              <p>Quantity:</p>
              <div className='shoppingFlex'>
                <button className='shoppingButton' onClick={() => {modifyQty(false, item[0], item[1].productName, item[1].productImg, item[1].productPrice, item[1].productPriceString)}}>
                  <img src={minus} alt="increase quantity icon"/>
                </button>
                <p className='productQty'>{item[1].productQty}</p>
                <button className='shoppingButton' onClick={() => {modifyQty(true, item[0], item[1].productName, item[1].productImg, item[1].productPrice, item[1].productPriceString)}}>
                  <img src={add} alt="increase quantity icon"/>
                </button>
              </div>
              <p className='txtBold'>Subtotal: {subTotal}</p>
            </div>
          </div>
        </div>
      </div>
    );
  })

  const removeProduct = (productID => {
    let newShoppingList = {}
    let newPaymentTotal
    
    Object.entries(props.shoppingList).map((item) => {
      if (item[0] !== productID){
        newShoppingList[item[0]] = item[1]
      }
      else {
        newPaymentTotal = {
          "numberItems": props.checkOut.numberItems - item[1].productQty,
          "subTotal": props.checkOut.subTotal - item[1].productSubtotal
        }
      }
      return (newShoppingList)
    })
    return (
      props.setShoppingList(newShoppingList),
      props.setCheckOut(newPaymentTotal)
    )
  })
   
  const modifyQty = (sum, productID, productName, productImg, productPrice, productPriceString) => {
    let newQty, numberItems, subTotal, product;  
    if (sum){
      newQty = props.shoppingList[productID].productQty + 1;
      numberItems = props.checkOut.numberItems + 1;
      subTotal = props.checkOut.subTotal + productPrice
    }
    else {
      newQty = props.shoppingList[productID].productQty - 1;
      if (newQty >= 1){
        numberItems = props.checkOut.numberItems - 1;
        subTotal = props.checkOut.subTotal - productPrice
      }
      else{
        newQty = 1
        numberItems = props.checkOut.numberItems
        subTotal = props.checkOut.subTotal
      }
    }

    product = {
      "productName": productName,
      "productImg": productImg,
      "productPrice": productPrice,
      "productQty": newQty,
      "productSubtotal": newQty * productPrice,
      "productPriceString": productPriceString
    }

    const paymentTotal = {
      "numberItems": numberItems,
      "subTotal": subTotal ,
    }

    return(
      props.setCheckOut(paymentTotal),
      props.setShoppingList(item => {
        return(
          {...item, [productID]: product}
        );
      })
    );
  }

  return(
    <div id='shoppingCenter'>
      <div id="shoppingCart">
        <h1 className='shoppingBottomBorder'>Shopping cart</h1>
        <div id='shoppingContainer' className='shoppingFlex'>
          <div id='shoppingCartContainer'>
            {shoppingCart}
          </div>
          {subtotalChart()}
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;