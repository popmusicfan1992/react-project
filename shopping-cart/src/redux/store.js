import { createStore } from 'redux';
import cartReducer from './cartReducer';

// Tạo Redux store với reducer đã xây dựng
const store = createStore(cartReducer);

export default store;
