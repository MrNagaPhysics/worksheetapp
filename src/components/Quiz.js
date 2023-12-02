import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const question = ["what is the equation for force?", "F=ma", "F=a/m" , "s=v/t" , "a = v-u/t", "F=ma"]

function Quiz() {

  const {
    question_category,score
  } =useSelector(state=>state);
  console.log(question_category)

    return (
      <Box>
          <Typography variant="h4" fontWeight="bold">Quiz App</Typography>
          <Typography mt={5}>this is the question</Typography>

          <Box mt={2}>
            <Button variant="contained">
            Answer 1
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained">
              Answer 2
            </Button>
          </Box>

          <Box mt={5}>
            Score: 2/6
          </Box>
      </Box>
    );}

export default Quiz;