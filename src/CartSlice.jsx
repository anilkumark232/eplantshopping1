import { createSlice } from '@reduxjs/toolkit';
import CartItem from './CartItem';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item1 = action.payload;
      const existingItem = state.items.find(item => item.name === item1.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item1, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export const selectTotalQuantity = (state) =>  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default CartSlice.reducer;
