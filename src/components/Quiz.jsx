import { Box, Typography, LinearProgress, Stack, Grid, Button} from "@mui/material";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./Quiz.css"
import data from './testData.json'
import Explanation from "./Explanation";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MathJax } from "better-react-mathjax";

//
function Quiz() {
  const [allQuestions, setAllQuestions] = useState([]) //Used to store data for all questions within worksheet
  const [questionIndex, setQuestionIndex] = useState(0); // Used to store current index of question being practiced by user
  const [score, setScore] = useState(0) // Used to store number of correct answers user has selected

  // States dealing with a single mcq question
  const [questionTitle, setQuestionTitle] = useState('')
  const [explanation, setExplanation] = useState('')
  const [mcqOptions, setMCQOptions] = useState([]) // Expects array of mcq objects
  const [lock, setLock] = useState(false)
  const [length, setLength] = useState(0) // Integer which is number of questions within the worksheet
  const navigate = useNavigate();
  let [result,setResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null)

  // // Uncomment when in prod environment
  const { id } = useParams()
  const hook = () => {
    axios 
    .get(`https://mrnagaphysics.com/main/apps/questions/api/worksheet_questions/${id}/`)
      .then(
        response => {
          setAllQuestions(response.data)
          setLength(response.data.length)
  
          //Question specific data
          setQuestionTitle(response.data[questionIndex].question_text)
          setMCQOptions(response.data[questionIndex].mcqs)
          setExplanation(response.data[questionIndex].explanation)
        }
      )

  };
  useEffect(hook,[]);

  // // Uncomment when in local environment
  // useEffect(() => {
  //   setAllQuestions(data)
  //   setLength(data.length)
  //   setQuestionTitle(data[questionIndex].question_text)
  //   setMCQOptions(data[questionIndex].mcqs)
  //   setExplanation(data[questionIndex].explanation)
  // }, [])

  const handleClickAnswer = (event) => {
    if(lock ===false){
        // Retrieve MCQ object based on option that user clicked on. Access the is_answer property to determine if user's answer is correct or not
        const mcqText = event.target.id
        const selectedMCQObject = mcqOptions.filter((mcqOption) => mcqOption.choice_text === mcqText)[0]
        const answerCorrect = selectedMCQObject.is_answer
        if (answerCorrect) {
            let newScore = score + 1
            setScore(newScore)
            event.target.classList.add("correct")
            setIsCorrect(true)
        }
        else {
            event.target.classList.add("wrong")
            const rightAnswerText = mcqOptions.filter((mcqOption) => mcqOption.is_answer === true)[0].choice_text
            const currentOptions = Array.from(document.getElementsByTagName('li'))
            const rightAnswerElement = currentOptions.filter((element) => element.id === rightAnswerText)[0]
            rightAnswerElement.classList.add("correct")
            setIsCorrect(false)
        }
        setLock(true)
    }  
  }

  const next = () => {
    if (lock ===true){
      if(questionIndex === length - 1){
        setResult(true);
      }
      else {
        const newIndex = questionIndex + 1
        setQuestionIndex(newIndex);
        setQuestionTitle(allQuestions[questionIndex + 1].question_text)
        setMCQOptions(allQuestions[questionIndex + 1].mcqs)
        setExplanation(allQuestions[questionIndex + 1].explanation)
        setLock(false);
        setIsCorrect(null);
      }
    }
  }
  const reset = () => {
    setQuestionIndex(0);
    setQuestionTitle(allQuestions[0].question_text)
    setMCQOptions(allQuestions[0].mcqs)
    setScore(0)
    setExplanation(allQuestions[0].explanation)
    setLock(false);
    setResult(false);
    setIsCorrect(null)
  }

  const home = () => {
    setQuestionIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    setScore(0);
    window.location.href="https://www.mrnagaphysics.com";
  }

    return (

      <Box>
          <Stack>
            <LinearProgress variant="determinate" value={((questionIndex)+(result?(1):(0)))/(length)*100} />
          </Stack>

          {result?<></>:<>
          <Typography mt={2} fontSize={20}><MathJax>{questionIndex+1}. {questionTitle}</MathJax></Typography>

          <ul>
            {
                mcqOptions.map(
                    mcq => {
                        return (
                            <MathJax><li key={mcq.id} onClick={handleClickAnswer} id={mcq.choice_text}>{mcq.choice_text}</li></MathJax>  
                        )
                    }
                )
            }
          </ul>
          
          
          <Box>
            <Grid container my={1} spacing={2}>
              <Grid item xs={8}>
              <Explanation explanation={explanation} isCorrect={isCorrect}/>
              </Grid>
              <Grid item xs={4}>
              <Button variant="contained" size="large" endIcon={<NavigateNextIcon/>} onClick={next}>Next</Button>
              </Grid>
            </Grid>
          </Box>
          
          </>}
          
          {result?<><h2>You Scored {score} out of {length} </h2>
          <Stack mt={5} direction="row" display="flex" justifyContent="space-around">
          <Button variant="contained" size="large" onClick={reset}>Reset</Button>
          <Button variant="contained" size="large" onClick={home}>Home</Button>
          </Stack>
         
          </>:<></>}
          
      </Box>
    );}

export default Quiz;
