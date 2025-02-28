import '@/App.css'
import ToggleShowItem from "@/components/organisms/ToggleShowItem";
import  {useState} from "react";
import * as React from "react";
import Todo from "@/components/organisms/Todo";

const STUDY_COMPONENTS = {
    ToggleShowItem: <ToggleShowItem />,
    Todo : <Todo />,
} as const;

type componentType = keyof typeof STUDY_COMPONENTS;


const StudySelector = () => {
    const [selectedComponent, setSelectedComponent] = useState<componentType>("ToggleShowItem");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedComponent(event.target.value as componentType);
    }

    const SelectedComponent = STUDY_COMPONENTS[selectedComponent];

    return (
        <div className="tree-box-style">
            <select value={selectedComponent} onChange={handleChange}>
                {Object.keys(STUDY_COMPONENTS).map((component) => (
                    <option key={component} value={component}>
                        {component}
                    </option>
                ))}
            </select>
            <br /><br />
            {SelectedComponent}
        </div>
    );
};

export default StudySelector;