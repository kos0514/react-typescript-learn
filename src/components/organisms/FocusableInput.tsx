import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import PostTextField from "@/components/atom/PostTextField.tsx";
import CommonButton from "@/components/atom/CommonButton.tsx";
import ViewOnlyTextField from "@/components/atom/ViewOnlyTextField.tsx";

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
  const [postText, setPostText] = useState<string>("");
  /**
   * テキストフィールドにフォーカスを当てる処理でございますの
   */
  const onClickFocusToText = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
      lastFocusTimeRef.current = new Date();
    }
  };

  /**
   * テキストフィールドの内容をクリアする処理でございますの
   */
  const onClickClear = () => {
    setPostText("");
  };

  /**
   * 最後にフォーカスが当たった時刻を取得する関数でございますの
   *
   * @returns {string} 最後にフォーカスが当たった時刻を文字列で返しますの。フォーカスがまだ当たっていない場合は「未フォーカス」と返しますわ
   */
  const getLastFocusTime = (): string => {
    return lastFocusTimeRef.current
      ? lastFocusTimeRef.current.toLocaleString()
      : "未フォーカスでございますわ";
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">useRef デモンストレーション</Typography>

      <PostTextField
        label="お言葉をご入力ください"
        value={postText}
        setValue={setPostText}
        inputRef={textFieldRef}
      />

      <Box display="flex" gap={2}>
        <CommonButton label="フォーカスを当てる" onClick={onClickFocusToText} />

        <CommonButton label="クリア" onClick={onClickClear} />
      </Box>

      <ViewOnlyTextField
        label="最終フォーカス時刻"
        value={getLastFocusTime()}
      />

      <ViewOnlyTextField
        label="入力文字数"
        value={postText.length.toString()}
      />
    </Box>
  );
};

export default FocusableInput;
