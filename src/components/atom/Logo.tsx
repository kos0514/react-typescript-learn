import reactLogo from "@/assets/react.svg";
import viteLogo from "~/vite.svg";
import { ReactElement } from "react";
import { Link, Stack } from "@mui/material";

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
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Link href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>
      <Link href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Link>
    </Stack>
  );
};

export default Logo;
