import { Box, Typography, Stack} from "@mui/material";

const Explanation = ({ explanation, isCorrect}) => {
    if (isCorrect === null) {
        return null
    }
    else if (isCorrect === true) {
        return (
            explanation ? <Typography fontSize={20}>You got this question correct! Explanation: {explanation}</Typography>:<Typography fontSize={20}>No explanation provided</Typography>
        )
    }
    else if (isCorrect === false) {
        return (
            explanation ? <Typography fontSize={20}>You got this question incorrect. Explanation: {explanation}</Typography>:<Typography fontSize={20}>No explanation provided</Typography>
        )
    }

}

export default Explanation;