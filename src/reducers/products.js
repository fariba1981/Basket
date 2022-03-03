let initializeState =  [
    {
        id : 1,
        name : " 153113872",
        brand : "Zi",
        hasDiscount : true,
        discountValue : 235,
        hasOff : true,
        offValue : 51,
        image  : "/images/1.jpg" ,
        price : 90
    },
    {
        id : 2,
        name : "J537G8-CRP",
        brand : "LC Waikiki",
        hasDiscount : true,
        discountValue : 206,
        hasOff : true,
        offValue : 30,
        image  : "/images/1.jpg",
        price : 144
    },
    {
        id : 3,
        name : "dsfsd",
        brand : "Mango",
        hasDiscount : false,
        discountValue : 0,
        hasOff : false,
        offValue : 0,
        image  : "/images/1.jpg",
        price : 89
    },
    {
        id : 4,
        name : "d444 ",
        brand : "FRED",
        hasDiscount : true,
        discountValue : 59,
        hasOff : true,
        offValue : 51,
        image  : "/images/1.jpg",
        price : 29
    },

]


export default (state = initializeState , action) => {

    return state;
}