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
      <div className='shoppingFlex shoppingSides shoppingTxtContainer shoppingBottomBorder'>
        <p className='shoppingTxtLarge txtBold'>Order summary</p>
        <p className='shoppingTxtLarge txtBold'>{props.checkOut.numberItems} Item(s)</p>
      </div>
      <div className='shoppingTxtContainer shoppingBottomBorder'>
        <div className='shoppingFlex shoppingSides'>
          <p>Item(s) subtotal</p>
          <p>{subTotal}</p>
        </div>
        <div className='shoppingFlex shoppingSides'>
          <p>Extra fees (8.875%)</p>
          <p>{extraFee}</p>
        </div>
        <div className='shoppingFlex shoppingSides'>
          <p>Shipping</p>
          <p>{shippingFee}</p>
        </div>
      </div>
      <div className='shoppingFlex shoppingSides shoppingTxtContainer shoppingBottomBorder'>
        <p className='shoppingTxtLarge txtBold'>Order total</p>
        <p className='shoppingTxtLarge txtBold'>{total}</p>
      </div>
      <Link to="/Signin">
      <button id='checkoutButton' className='shoppingButton'>CHECKOUT</button>
      </Link>
    </div>
    );
  }

  const shoppingCart = Object.entries(props.shoppingList).map(item => {
    let subTotal = item[1].productQty * item[1].productPrice
    subTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(subTotal);
    return(
      <div className='shoppingFlex shoppingItem shoppingBottomBorder'>
        <img className='shoppingImg' src={require("" + item[1].productImg)} alt={item[1].productName}/>
        <div className='shoppingContent'>
          <p className='shoppingTxtMedium txtBold'>{item[1].productName}</p>
          <div className='shoppingFlex shoppingSides'>
            <div>
              <p>Product ID: {item[0]}</p>
              <p>{item[1].productPriceString}</p>
              <button className='removeButton' onClick={() => {removeProduct(item[0])}}>Remove</button>
            </div>
            <div className='rightPannel'>
              <p>Quantity:</p>
              <div className='shoppingFlex'>
                <button className='shoppingButton' onClick={() => {modifyQty(true, item[0], item[1].productName, item[1].productImg, item[1].productPrice, item[1].productPriceString)}}>
                  <img src={add} alt="increase quantity icon"/>
                </button>
                <p id='productQty'>{item[1].productQty}</p>
                <button className='shoppingButton' onClick={() => {modifyQty(false, item[0], item[1].productName, item[1].productImg, item[1].productPrice, item[1].productPriceString)}}>
                  <img src={minus} alt="increase quantity icon"/>
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
    <div className='shoppingFlex shoppingCenter'>
      <div id="shoppingCart">
        <p id='shoppingCartTitle' className='shoppingBottomBorder'>Shopping cart</p>
        <div className='shoppingFlex shoppingSides'>
          <div>
            {shoppingCart}
          </div>
          {subtotalChart()}
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;