import { Box, Typography, LinearProgress, Stack} from "@mui/material";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./Quiz.css"


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
  const { id } = useParams()
  console.log(id)
  const hook = () => {
    // Intialise variables with state using mock api data
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
  useEffect(hook)

  const handleClickAnswer = (event) => {
    if(lock ===false){
        // Retrieve MCQ object based on option that user clicked on. Access the is_answer property to determine if user's answer is correct or not
        const mcqText = event.target.innerHTML 
        const selectedMCQObject = mcqOptions.filter((mcqOption) => mcqOption.choice_text === mcqText)[0]
        const answerCorrect = selectedMCQObject.is_answer
        if (answerCorrect) {
            let newScore = score + 1
            setScore(newScore)
            event.target.classList.add("correct")
        }
        else {
            event.target.classList.add("wrong")
            const rightAnswerText = mcqOptions.filter((mcqOption) => mcqOption.is_answer === true)[0].choice_text
            const lol = Array.from(document.getElementsByTagName('li'))
            const rightAnswerElement = lol.filter((element) => element.innerHTML === rightAnswerText)[0]
            rightAnswerElement.classList.add("correct")
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
        setLock(false);

      }
    }
  }
  const reset = () => {
    setQuestionIndex(0);
    setQuestionTitle(allQuestions[0].question_text)
    setMCQOptions(allQuestions[0].mcqs)
    setScore(0)
    setLock(false);
    setResult(false);
  }

  const home = () => {
    setQuestionIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    setScore(0);
    navigate("/");
  }

    return (
      <Box>
          <Stack>
            <LinearProgress variant="determinate" value={((questionIndex)+(result?(1):(0)))/(length)*100} />
          </Stack>

          {result?<></>:<>
          <Typography mt={2} fontSize={20}>{questionIndex+1}. {questionTitle}</Typography>

          <ul>
            {
                mcqOptions.map(
                    mcq => {
                        return (
                            <li key={mcq.id} onClick={handleClickAnswer}>{mcq.choice_text}</li>
                        )
                    }
                )
            }
          </ul>
          <button onClick={next}>Next</button>
          </>}
          
          {result?<><h2>You Scored {score} out of {length} </h2>
          <Stack direction="row">
          <button onClick={reset}>Reset</button>
          <button onClick={home}>Home</button>
          </Stack>
         
          </>:<></>}
          
      </Box>
    );}

export default Quiz;