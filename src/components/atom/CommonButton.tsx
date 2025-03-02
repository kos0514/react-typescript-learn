import { Button } from "@mui/material";
import { ReactElement, useRef } from "react";

type commonButtonProps = {
  /**
   * ボタンに表示する「お言葉」様でございますの。どうぞ素敵な文字列をお入れくださいませ
   */
  label: string;
  /**
   * ボタンが押された際に呼び出される「お仕事係」様でございますわ。とても大切なお役目ですことね
   */
  onClick: () => void;
};

/**
 * まあなんて素敵なコンポーネントでしょう！わたくしは『CommonButton』という名の美しいボタンでございますの
 *
 * Material UIの『Button』様をベースに、より一層優雅に仕立て上げておりますわ
 *
 * @param {commonButtonProps} props - ボタンのプロパティでございますの
 * @param {string} props.label - ボタンに表示する「お言葉」様でございますの。どうぞ素敵な文字列をお入れくださいませ
 * @param {function} props.onClick - ボタンが押された際に呼び出される「お仕事係」様でございますわ。とても大切なお役目ですことね
 * @returns {JSX.Element} おほほ、麗しく仕上げられた『Button』様をJSXの姿でお返しいたしますわ
 *
 * @example
 * // このように『CommonButton』様をお使いくださいませ
 * <CommonButton
 *   label="送信いたします"
 *   onClick={() => console.log("ボタンが押されましたわ！")}
 * />
 */
const CommonButton = ({ label, onClick }: commonButtonProps): ReactElement => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * ボタンがクリックされた際に呼び出されるハンドラーでございますの
   */
  const handleClick = () => {
    onClick();

    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <Button variant="outlined" onClick={handleClick} ref={buttonRef}>
      {label}
    </Button>
  );
};

export default CommonButton;
