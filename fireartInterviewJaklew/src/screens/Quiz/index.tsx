import React from 'react';
import {connect} from 'react-redux';
import {answer} from '../../redux/actions/questions';
import {View, Text} from 'react-native';
import {Button, ProgressTracker, Exit} from '../../components';
import BubbleTopLeft from '../../../assets/bubble-questionScreenTopLeft.svg';
import BubbleTopRight from '../../../assets/bubble-questionScreenTopRight.svg';
import BubbleBottomLeft from '../../../assets/bubble-questionScreenBottomLeft.svg';
import BubbleBottomRight from '../../../assets/bubble-questionScreenBottomRight.svg';
import BubbleMiddleRight from '../../../assets/bubble-questionScreenMiddleRight.svg';
import style from './style';

interface QuizProps {
  questions: Array<any> | null;
  answer: (payload: any) => void;
}

interface QuizState {
  currentQuestion: number;
}

class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: QuizProps) {
    super(props);
    this.state = {
      currentQuestion: 1,
    };
  }

  private get questionTitle() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;
    return (
      questions &&
      questions[currentQuestion - 1] &&
      questions[currentQuestion - 1].category
    );
  }

  private get questionText() {
    const {questions} = this.props;
    const {currentQuestion} = this.state;
    return (
      questions &&
      questions[currentQuestion - 1] &&
      questions[currentQuestion - 1].question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
    );
  }

  private answer(how: boolean) {
    const {answer: putInRedux} = this.props;
    putInRedux({answer: how, id: this.state.currentQuestion - 1});
    this.setState({currentQuestion: this.state.currentQuestion + 1});
  }

  componentDidUpdate() {
    if (this.state.currentQuestion > this.props.questions?.length) {
      this.props.navigation.navigate('QuizResults');
    }
  }

  render() {
    if (this.state.currentQuestion > this.props.questions?.length) {
      return null;
    }
    return (
      <View style={style.container}>
        <Exit onPress={() => this.props.navigation.navigate('Welcome')} style={style.exit}/>
        <Text style={style.title} numberOfLines={2} lineBreakMode="middle">
          {this.questionTitle}
        </Text>
        <View style={style.topContainer}>
          <ProgressTracker
            current={this.state.currentQuestion}
            total={this.props.questions?.length}
          />
          <Text style={style.question}>{this.questionText}</Text>
        </View>
        <View style={style.buttonContainer}>
          <Button type="true" onPress={() => this.answer(true)} />
          <Button type="false" onPress={() => this.answer(false)} />
        </View>
        <BubbleTopLeft style={style.bubbleTopLeft} />
        <BubbleMiddleRight style={style.bubbleMiddleRight} />
        <BubbleTopRight style={style.bubbleTopRight} />
        <BubbleBottomLeft style={style.bubbleBottomLeft} />
        <BubbleBottomRight style={style.bubbleBottomRight} />
      </View>
    );
  }
}

const mapStateToProps = ({questions}) => ({
  questions: questions.questions,
});

const mapDispatchToProps = (dispatch) => ({
  answer: (payload) => dispatch(answer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
