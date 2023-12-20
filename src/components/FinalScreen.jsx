import { Typography} from "@mui/material";
import { Box} from "@mui/material"
import { useSelector } from "react-redux";

const FinalScreen = () => {

    const { score } = useSelector(state => state);

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3} > Final Score: {score} </Typography>
        </Box>
    )
}

export default FinalScreen;