import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import samplequestions from "./samplequestions.json"




function Quiz() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options,setOptions] = useState([]);

  useEffect(() => {
    if(samplequestions?.length){
      const question = samplequestions[questionIndex];
      setOptions(samplequestions[questionIndex].answers)
    };
  }, [samplequestions, questionIndex]);
  
  const {
    question_category,score
  } =useSelector(state=>state);
  console.log(question_category, score)

  const handleClickAnswer = () => {
    if (questionIndex+1 < samplequestions.length) {
      setQuestionIndex(questionIndex+1);
    }
  
  }

    return (
      <Box>
          <Typography variant="h4" fontWeight="bold">Quiz App</Typography>
          <Typography mt={5} fontSize={18}>{samplequestions[questionIndex].question}</Typography>

          {options.map((data,id) => (
              <Box mt={2} key={id} >
              <Button onClick={handleClickAnswer} variant="contained" style={{textTransform: 'none'}}>
                {data}
              </Button>
              </Box>

          ))}
          <Box mt={5}>
            Score: {questionIndex}/{samplequestions.length}
          </Box>
      </Box>
    );}

export default Quiz;