import React from 'react';
import Header from "./components/Header";
import './App.css';
import Products from "./components/Products";
import {element, func} from "prop-types";
import BasketItem from './components/BasketItem';


export default class App  extends React.Component {


   



   


    render() {
        return (
            <div>
                <Header/>
                <Products/>
            </div>
        );
    }
};