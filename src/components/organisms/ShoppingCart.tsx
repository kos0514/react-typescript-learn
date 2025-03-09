import { useReducer } from "react";
import { Stack } from "@mui/material";

import SubTitle from "@/components/atom/SubTitle";
import CartAddItemPaper from "@/components/molecules/paper/shopping/CartAddItemPaper";
import CartInItemPaper from "@/components/molecules/paper/shopping/CartInItemPaper";

import { cartReducer, initialState } from "@/features/cart/reducer";

/**
 * useReducerを使用したショッピングカートコンポーネント
 * @returns ショッピングカートUI
 */
const ShoppingCart = () => {
  // useReducerを使用してカートの状態を管理
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <Stack direction="column" spacing={2}>
      <SubTitle subTitle="ショッピングカート" />
      <CartAddItemPaper dispatch={dispatch} />
      <CartInItemPaper cartState={cartState} dispatch={dispatch} />
    </Stack>
  );
};

export default ShoppingCart;
