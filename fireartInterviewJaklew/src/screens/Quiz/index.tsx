import React from 'react';
import {View, Text} from 'react-native';
import {Button, ProgressTracker} from '../../components';
import style from './style';

interface QuizProps {
  questions: Array<any> | null;
  answer: (payload: boolean) => void;
}

interface QuizState {
  currentQuestion: number;
}

export default class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
      currentQuestion: 1,
    };
  }

  private answer(how: boolean){
    this.setState({currentQuestion: this.state.currentQuestion + 1});
  }
  
  render() {
    return (
      <View style={style.container}>
        
        <ProgressTracker current={this.state.currentQuestion} total={10} />
        <Button
          type="true"
          onPress={() => this.answer(true)}
        />
        <Button
          type="false"
          onPress={() => this.answer(false)}
        />
      </View>
    );
  }
}
