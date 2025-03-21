import { ReactElement, useState } from 'react';
import Counter from '@/components/molecules/Counter';
import SubTitle from '@/components/atom/SubTitle';
import CommonButton from '@/components/atom/CommonButton';
import { Stack } from '@mui/material';

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
    <Stack direction="column" spacing={3}>
      <SubTitle subTitle="カウントボタン" />
      <CommonButton label="切替" onClick={onClickToggle} />
      <Stack>
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
      </Stack>
    </Stack>
  );
};

export default ToggleShowItem;
