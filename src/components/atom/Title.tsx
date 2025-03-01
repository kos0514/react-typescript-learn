import { ReactElement } from "react";

type titleProps = {
  /**
   * 表示するタイトルの文字列でございますわ
   */
  title: string;
};

/**
 * Titleコンポーネントでございます
 *
 * @param {titleProps} props - タイトルの「お持ち物」様でございますの
 * @param {string} props.title - 表示するタイトルの文字列でございますわ
 * @returns {ReactElement} タイトルを表示するh1要素を返しますの
 *
 * @example
 * // このように『Title』コンポーネントをお使いくださいませ
 * <Title title="素敵なタイトル" />
 */
const Title = ({ title }: titleProps): ReactElement => <h1>{title}</h1>;

export default Title;
