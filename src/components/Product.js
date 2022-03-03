import React from 'react';
import './Product.css';
import propTypes from 'prop-types';
import POST_IMG from "../assets/images/1.jpg";
import {connect} from 'react-redux';
import {addProductToBasket , increamentProductToBasket} from '../actions/index'


class Product extends React.Component {


    addProductToBasketHandler = () => {
        let productId = this.props.id;
        let product = this.props.products.find(product => productId == product.id);
        let index = this.props.basket.basket_items.findIndex(element => product.id === element.id);
        if(index<0) {
            this.props.addProductToBasket(product);
        }else {
            this.props.increamentProductToBasket(index)
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="Product">
                <div className="Product-container">
                    <div className="Product-image">
                        <div className="Product-image-overlay"></div>
                        <img src={POST_IMG} alt="Product Images"/>
                    </div>
                    <div className="Product-info">
                        {this.props.hasOff && (<div className="bottom-option">
                            <span>٪{this.props.offValue} Off</span>
                        </div>)}
                        <div className="Product-info-container">
                            <div className="Product-brand">
                                {this.props.brand}
                            </div>
                            {this.props.hasDiscount && (<div className="Product-discount">
                                {(this.props.discountValue).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                 $</div>)}
                        </div>
                        <div className="Product-info-container">
                            <div className="Product-name">{this.props.name}</div>
                            <div className="Product-price-container">
                            <span className="Product-price">
                                {(this.props.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                            </span>

                                <span className="Product-unit">
                                $
                            </span>
                            </div>
                        </div>
                        <div className="Product-info-container Product-info-container--cart-btns" >
                            <div className="Product-add-to-cart" onClick={this.addProductToBasketHandler} >
                                <span className="c-ui-icon c-ui-icon--basket"></span>
                                <span className="Product-add-to-cart-text" >Buy</span>
                            </div>
                            <div className="Product-add-to-cart-later">
                                <span className="Product-add-to-cart-text">Buy Later</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

Product.propTypes = {
    name : propTypes.string.isRequired,
    brand : propTypes.string.isRequired,
    price : propTypes.number.isRequired,
    image : propTypes.object.isRequired,
    hasOff : propTypes.bool,
    hasDiscount : propTypes.bool,
    offValue : propTypes.number,
    discountValue : propTypes.number,
}

Product.defaultProps = {
    hassOff : false,
    offValue : 0,
    hasDiscount: false,
    discountValue:0 
}
let mapStateToProps = (state) => {
    return {
        products : state.products,
        basket : state.basket,
    }
}

export default connect(mapStateToProps, {
    addProductToBasket, increamentProductToBasket
})(Product);