import { Box, Button, Typography, LinearProgress, Stack} from "@mui/material";
import { useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import samplequestions from "./samplequestions.json";
import {handleScoreChange} from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "./Quiz.css"


function Quiz() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options,setOptions] = useState([]);
  const navigate = useNavigate();
  let [lock,setLock] =useState(false);
  let [result,setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  let options_array_ref = [Option1,Option2,Option3,Option4];


  useEffect(() => {
    if(samplequestions?.length){
      const question = samplequestions[questionIndex];
      setOptions(samplequestions[questionIndex].answers)
    };
  }, [samplequestions, questionIndex]);
  
const score = useSelector(state => state.score);
const dispatch = useDispatch();

  const handleClickAnswer = (e) => {
    if(lock ===false){
      if(e.target.textContent === samplequestions[questionIndex].correct_answer){
        dispatch(handleScoreChange(score+1));
        e.target.classList.add("correct");
        setLock(true);
      }  else {
        e.target.classList.add("wrong")
        setLock(true);
        options_array_ref[samplequestions[questionIndex].answers.indexOf(samplequestions[questionIndex].correct_answer)].current.classList.add("correct")
      } 
    }  
      
   // if (questionIndex+1 < samplequestions.length) {
     // setQuestionIndex(questionIndex);
   // } else {
     // navigate("/score");
    //}
  }

  const next = () => {
    if (lock ===true){
      if(questionIndex === samplequestions.length-1){
        setResult(true);
        return 0;
      }
      setQuestionIndex(questionIndex+1);
      setLock(false);
      options_array_ref.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })

    }
  }

  const reset = () => {
    setQuestionIndex(0);
    dispatch(handleScoreChange(0));
    setLock(false);
    setResult(false);
  }

  const home = () => {
    setQuestionIndex(0);
    dispatch(handleScoreChange(0));
    setLock(false);
    setResult(false);
    dispatch(handleScoreChange(0));
    navigate("/");
  }

    return (
      <Box>
          <Stack>
            <LinearProgress variant="determinate" value={((questionIndex)+(result?(1):(0)))/(samplequestions.length)*100} />
          </Stack>

          {result?<></>:<>
          <Typography mt={2} fontSize={20}>{questionIndex+1}. {samplequestions[questionIndex].question}</Typography>

          <ul>
            <li ref={Option1} onClick={handleClickAnswer} >{options[0]}</li>
            <li ref={Option2} onClick={handleClickAnswer} >{options[1]}</li>
            <li ref={Option3} onClick={handleClickAnswer} >{options[2]}</li>
            <li ref={Option4} onClick={handleClickAnswer} >{options[3]}</li>
          </ul>
          <button onClick={next}>Next</button>
          </>}
          
          {result?<><h2>You Scored {score} out of {samplequestions.length} </h2>
          <Stack direction="row">
          <button onClick={reset}>Reset</button>
          <button onClick={home}>Home</button>
          </Stack>
         
          </>:<></>}
          
      </Box>
    );}

export default Quiz;