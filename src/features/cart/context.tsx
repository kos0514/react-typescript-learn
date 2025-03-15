import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  ReactNode,
} from 'react';
import { cartReducer, initialState } from '@/features/cart/reducer';

import { CartContextType } from '@/features/cart/types';

// Contextの作成
const CartContext = createContext<CartContextType | undefined>(undefined);

// Providerコンポーネントのprops型
type CartProviderProps = {
  children: ReactNode;
};

// Providerコンポーネント
export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// Contextを使用するためのカスタムフック
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(
      'useCartContextはCartProviderの内部で使用する必要があります。',
    );
  }
  return context;
};
