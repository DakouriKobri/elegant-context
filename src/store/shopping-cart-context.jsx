// NPM Packages
import { createContext, useReducer } from 'react';

// Project Imports
import { shoppingCartReducer } from './reducers';

const defaultContextValue = {
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
};

const initialState = {
  items: [],
};

export const CartContext = createContext(defaultContextValue);

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initialState
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });
  }

  const cartContextValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
