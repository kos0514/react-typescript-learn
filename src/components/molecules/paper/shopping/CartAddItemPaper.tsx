import { Button, Paper, Stack, Typography } from "@mui/material";
import PostTextField from "@/components/atom/PostTextField";
import { useState } from "react";

import { useCartContext } from "@/features/cart/context.tsx";
import { cartActions } from "@/features/cart/actions";

const CartAddItemPaper = () => {
  const { dispatch } = useCartContext();

  // フォーム入力の状態
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string>("1");

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームの値を取得し、バリデーションを行い、dispatchする処理を実装
    const price = parseFloat(itemPrice);
    const quantity = parseInt(itemQuantity, 10);
    if (isNaN(price) || isNaN(quantity) || quantity <= 0) {
      alert("無効な価格または数量です");
      return;
    }

    dispatch(cartActions.addItem({ name: itemName, price, quantity }));
    // フォームをリセット
    setItemName("");
    setItemPrice("");
    setItemQuantity("1");
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 5 }}>
      <Stack direction="column" spacing={3}>
        <Typography variant="h6">商品の追加</Typography>
        <form onSubmit={handleAddItem}>
          <Stack direction="column" spacing={3}>
            <PostTextField
              required
              label="商品名"
              value={itemName}
              setValue={setItemName}
            />
            <PostTextField
              required
              label="価格"
              value={itemPrice}
              setValue={setItemPrice}
            />
            <PostTextField
              required
              label="数量"
              value={itemQuantity}
              setValue={setItemQuantity}
            />
            <Button variant="contained" type="submit">
              カートに追加
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default CartAddItemPaper;
