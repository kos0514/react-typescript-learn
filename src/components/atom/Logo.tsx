import reactLogo from "@/assets/react.svg";
import viteLogo from "~/vite.svg";
import { ReactElement } from "react";

/**
 * Logoコンポーネントでございます
 *
 * ViteとReactのロゴを表示するリンクを含むコンポーネントでございますわ
 *
 * @returns {JSX.Element} ViteとReactのロゴを表示するdiv要素を返しますわ
 *
 * @example
 * // このように『Logo』コンポーネントをお使いくださいませ
 * <Logo />
 */
const Logo = (): ReactElement => {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
};

export default Logo;
