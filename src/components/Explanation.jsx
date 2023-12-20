import {Typography} from "@mui/material";
import { MathJax } from "better-react-mathjax";

const Explanation = ({ explanation, isCorrect}) => {
    if (isCorrect === null) {
        return null
    }
    else if (isCorrect === true) {
        return (
            explanation ? <Typography fontSize={17}>Correct! Explanation: <MathJax>{explanation}</MathJax></Typography>:<Typography fontSize={17}>No explanation provided</Typography>
        )
    }
    else if (isCorrect === false) {
        return (
            explanation ? <Typography fontSize={17}>Incorrect, Explanation: {explanation}</Typography>:<Typography fontSize={17}>No explanation provided</Typography>
        )
    }

}

export default Explanation;