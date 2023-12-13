import { createContext, useReducer ,useContext,useEffect} from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();

let getLocalCartData = () =>{
    let localCartData = localStorage.getItem("myCartData");
    if(localCartData=== null){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    };
}
const initialState ={
    // cart: [],
    cart: getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
}

const CartProvider =({children}) =>{

    const [state,dispatch] = useReducer(reducer, initialState)


    const addToCart =(id,color,amount,product) =>{
        dispatch({type: "ADD_TO_CART", payload:{id,color,amount,product}});
    };

    // code for decrement and increment function
    const setDecrease =(id) =>{
        dispatch({type: "SET_DECREMENT", payload: id});
    };

    const setIncrease =(id) =>{
        dispatch({type : "SET_INCREMENT", payload: id});
    }

    // code to remove to item from list
    const removeItem =(id) =>{
        dispatch({type: "REMOVE_ITEM",payload :id})
    }

    // clear cart function define
    const clearCart =() =>{
        dispatch({type: "CLEAR_CART"});
    };

    // add data into local Storage
    useEffect(() => {
      localStorage.setItem("myCartData", JSON.stringify(state.cart))
    
     
    }, [state.cart])
    

    return( <CartContext.Provider value ={{...state, addToCart,removeItem,clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>
    );
};

const useCartContext =() =>{
    
    return useContext(CartContext);
};

export {CartProvider, useCartContext};