let initializeState = {

            basket_items : [{
                id : 4,
                name : "za ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59,
                hasOff : true,
                offValue : 51,
                image  : "/images/1.jpg",
                price : 29,
                count : 1,
            }],
            basket_items_id : [4],


}

export default (state = initializeState , action) => {

    switch(action.type) {
        case "ADD_PRODUCT":
            return {...state, basket_items : [...state.basket_items, {...action.payload.product, count:1}], basket_items_id : [...state.basket_items_id, action.payload.product.id]}
            break;
        case "INCREAMENT_PRODUCT":
            let newState = {...state};
            newState.basket_items[action.payload.index].count++;
            return newState;
            break;
        case "DELETE_PRODUCT":
            return {...state, basket_items:state.basket_items.filter((item) => item.id !=action.payload.id), basket_items_id : state.basket_items_id.filter((id) => id != action.payload.id)}
        default:
            return state;
    }
}