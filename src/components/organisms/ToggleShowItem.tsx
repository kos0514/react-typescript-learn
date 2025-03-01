import { ReactElement, useState } from "react";
import Counter from "@/components/molecules/Counter";
import SubTitle from "@/components/atom/SubTitle";
import CommonButton from "@/components/atom/CommonButton.tsx";
import { Grid2 } from "@mui/material";

/**
 * ToggleShowItemコンポーネントでございます
 *
 * @returns {ReactElement} カウントボタンを切り替える機能を持つコンポーネントを返しますの
 *
 * @example
 * // このように『ToggleShowItem』コンポーネントをお使いくださいませ
 * <ToggleShowItem />
 */
const ToggleShowItem = (): ReactElement => {
  const [toggle, setToggle] = useState(true);
  const [countPrimary, setCountPrimary] = useState(0);
  const [countSecondary, setCountSecondary] = useState(0);

  /**
   * カウントボタンの表示を切り替える処理でございますの
   */
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Grid2 container direction="column" spacing={3}>
      <SubTitle subTitle="カウントボタン" />
      <Grid2>
        <CommonButton label="切替" onClick={onClickToggle} />
      </Grid2>
      <Grid2>
        {toggle ? (
          <Counter
            key="primary"
            componentText="primary"
            count={countPrimary}
            setCount={setCountPrimary}
          />
        ) : (
          <Counter
            key="secondary"
            componentText="secondary"
            count={countSecondary}
            setCount={setCountSecondary}
          />
        )}
      </Grid2>
    </Grid2>
  );
};

export default ToggleShowItem;
