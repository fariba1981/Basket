import React from "react";
import './BasketItem.css';
import {connect} from 'react-redux';
import {deleteProductFromBasket} from '../actions/index'


class BasketItem extends React.Component {

    removeProductFromBasket = () => {
        let productId = this.props.basketInfo['id'];
        let index = this.props.basket.basket_items_id.findIndex(elementId => elementId === productId);
        
        if(index>=0) {
                this.props.deleteProductFromBasket(productId);
        }
    }

    render() {
        return (
            <div className="BasketItem">
                <div className="BasketItem-close-btn c-ui-icon c-ui-icon--remove" onClick={
                    this.removeProductFromBasket 
                }></div>
                <div className="BasketItem-image">
                    <div className="BasketItem-image--wrapper">
                        <div className="BasketItem-image--overlay"></div>
                        <img src={this.props.basketInfo['image']} alt={this.props.basketInfo['name']}/>
                    </div>
                </div>
                <div className="BasketItem-detailed">
                    <div className="BasketItem-brand">{this.props.basketInfo['brand']}</div>
                    <div className="BasketItem-info" data-lable="">{this.props.basketInfo['name']}</div>
                    <div className="BasketItem-info" data-lable="Amount:">{this.props.basketInfo['count']}</div>
                    <div className="BasketItem-price-container">
                        <div className="BasketItem-price" data-currency="$">{(this.props.basketInfo['price']).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
                        {(this.props.basketInfo['hasDiscount'] && this.props.basketInfo['discountValue'] > 0) && (<div className="BasketItem-discount" data-currency="$">{(this.props.basketInfo['discountValue']).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>)}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        basket : state.basket,
    }
}

export default connect(mapStateToProps , {
    deleteProductFromBasket,
})(BasketItem);