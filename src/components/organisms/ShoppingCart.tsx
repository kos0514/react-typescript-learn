import React, { useReducer, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import PostTextField from "@/components/atom/PostTextField.tsx";
import CommonButton from "@/components/atom/CommonButton.tsx";
import SubTitle from "@/components/atom/SubTitle.tsx";

// 商品アイテムの型定義
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// カートの状態を定義
interface CartState {
  items: CartItem[];
  total: number;
}

// アクションの型定義
type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "id"> }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "INCREASE_QUANTITY"; payload: { id: number } }
  | { type: "DECREASE_QUANTITY"; payload: { id: number } }
  | { type: "CLEAR_CART" };

// 初期状態
const initialState: CartState = {
  items: [],
  total: 0,
};

// TODO: カートの合計金額を計算する関数を実装してください

// TODO: リデューサー関数を実装してください
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      // TODO: 商品追加のロジックを実装してください
      // ヒント: 同じ商品が追加された場合は数量を増やす
      return state;
    }

    case "REMOVE_ITEM": {
      // TODO: 商品削除のロジックを実装してください
      return state;
    }

    case "INCREASE_QUANTITY": {
      // TODO: 数量増加のロジックを実装してください
      return state;
    }

    case "DECREASE_QUANTITY": {
      // TODO: 数量減少のロジックを実装してください
      // ヒント: 数量が1未満にならないよう注意
      return state;
    }

    case "CLEAR_CART":
      // TODO: カートクリアのロジックを実装してください
      return state;

    default:
      return state;
  }
};

/**
 * useReducerを使用したショッピングカートコンポーネント
 * @returns ショッピングカートUI
 */
const ShoppingCart: React.FC = () => {
  // useReducerを使用してカートの状態を管理
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // フォーム入力の状態
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<string>("");
  const [itemQuantity, setItemQuantity] = useState<string>("1");

  // TODO: 商品追加処理を実装してください
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームの値を取得し、バリデーションを行い、dispatchする処理を実装
  };

  return (
    <Stack direction="column">
      <Paper elevation={3} sx={{ p: 2, mb: 5 }}>
        <Stack direction="column" spacing={3}>
          <SubTitle subTitle="ショッピングカート" />
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

      <Paper elevation={3} sx={{ p: 2 }}>
        <Stack direction="column" spacing={3}>
          <SubTitle subTitle="カート内アイテム" />
          {cartState.items.length === 0 ? (
            <p>カートは空です</p>
          ) : (
            <List>
              {cartState.items.map((item) => (
                <ListItem key={item.id}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <ListItemText primary={item.name} />
                    <ListItemText primary={`価格: ${item.price}`} />
                    <ListItemText primary={`数量: ${item.quantity}`} />
                    <CommonButton
                      label="削除"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_ITEM",
                          payload: { id: item.id },
                        })
                      }
                    />
                  </Stack>
                </ListItem>
              ))}
            </List>
          )}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">合計金額: {cartState.total}</Typography>
            <CommonButton
              label="カートをクリア"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ShoppingCart;
