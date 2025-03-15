import { CartState, CartItem } from '@/features/cart/types';
import { CartAction, CART_ACTION_TYPES } from '@/features/cart/actions';

// 初期状態
export const initialState: CartState = {
  items: [],
  total: 0,
};

/**
 * カート内のアイテムの合計金額を計算する関数
 * @param items
 */
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

/**
 * カートの状態を管理するリデューサー関数
 * @param state
 * @param action
 */
export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEM: {
      const existingItem = state.items.find(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase(),
      );

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.name.toLowerCase() === action.payload.name.toLowerCase()
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          )
        : [...state.items, { id: Date.now(), ...action.payload }];

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case CART_ACTION_TYPES.REMOVE_ITEM: {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case CART_ACTION_TYPES.INCREASE_QUANTITY: {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case CART_ACTION_TYPES.DECREASE_QUANTITY: {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          // 数量が1以下なら削除せず最小1を維持
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case CART_ACTION_TYPES.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
