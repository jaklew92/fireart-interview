import {call, put, take, fork} from 'redux-saga/effects';
import * as actionTypes from '../const/actionTypes';
import {
  requestQuestionsError,
  requestQuestionsSuccess,
} from '../actions/questions';
import {apiGetQuestions} from '../../api/apiGetQuestions';

function* fetchQuestions() {
  while (true) {
    try {
      const {payload} = yield take(actionTypes.REQUEST_QUESTIONS);
      const {results, status} = yield call(apiGetQuestions, payload);
      if (status === 200) {
        yield put(requestQuestionsSuccess(results));
      } else {
        yield put(requestQuestionsError());
      }
    } catch (e) {
      yield put(requestQuestionsError());
    }
  }
}

export default function* saga() {
  yield fork(fetchQuestions);
}
