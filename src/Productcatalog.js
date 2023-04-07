import React from "react";
import withRouter from "./withRouter";
import './Productcatalog.css';
import products from './data/products.json';

function Productcatalog(props){
  const type = props.router.params.productAnimal;

  const showInfo = (products) => {
    const productPriceString = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(products.productPrice);
    return(
      <div className="productCard roundBorder">
        <img className="productImg roundBorder" src={require( "" + products.productImg)} alt={products.productName} />
        <div className="productTxtBox">
          <p className="productName productTxt boldTxt">{products.productName}</p>
          <p className="productPrice productTxt boldTxt">{productPriceString}</p>
          <button className="addCartButton boldTxt" onClick={() => 
            addProduct(products.productID, products.productName, products.productImg, products.productPrice, productPriceString)}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }

  const addProduct = (productID, productName, productImg, productPrice, productPriceString) => {
    let newQty;
    if (props.shoppingList.hasOwnProperty(productID)){
      newQty = props.shoppingList[productID].productQty + 1;
    }
    else {
      newQty = 1;
    }

    const product = { 
      "productName": productName, 
      "productImg": productImg, 
      "productPrice": productPrice,
      "productQty": newQty,
      "productSubtotal": newQty * productPrice,
      "productPriceString": productPriceString
    };

    const paymentTotal = {
      "numberItems": props.checkOut.numberItems + 1,
      "subTotal": props.checkOut.subTotal + product.productPrice,
    }

    props.setCheckOut(paymentTotal)

    return(
      props.setShoppingList(item => {
        return(
          {...item, [productID]: product }
        );
      })
    );
  };

  const productCatalog = products.map(products => {
    if (type === "All"){
      return(
        showInfo(products)
      );
    }
    else {
      if (products.productAnimal === type){
        return(
          showInfo(products)
        );
      }
    }
    return null;
  });

  return(
    <div id="productCatalog">
      {productCatalog}
    </div>
  );
}

export default withRouter(Productcatalog);