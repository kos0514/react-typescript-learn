import { CartItem } from "@/features/cart/types";

// アクションタイプを定数として定義
export const CART_ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
} as const;

// アクションタイプの型（型安全性のため）
export type CartActionType =
  (typeof CART_ACTION_TYPES)[keyof typeof CART_ACTION_TYPES];

// アクション作成関数
export const cartActions = {
  /**
   * 商品をカートに追加するアクションを作成
   */
  addItem: (item: Omit<CartItem, "id">) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item,
  }),

  /**
   * 商品をカートから削除するアクションを作成
   */
  removeItem: (id: number) => ({
    type: CART_ACTION_TYPES.REMOVE_ITEM,
    payload: { id },
  }),

  /**
   * 商品の数量を増やすアクションを作成
   */
  increaseQuantity: (id: number) => ({
    type: CART_ACTION_TYPES.INCREASE_QUANTITY,
    payload: { id },
  }),

  /**
   * 商品の数量を減らすアクションを作成
   */
  decreaseQuantity: (id: number) => ({
    type: CART_ACTION_TYPES.DECREASE_QUANTITY,
    payload: { id },
  }),

  /**
   * カートを空にするアクションを作成
   */
  clearCart: () => ({
    type: CART_ACTION_TYPES.CLEAR_CART,
  }),
};

// アクションの型を合成（ReducerのAction型として使用）
export type CartAction = ReturnType<
  (typeof cartActions)[keyof typeof cartActions]
>;
