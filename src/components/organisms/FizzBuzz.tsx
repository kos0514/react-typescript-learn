import { useState, useEffect, useRef } from 'react';
import { Typography, List, ListItem, Stack } from '@mui/material';
import SubTitle from '@/components/atom/SubTitle';
import CommonButton from '@/components/atom/CommonButton';

/**
 * FizzBuzz問題を純粋関数的かつイミュータブルに実装したコンポーネントでございますの
 *
 * @returns {JSX.Element} FizzBuzzコンポーネントを返しますわ
 */
const FizzBuzz = () => {
  const [count, setCount] = useState<number>(1);
  const [results, setResults] = useState<string[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  /**
   * 数値をFizzBuzz変換する純粋関数でございますの
   * 早期リターンを使用して、条件を効率的にチェックしておりますの
   *
   * @param {number} num - 変換する数値でございますわ
   * @returns {string} FizzBuzz変換された文字列を返しますの
   */
  const calculateFizzBuzz = (num: number): string => {
    if (num % 15 === 0) {
      return 'FizzBuzz';
    }

    if (num % 3 === 0) {
      return 'Fizz';
    }

    if (num % 5 === 0) {
      return 'Buzz';
    }

    return num.toString();
  };

  /**
   * 次のFizzBuzz結果を追加する優雅な関数でございますの
   *
   * こちらの関数は以下の3つの上品な操作を行いますわ：
   * 1. 現在の数値（count）に対するFizzBuzz結果を麗しく計算いたしますの
   * 2. その結果を結果配列に関数形式の更新を用いてイミュータブルに追加いたしますわ
   * 3. 数値状態（count）を関数形式の更新で優雅にインクリメントいたしますの
   *
   * 関数形式の更新（prevResults => ...）を使うことで、常に最新の状態値を
   * 参照できますことが保証されますの。これは非同期更新の際や複数の状態更新が
   * 連続して発生する場面で特に重要でございますわ。
   */
  const addNextFizzBuzz = () => {
    // 現在の数値に対するFizzBuzz結果を優雅に計算いたしますの
    const result = calculateFizzBuzz(count);

    // 新しい結果を結果配列にイミュータブルに追加いたしますわ
    // 関数形式の更新パターンを使用して最新の状態を確実に取得しますの
    setResults((prevResults) => [...prevResults, result]);

    // 数値を1増やして次へと進みますの
    // 関数形式の更新パターンを使用して最新の数値状態を確実にインクリメントいたしますわ
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * 結果をリセットする関数でございますの
   */
  const resetResults = () => {
    setCount(1);
    setResults([]);
  };

  useEffect(() => {
    // 結果リストが更新されたときにリストの一番下にスクロールする処理でございますの
    if (listRef.current) {
      // リストのスクロール位置をリスト全体の高さに設定して、一番下までスクロールいたしますの
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [results]);

  return (
    <Stack direction="column" spacing={2}>
      <SubTitle subTitle="純粋関数的FizzBuzz" />

      <Stack direction="row" spacing={1} justifyContent="center">
        <CommonButton label="次の数を追加" onClick={addNextFizzBuzz} />
        <CommonButton label="リセット" onClick={resetResults} />
      </Stack>

      <Typography variant="subtitle1" gutterBottom>
        現在の数: {count}
      </Typography>

      <List
        ref={listRef}
        sx={{
          maxHeight: 200,
          overflow: 'auto',
          border: '1px solid #ddd',
          borderRadius: 1,
        }}
      >
        {results.map((result, index) => (
          <ListItem key={result} divider={index < results.length - 1}>
            {index + 1}: {result}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default FizzBuzz;
