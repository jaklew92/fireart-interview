import {combineReducers} from 'redux';
import * as actionType from '../const/actionTypes';

export type Question = {
  id: number;
  category: string;
  question: string;
  correct_answer: boolean;
  givenAnswer: boolean;
};

type QuestionsStore = {
  requestLoading: boolean;
  requestError: boolean;
  requestSuccess: boolean;
  questions: [Question] | null;
};

type ActionPrototype = {
  type: string;
  payload: any;
};

const initialState: QuestionsStore = {
  requestLoading: false,
  requestError: false,
  requestSuccess: false,
  questions: null,
};

const questionsReducer = (
  state: QuestionsStore = initialState,
  action: ActionPrototype,
) => {
  if (action.type === actionType.REQUEST_QUESTIONS) {
    return {
      ...state,
      requestLoading: true,
      requestError: false,
      requestSuccess: false,
    };
  } else if (action.type === actionType.REQUEST_QUESTIONS_SUCCESS) {
    return {
      ...state,
      requestLoading: false,
      requestSuccess: true,
      requestError: false,
      questions: action.payload,
    };
  } else if (action.type === actionType.REQUEST_QUESTIONS_ERROR) {
    return {
      ...state,
      requestLoading: false,
      requestError: true,
      requestSuccess: false,
    };
  } else if (action.type === actionType.REQUEST_QUESTIONS_CLEAR) {
    return {
      ...state,
      requestLoading: false,
      requestError: false,
      requestSuccess: false,
    };
  } else if (action.type === actionType.ANSWER) {
    const {id, answer} = action.payload;
    const {questions} = state;
    const question = questions && questions[id];
    if (questions && questions[id] !== null) {
      questions[id] = {
        ...question,
        givenAnswer: answer,
      };
    }

    console.log(
      'answering. state: ' +
        JSON.stringify({
          ...state,
          questions: questions,
        }),
    );
    return {
      ...state,
      questions: questions,
    };
  } else if (action.type === actionType.CLEAR) {
    return initialState;
  }
  return initialState;
};

export default combineReducers({questions: questionsReducer});
