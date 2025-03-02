import TextField from "@mui/material/TextField";
import { ReactElement } from "react";

type PostTextFieldProps = {
  /**
   * テキストフィールドのラベルでございますわ
   */
  label: string;
  /**
   * テキストフィールドの値でございますの
   */
  value: string;
  /**
   * テキストフィールドの値を設定するための関数でございますわ
   */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /**
   * テキストフィールドの入力参照でございますの
   */
  inputRef?: React.RefObject<HTMLInputElement | null>;
};

/**
 * PostTextFieldコンポーネントでございます
 *
 * @param {PostTextFieldProps} props - テキストフィールドの「お持ち物」様でございますの
 * @param {string} props.label - テキストフィールドのラベルでございますわ
 * @param {string} props.value - テキストフィールドの値でございますの
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setValue - テキストフィールドの値を設定するための関数でございますわ
 * @param {React.RefObject<HTMLInputElement>} [props.inputRef] - テキストフィールドの入力参照でございますの
 * @returns {ReactElement} テキストフィールドを表示するTextFieldコンポーネントを返しますの
 *
 * @example
 * // このように『PostTextField』コンポーネントをお使いくださいませ
 * <PostTextField
 *   label="コメント"
 *   value={value}
 *   setValue={setValue}
 * />
 */
const PostTextField = ({
  label,
  value,
  setValue,
  inputRef,
}: PostTextFieldProps): ReactElement => {
  /**
   * 入力が変更されたときの処理でございますの
   * @param {React.ChangeEvent<HTMLInputElement>} event - 入力イベントでございますわ
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleInputChange}
      inputRef={inputRef}
    />
  );
};

export default PostTextField;
