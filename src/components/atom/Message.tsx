import { ReactElement } from "react";

/**
 * Messageコンポーネントでございます
 *
 * ViteとReactのロゴをクリックして詳細を学ぶためのリンクを含むメッセージを表示するコンポーネントですわ
 *
 * @returns {ReactElement} ViteとReactのロゴをクリックして詳細を学ぶためのメッセージを表示するp要素を返しますの
 *
 * @example
 * // このように『Message』コンポーネントをお使いくださいませ
 * <Message />
 */
const Message = (): ReactElement => {
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  );
};

export default Message;
