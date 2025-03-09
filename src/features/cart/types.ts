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
