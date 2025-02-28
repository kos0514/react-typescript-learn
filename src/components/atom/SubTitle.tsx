import Typography from '@mui/material/Typography';

type subTitleProps = {
    subTitle : string;
};

const SubTitle = ({subTitle} :subTitleProps) => <Typography variant="h4">{subTitle}</Typography>

export default SubTitle;