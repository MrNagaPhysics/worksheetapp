const Question = (mcqOptions, handleClickAnswer) => {
    return (
    <ul>
        {
            mcqOptions.map(
                mcq => {
                    return (
                      <li key={mcq.id} onClick={handleClickAnswer} id={mcq.choice_text}>
                        {mcq.choice_text}
                      </li>
                    )
                }
            )
        }
      </ul>
    )
}

export default Question

            {/* <ul>
              {
                  mcqOptions.map(
                      mcq => {
                          return (
                            <li key={mcq.id} onClick={handleClickAnswer} id={mcq.choice_text}>
                              {mcq.choice_text}
                            </li>
                          )
                      }
                  )
              }
            </ul> */}