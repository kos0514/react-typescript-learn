import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CommonButton from "@/components/atom/CommonButton";
import { CartState } from "@/features/cart/types.ts";
import { cartActions, CartAction } from "@/features/cart/actions";

// Dispatch関数の型定義
type CartInItemPaperProps = {
  cartState: CartState;
  dispatch: React.Dispatch<CartAction>;
};

const CartInItemPaper = ({ cartState, dispatch }: CartInItemPaperProps) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Stack direction="column" spacing={3}>
        <Typography variant="h6">カート内アイテム</Typography>
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
                      onClick={() =>
                        dispatch(cartActions.decreaseQuantity(item.id))
                      }
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Typography>{item.quantity}</Typography>

                    <IconButton
                      color="primary"
                      onClick={() =>
                        dispatch(cartActions.increaseQuantity(item.id))
                      }
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Stack>

                  <CommonButton
                    label="削除"
                    onClick={() => dispatch(cartActions.removeItem(item.id))}
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
            onClick={() => dispatch(cartActions.clearCart())}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CartInItemPaper;
