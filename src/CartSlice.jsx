import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item: { name, image, description, cost, quantity }
  },
  reducers: {
    // Add a plant to the cart. If it is already there, bump its quantity.
    addItem: (state, action) => {
      const { name, image, description, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, description, cost, quantity: 1 });
      }
    },

    // Remove a plant from the cart by name.
    // Accepts either the plant name (string) or an object with a name.
    removeItem: (state, action) => {
      const name = typeof action.payload === 'string' ? action.payload : action.payload.name;
      state.items = state.items.filter((item) => item.name !== name);
    },

    // Set the quantity of a plant already in the cart.
    // Payload: { name, quantity }
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
