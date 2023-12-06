import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import samplequestions from "./samplequestions.json";
import {handleScoreChange} from "../redux/actions";
import { useNavigate } from "react-router-dom";


function Quiz() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options,setOptions] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if(samplequestions?.length){
      const question = samplequestions[questionIndex];
      setOptions(samplequestions[questionIndex].answers)
    };
  }, [samplequestions, questionIndex]);
  
const score = useSelector(state => state.score);
const dispatch = useDispatch();

  const handleClickAnswer = (e) => {
    if(e.target.textContent === samplequestions[questionIndex].correct_answer){
      dispatch(handleScoreChange(score+1));
    }   
      
    if (questionIndex+1 < samplequestions.length) {
      setQuestionIndex(questionIndex+1);
    } else {
      navigate("/score");
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
            Score: {score}/{samplequestions.length}
          </Box>
      </Box>
    );}

export default Quiz;