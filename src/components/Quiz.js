
const question = ["what is the equation for force?", "F=ma", "F=a/m" , "s=v/t" , "a = v-u/t", "F=ma"]

function Quiz() {
    return (
      <div className="App">
        <div className="App-header">
          <p>
            Example Quiz
          </p>
        </div>
        <body>
        <p className="question" id ="q1">{question[0]}</p>
        <p className="answer" id = "ansA"> {question[1]}</p>
        <p className="answer" id = "ansB"> {question[2]}</p>
        <p className="answer" id = "ansB"> {question[3]}</p>
        <p className="answer" id = "ansB"> {question[4]}</p>
        </body>
      </div>
    );}

export default Quiz;