import "@/App.css";
import ToggleShowItem from "@/components/organisms/ToggleShowItem";
import { ReactElement, useState } from "react";
import Todo from "@/components/organisms/Todo";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const STUDY_COMPONENTS = {
  ToggleShowItem: <ToggleShowItem />,
  Todo: <Todo />,
} as const;

type componentType = keyof typeof STUDY_COMPONENTS;

/**
 * StudySelectorコンポーネントでございます
 *
 * @returns {ReactElement} 選択されたコンポーネントを表示するセレクターを返しますの
 *
 * @example
 * // このように『StudySelector』コンポーネントをお使いくださいませ
 * <StudySelector />
 */
const StudySelector = (): ReactElement => {
  const [selectedComponent, setSelectedComponent] =
    useState<componentType>("ToggleShowItem");

  /**
   * コンポーネントの選択が変更されたときの処理でございますの
   * @param {SelectChangeEvent<componentType>} event - 選択イベントでございますわ
   */
  const handleChange = (event: SelectChangeEvent<componentType>) => {
    setSelectedComponent(event.target.value as componentType);
  };

  const SelectedComponent = STUDY_COMPONENTS[selectedComponent];

  return (
    <div className="tree-box-style">
      <FormControl fullWidth>
        <InputLabel id="component-select-label">Component</InputLabel>
        <Select
          labelId="component-select-label"
          value={selectedComponent}
          onChange={handleChange}
          label="Component"
        >
          {Object.keys(STUDY_COMPONENTS).map((component) => (
            <MenuItem key={component} value={component}>
              {component}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box width={300} minHeight={300} mt={3}>
        {SelectedComponent}
      </Box>
    </div>
  );
};

export default StudySelector;
