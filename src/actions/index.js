export const addProductToBasket = (product) => {
    return {
        type : "ADD_PRODUCT",
        payload : {
            product 
        }
    }
}

export const increamentProductToBasket = (index) => {
    return{
        type : "INCREAMENT_PRODUCT",
        payload : {
            index 
        }
    }

}

export const deleteProductFromBasket = (id) => {
    return{
        type : "DELETE_PRODUCT",
        payload : {
            id
        }
    }
}