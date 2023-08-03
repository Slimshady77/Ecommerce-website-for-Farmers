import{
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS
} from "../Constants/ProductConstant";


export const productReducer = (state= { products: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            
            return{
                loading:true,
                product:[]
            };
    
        case ALL_PRODUCT_SUCCESS:
            
            return{
                loading:false,
                product:action.payload.products,
                productCount: action.payload.productsCount,

            };

        case ALL_PRODUCT_FAIL:
            
            return{
                loading:false,
                Error:action.payload.products
            };  
            
        case CLEAR_ERRORS:
            
            return{
              ...state,
                Error:null, 
            };      
        default:
            return state;
    }
};