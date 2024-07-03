import { createSlice } from '@reduxjs/toolkit';

// Initial state for your slice
const initialState = {
  products: [],
  userInfo: null,
  searchQuery: '',
  selectedCategory: '',
  orders: [],
  loading: false,
  error: null,
  userOrders: {},
  userCart: {}
};

// Create a slice using Redux Toolkit's createSlice
export const amazonSlice = createSlice({
  name: 'amazon', // Slice name
  initialState, // Initial state defined above
  reducers: {
    // Reducer for adding items to the cart
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      // Check if the item is already in the cart
      const item = state.products.find((item) => item.id === id);
      if (item) {
        // If item exists, increment its quantity
        item.quantity += quantity;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    // Reducer for incrementing item quantity in the cart
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },

    // Reducer for decrementing item quantity in the cart
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = Math.max(1, item.quantity - 1); // Ensure quantity doesn't go below 1
      }
    },

    // Reducer for deleting an item from the cart
    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },

    // Reducer for resetting the cart to empty
    resetCart: (state) => {
      state.products = [];
    },

    // Reducer for setting user information
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      console.log('Setting userInfo:', action.payload);
    },

    // Reducer for signing user out
    userSignOut: (state) => {
      state.userInfo = null;
    },

    // Reducer for setting search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    // Reducer for setting selected category
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    // Reducer for setting products list
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    // Reducer for placing an order
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    // Reducer for setting orders list
    setOrders: (state, action) => {
      state.orders = action.payload;
    },

    // Reducer for setting loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Reducer for setting error state
    setError: (state, action) => {
      state.error = action.payload;
    },

    // Reducer for clearing the cart
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Extract action creators from the slice
export const {
  addToCart,
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
  setUserInfo,
  userSignOut,
  setProducts,
  setSearchQuery,
  setSelectedCategory,
  placeOrder,
  setOrders,
  setLoading,
  setError,
  clearCart,
} = amazonSlice.actions;

// Export the reducer function
export default amazonSlice.reducer;
