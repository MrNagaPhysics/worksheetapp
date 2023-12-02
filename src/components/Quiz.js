import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const question = {
  question: "What is the equation for force?",
  answer1: "F= ma",
  answer2: "F= a/m",
  answer3: "s=v/t",
  answer4: "a = v-u/t",
  correctAnswer: "F=ma"}

function Quiz() {

  const {
    question_category,score
  } =useSelector(state=>state);
  console.log(question_category)

    return (
      <Box>
          <Typography variant="h4" fontWeight="bold">Quiz App</Typography>
          <Typography mt={5} fontSize={18}>{question.question}</Typography>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
              {question.answer1}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
              {question.answer2}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
              {question.answer3}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
              {question.answer4}
            </Button>
          </Box>

          <Box mt={5}>
            Score: 2/6
          </Box>
      </Box>
    );}

export default Quiz;