import { CHANGE_QUESTION, CHANGE_SCORE } from "./actionTypes";

const intialState={
    question_category: "testing",
    score: 0
}

const reducer = (state = intialState,action) => {
    switch(action.type) {
        case CHANGE_QUESTION:
            return {
                ...state, 
                question_category:action.payload
            }
        
        case CHANGE_SCORE:
                return {
                    ...state, 
                    score: action.payload
                }
        default:
            return state;
    }

}

export default reducer;