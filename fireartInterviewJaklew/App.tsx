/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import questionsReducer from './src/redux/reducers/questions';
import saga from './src/redux/sagas/';
import {Welcome, Quiz, QuizResults} from './src/screens';

const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(questionsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="QuizResults" component={QuizResults} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
