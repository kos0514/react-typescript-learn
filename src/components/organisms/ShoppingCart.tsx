import { Stack } from "@mui/material";

import SubTitle from "@/components/atom/SubTitle";
import CartAddItemPaper from "@/components/molecules/paper/shopping/CartAddItemPaper";
import CartInItemPaper from "@/components/molecules/paper/shopping/CartInItemPaper";
import { CartProvider } from "@/features/cart/context.tsx";

/**
 * useReducerを使用したショッピングカートコンポーネント
 * @returns ショッピングカートUI
 */
const ShoppingCart = () => {
  return (
    <CartProvider>
      <Stack direction="column" spacing={2}>
        <SubTitle subTitle="ショッピングカート" />
        <CartAddItemPaper />
        <CartInItemPaper />
      </Stack>
    </CartProvider>
  );
};

export default ShoppingCart;
