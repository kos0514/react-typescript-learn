import { Button } from "@mui/material";

type commonButtonProps = {
  label: string;
  onClick: () => void;
};

const CommonButton = ({ label, onClick }: commonButtonProps) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {label}
    </Button>
  );
};

export default CommonButton;
