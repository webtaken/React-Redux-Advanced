import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  count: 0,
  products: [],
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.count = action.payload.count;
      state.products = action.payload.products;
    },
    // le pasamos el id del producto en la acción
    addToCart(state, action) {
      let indexItem = state.products.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.changed = true;
      if (indexItem === -1) {
        // se añadió un nuevo item 
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1 // se crea por primera vez
        });
      } else {
        // se añadió un item existente, incrementamos solo su cantidad
        state.products[indexItem].quantity++;
      }

      state.count++; // siempre incrementamos la cantidad de items en el carrito
    },
    removeFromCart(state, action) {
      let indexItem = state.products.findIndex((item) => {
        return item.id === action.payload;
      });
      state.changed = true;
      // si existe el item
      if (indexItem !== -1) {
        state.products[indexItem].quantity--;
        if (state.products[indexItem].quantity === 0) {
          // ya no hay items, debemos removerlo de la lista de productos
          let id_item = state.products[indexItem].id;
          // extraemos solo los items que no tengan el mismo id
          state.products = state.products.filter(item => item.id !== id_item);
        }
        state.count--; // al final reducimos la cantidad de items presentes
      }
      // si no existe no hacemos nada
    }
  }
});


export const cartActions = cartSlice.actions;
export default cartSlice;