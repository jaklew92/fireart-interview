import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button, AnswerList, ScoreStars, Numbers} from '../../components';
import {Question} from '../../redux/reducers/questions';
import {clear} from '../../redux/actions/questions';
import Person from '../../../assets/person.svg';
import BubbleTopLeft from '../../../assets/bubble-questionResultsScreenTopLeft.svg';
import BubbleTopRight from '../../../assets/bubble-questionResultsScreenTopRight.svg';
import BubbleBottomLeft from '../../../assets/bubble-questionResultsScreenBottomLeft.svg';
import BubbleMiddleBottomRight from '../../../assets/bubble-questionResultsScreenMiddleBottomRight.svg';
import BubbleMiddleTopRight from '../../../assets/bubble-questionResultsScreenMiddleTopRight.svg';
import BubbleBottomRight from '../../../assets/bubble-questionResultsScreenBottomRight.svg';
import style from './style';

interface QuizResultsProps {
  questions: [Question];
  clear: () => void;
}

class QuizResults extends React.Component<QuizResultsProps> {
  get mappedQuestions() {
    return (
      this.props.questions &&
      this.props.questions.map((q) => {
        return {
          text: q.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&deg;/g, '°'),
          right: q.givenAnswer === JSON.parse(q.correct_answer.toLowerCase()),
        };
      })
    );
  }

  get right() {
    return this.mappedQuestions && this.mappedQuestions.filter((q) => q.right === true).length;
  }

  get wrong() {
    return this.mappedQuestions && this.mappedQuestions.filter((q) => q.right === false).length;
  }

  playAgain() {
    this.props.navigation.navigate('Welcome');
    this.props.clear();
  }

  render() {
    return (
      <View style={style.container}>
      <BubbleTopLeft style={style.bubbleTopLeft} />
      <BubbleTopRight style={style.bubbleTopRight} />
      <BubbleBottomLeft style={style.bubbleBottomLeft} />
      <BubbleBottomRight style={style.bubbleBottomRight} />
      <BubbleMiddleTopRight style={style.bubbleMiddleTopRight} />
      <BubbleMiddleBottomRight style={style.bubbleMiddleBottomRight} />
        <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 15}}>
          <Person style={{backgroundColor: 'white', borderRadius: 20}} />
          <Text style={style.title}>You scored</Text>
          <Numbers score current={this.right} total={this.right+this.wrong}/>
        </View>
        <ScoreStars right={this.right} wrong={this.wrong} />
        <AnswerList questions={this.mappedQuestions} />
        <Button style={{marginVertical: 20}} type='navigation' title='play again' onPress={() => this.playAgain()} />
      </View>
    );
  }
}

const mapStateToProps = ({questions}) => ({
  questions: questions.questions,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);
