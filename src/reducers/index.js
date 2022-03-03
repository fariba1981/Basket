import products from "./products";
import basket from "./basket";
import { combineReducers } from "redux";



export default combineReducers({
    products : products,
    basket : basket,
})