type commonButtonProps = {
    label: string;
    onClick: () => void;
}

const CommonButton = ({label, onClick}: commonButtonProps) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default CommonButton;