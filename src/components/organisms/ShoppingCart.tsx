import React, { useReducer, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
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

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }

    case "INCREASE_QUANTITY": {
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

    case "DECREASE_QUANTITY": {
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

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

/**
 * useReducerを使用したショッピングカートコンポーネント
 * @returns ショッピングカートUI
 */
const ShoppingCart = () => {
  // useReducerを使用してカートの状態を管理
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

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
    dispatch({
      type: "ADD_ITEM",
      payload: { name: itemName, price, quantity },
    });

    // フォームをリセット
    setItemName("");
    setItemPrice("");
    setItemQuantity("1");
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

                    {/* 数量調整セクション */}
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: { id: item.id },
                          })
                        }
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>

                      <Typography>{item.quantity}</Typography>

                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            payload: { id: item.id },
                          })
                        }
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Stack>

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
