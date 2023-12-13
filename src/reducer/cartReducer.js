

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // takle the repeating product in cartItem
    let existingProduct = state.cart.find((curItem) => curItem.id === id + color);

    if (existingProduct) {
      let updateProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,

          };
        }
        else {
          return curElem
        }


      });
      return {
        ...state,
        cart: updateProduct,
      }

    }
    else {



      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        amount,
        color,
        image: product.image[0].url,
        price: product.price,
        max: product.stock
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct]
      }
    }
  }

  // set increment and decrement function 

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if(decAmount <= 1){
          decAmount= 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      }
      else {
        return curElem;
      }
    });
    return{
      ...state,cart:updatedProduct,
    };
  };

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if(incAmount >= curElem.max){
          incAmount= curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      }
      else {
        return curElem;
      }
    });
    return{
      ...state,cart:updatedProduct,
    };
  };



  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    }
  };

  // code to empty cart

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }

  };
  return (
    state


  );
}

export default cartReducer
