import React from 'react';
import './Products.css';
import Product from "./Product";
import { render } from '@testing-library/react';
import { connect } from 'react-redux';


const Products = (props) => {

    console.log("From Products",props)
    return (
            <div className="Products">
                <div className="Products-wrapper">
                    {props.products.map((product) => (
                        <Product  brand={product.brand} price={product.price} name={product.name} image={product.image}
                        hassOff={product.hassOff} offValue={product.offValue} hasDiscount={product.hasDiscount} 
                        discountValue={product.discountValue} id={product.id} key={product.id}
                        />
                    ))}
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    console.log("Redux State", state)
    return {
        products : state.products
    }
}


export default connect(mapStateToProps)(Products);