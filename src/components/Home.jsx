import { Typography} from "@mui/material";
import { Box} from "@mui/material"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quiz")
      
        }

    return (
        <Box>  
            <Typography variant="h4" fontWeight="bold">Quiz App</Typography>
            <ul>
            <li onClick={handleClick} >List of available quizzes here</li>
            </ul>
            </Box>
      
    )
}

export default Home;