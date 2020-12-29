import {
  CLEAR,
  ANSWER,
  REQUEST_QUESTIONS,
  REQUEST_QUESTIONS_ERROR,
  REQUEST_QUESTIONS_SUCCESS,
  REQUEST_QUESTIONS_CLEAR,
} from '../const/actionTypes';

export const requestQuestions = (payload: any) => ({
  type: REQUEST_QUESTIONS,
  payload: payload,
});

export const requestQuestionsSuccess = (payload: any) => ({
  type: REQUEST_QUESTIONS_SUCCESS,
  payload: payload,
});

export const requestQuestionsError = () => ({
  type: REQUEST_QUESTIONS_ERROR,
});

export const requestQuestionsClear = () => ({
  type: REQUEST_QUESTIONS_CLEAR,
});

export const answer = (payload: any) => ({
  type: ANSWER,
  payload: payload,
});

export const clear = () => ({
  type: CLEAR,
});
