import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

type subTitleProps = {
  /**
   * 表示するサブタイトルの文字列でございますわ
   */
  subTitle: string;
};

/**
 * SubTitleコンポーネントでございます
 *
 * @param {subTitleProps} props - サブタイトルの「お持ち物」様でございますの
 * @param {string} props.subTitle - 表示するサブタイトルの文字列でございますわ
 * @returns {ReactElement} サブタイトルを表示するTypographyコンポーネントを返しますの
 *
 * @example
 * // このように『SubTitle』コンポーネントをお使いくださいませ
 * <SubTitle subTitle="サブタイトル" />
 */
const SubTitle = ({ subTitle }: subTitleProps): ReactElement => (
  <Typography variant="h4">{subTitle}</Typography>
);

export default SubTitle;
