import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false,
  notification: null
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    // le pasamos el id del producto en la acción
    toggleViewCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status, // pending, error or success
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;