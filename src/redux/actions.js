import {
    CHANGE_QUESTION,
    CHANGE_SCORE
} from "./actionTypes"

export const handleQuestionChange = payload => ({
    type:CHANGE_QUESTION,
    payload
});

export const handleScoreChange= payload => ({
    type:CHANGE_SCORE,
    payload
});