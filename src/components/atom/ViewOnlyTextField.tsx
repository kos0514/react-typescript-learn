import TextField from '@mui/material/TextField';
import { ReactElement } from 'react';

type ViewOnlyTextFieldProps = {
  /**
   * テキストフィールドのラベルでございますわ
   */
  label: string;
  /**
   * テキストフィールドの値でございますの
   */
  value: string;
};

/**
 * ViewOnlyTextFieldコンポーネントでございます
 *
 * このコンポーネントは読み込み専用のTextFieldでございますの。
 * 入力はできませんが、表示専用としてお使いいただけますわ。
 *
 * @param {ViewOnlyTextFieldProps} props - テキストフィールドの「お持ち物」様でございますの
 * @param {string} props.label - テキストフィールドのラベルでございますわ
 * @param {string} props.value - テキストフィールドの値でございますの
 * @returns {ReactElement} 表示専用のTextFieldコンポーネントを返しますの
 *
 * @example
 * // このように『ViewOnlyTextField』コンポーネントをお使いくださいませ
 * <ViewOnlyTextField
 *   label="表示専用"
 *   value="このテキストは編集できません"
 * />
 */
const ViewOnlyTextField = ({
  label,
  value,
}: ViewOnlyTextFieldProps): ReactElement => {
  return <TextField label={label} value={value} disabled={true} />;
};

export default ViewOnlyTextField;
