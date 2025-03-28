import { useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import PostTextField from '@/components/atom/PostTextField';
import CommonButton from '@/components/atom/CommonButton';
import ViewOnlyTextField from '@/components/atom/ViewOnlyTextField';

/**
 * useRefについての学びでございますの
 *
 * 1. DOM参照と値の保持
 *    - useRefは、再レンダリングを引き起こさずに値を保持するために使用されますの
 *    - テキストフィールドにフォーカスを当てる際に、useRefを使って直接DOM要素にアクセスいたしますわ
 *    - 入力欄のような特定のDOM要素を参照するには、useRef<HTMLInputElement>(null)のように型を指定するとよろしいですわ
 *
 * 2. レンダリングと値の永続性
 *    - useRefで保持された値は、コンポーネントが再レンダリングされてもそのまま維持されますの
 *    - フォーカスが当たった時刻を記録するために、useRefを使ってDateオブジェクトを保持しておりますの
 *    - このように状態を持ちつつも再レンダリングを引き起こさない特性は、パフォーマンス最適化に役立ちますわ
 *
 * 3. 値の変更と画面反映
 *    - useRefの値を変更しても再レンダリングが発生いたしませんの
 *    - そのため、フォーカスを当てるボタンを押下した段階では画面に反映されず、何らかの状態更新（入力など）が
 *      あった時に初めて最新のRef値が画面に表示されるという動きになりますわ
 *    - これは、useStateとの大きな違いでございますの
 *
 * 4. useRefの主な用途
 *    - DOM要素への直接アクセス（focus()やscroll()などのメソッド呼び出し）
 *    - インスタンス変数のように値を保持（タイマーIDやイベントリスナーの参照など）
 *    - 前回のレンダリング時の値を記憶する
 *    - useStateのような再レンダリングを引き起こさずに値を保持したい場合
 */
const FocusableInput = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const lastFocusTimeRef = useRef<Date | null>(null);
  const [postText, setPostText] = useState<string>('');
  // フォーカス時間を状態として管理
  const [lastFocusTime, setLastFocusTime] =
    useState<string>('未フォーカスでございますわ');

  /**
   * テキストフィールドにフォーカスを当てる処理でございますの
   */
  const onClickFocusToText = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
      const date = new Date();
      lastFocusTimeRef.current = date;
      setLastFocusTime(date.toLocaleString());
    }
  };

  /**
   * テキストフィールドの内容をクリアする処理でございますの
   */
  const onClickClear = () => {
    setPostText('');
  };

  return (
    <Stack direction="column" spacing={3}>
      <Typography variant="h6">useRef デモンストレーション</Typography>
      <PostTextField
        label="お言葉をご入力ください"
        value={postText}
        setValue={setPostText}
        inputRef={textFieldRef}
      />
      <Stack direction="row" spacing={2}>
        <CommonButton label="フォーカスを当てる" onClick={onClickFocusToText} />
        <CommonButton label="クリア" onClick={onClickClear} />
      </Stack>

      <ViewOnlyTextField label="最終フォーカス時刻" value={lastFocusTime} />

      <ViewOnlyTextField
        label="入力文字数"
        value={postText.length.toString()}
      />
    </Stack>
  );
};

export default FocusableInput;
