// Khởi tạo state ban đầu với một mảng rỗng cho giỏ hàng
const initialState = {
    cartItems: []
  };
  
  // Reducer để xử lý các hành động thêm, tăng giảm số lượng và xóa sản phẩm khỏi giỏ hàng
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = action.payload;
        // Kiểm tra nếu sản phẩm đã có trong giỏ thì chỉ tăng số lượng
        const existItem = state.cartItems.find(x => x.id === item.id);
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(x =>
              x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
            )
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...item, quantity: 1 }]
          };
        }
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  