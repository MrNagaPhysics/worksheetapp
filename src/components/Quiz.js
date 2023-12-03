import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import samplequestions from "./samplequestions.json"




function Quiz() {

  const [questionIndex, setQuestionIndex] = useState(2);
  
  const {
    question_category,score
  } =useSelector(state=>state);
  console.log(question_category, score)

    return (
      <Box>
          <Typography variant="h4" fontWeight="bold">Quiz App</Typography>
          <Typography mt={5} fontSize={18}>{samplequestions[questionIndex].question}</Typography>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
              {samplequestions[questionIndex].answers[0]}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
            {samplequestions[questionIndex].answers[1]}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
            {samplequestions[questionIndex].answers[2]}
            </Button>
          </Box>

          <Box mt={2}>
            <Button variant="contained" style={{textTransform: 'none'}}>
            {samplequestions[questionIndex].answers[3]}
            </Button>
          </Box>

          <Box mt={5}>
            Score: 2/6
          </Box>
      </Box>
    );}

export default Quiz;