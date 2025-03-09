// 商品アイテムの型定義
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// カートの状態を定義
export type CartState = {
  items: CartItem[];
  total: number;
};

// アクションの型定義
export type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "id"> }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "INCREASE_QUANTITY"; payload: { id: number } }
  | { type: "DECREASE_QUANTITY"; payload: { id: number } }
  | { type: "CLEAR_CART" };
