import '@/App.css';
import CommonButton from '@/components/atom/CommonButton';
import { ReactElement } from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

type CounterProps = {
  /**
   * コンポーネントに表示するテキストでございますわ
   */
  componentText: string;
  /**
   * 現在のカウント値でございますの
   */
  count: number;
  /**
   * カウント値を設定するための関数でございますわ
   */
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Counterコンポーネントでございます
 *
 * @param {CounterProps} props - カウンターの「お持ち物」様でございますの
 * @param {string} props.componentText - コンポーネントに表示するテキストでございますわ
 * @param {number} props.count - 現在のカウント値でございますの
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCount - カウント値を設定するための関数でございますわ
 * @returns {ReactElement} カウント機能を持つコンポーネントを返しますの
 *
 * @example
 * // このように『Counter』コンポーネントをお使いくださいませ
 * <Counter componentText="カウント" count={count} setCount={setCount} />
 */
const Counter = ({
  componentText,
  count,
  setCount,
}: CounterProps): ReactElement => {
  /**
   * カウントを増加させる処理でございますの
   */
  const onClickCounter = () => {
    setCount((count) => count + 1);
  };

  /**
   * カウントをリセットする処理でございますわ
   */
  const onClickReset = () => {
    setCount(0);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h5">{componentText}</Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <CommonButton label={`count is: ${count}`} onClick={onClickCounter} />
        <CommonButton label="reset" onClick={onClickReset} />
      </Stack>
    </Stack>
  );
};

export default Counter;
