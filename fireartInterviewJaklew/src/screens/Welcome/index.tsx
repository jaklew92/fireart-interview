import React from 'react';
import {View, Text, Keyboard, Animated, Alert} from 'react-native';
import {connect} from 'react-redux';
import {
  requestQuestions,
  requestQuestionsClear,
} from '../../redux/actions/questions';
import {Button, Input} from '../../components';
import WelcomeSvg from '../../../assets/welcome.svg';
import BubbleTopLeft from '../../../assets/bubble-welcomeScreenTopLeft.svg';
import BubbleTopRight from '../../../assets/bubble-welcomeScreenTopRight.svg';
import BubbleBottomLeft from '../../../assets/bubble-welcomeScreenBottomLeft.svg';
import BubbleBottomRight from '../../../assets/bubble-welcomeScreenBottomRight.svg';
import style from './style';

interface WelcomeScreenState {
  difficulty: 'easy' | 'hard';
  amount: number;
  keyboardShown: boolean;
}

interface WelcomeScreenProps {
  navigation: any;
  questionsLoading: boolean;
  questionsSuccess: boolean;
  questionsError: boolean;
  submit: (payload: Omit<WelcomeScreenState, 'keyboardShown'>) => void;
  clear: () => void;
}

class Welcome extends React.Component<WelcomeScreenProps, WelcomeScreenState> {
  private keyboardHeight: Animated.Value;
  private keyboardWillShowSub: any;
  private keyboardWillHideSub: any;

  constructor(props: WelcomeScreenProps) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.state = {
      keyboardShown: false,
      difficulty: 'easy',
      amount: 8,
    };
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  componentDidUpdate() {
    const {questionsError, questionsSuccess, clear} = this.props;
    if (!questionsError && questionsSuccess) {
      this.props.navigation.navigate('Quiz');
    } else if (questionsError && !questionsSuccess) {
      Alert.alert('Oops', 'There was an error completing the request...', [
        {text: 'Ok', onPress: () => clear()},
      ]);
    }
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
        useNativeDriver: false,
      }),
    ]).start();
    this.setState({keyboardShown: true});
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start();
    this.setState({keyboardShown: false});
  };

  setDifficulty = (difficulty: 'easy' | 'hard') => this.setState({difficulty});

  setAmount = (amount: number) => this.setState({amount});

  render() {
    return (
      <View style={style.container}>
        <Animated.ScrollView
          style={[style.container, {paddingBottom: this.keyboardHeight}]}
          contentContainerStyle={{alignItems: 'center'}}>
          <Text style={style.welcomeText}>Welcome to the</Text>
          <WelcomeSvg style={style.triviaImage} />
          <Input
            onValueChange={(diff: 'easy' | 'hard') => this.setDifficulty(diff)}
            type="difficulty"
            value={this.state.difficulty}
          />
          <Input
            onValueChange={(amt: number) => this.setAmount(amt)}
            type="amount"
            value={this.state.amount}
          />
          <Button
            type="navigation"
            title="Play"
            loading={this.props.questionsLoading}
            onPress={() => {
              const {amount, difficulty} = this.state;
              this.props.submit({amount, difficulty});
            }}
          />
        </Animated.ScrollView>
        <BubbleTopLeft style={style.bubbleTopLeft} />
        <BubbleTopRight style={style.bubbleTopRight} />
        <BubbleBottomLeft style={style.bubbleBottomLeft} />
        <BubbleBottomRight style={style.bubbleBottomRight} />
      </View>
    );
  }
}

const mapStateToProps = ({questions}) => ({
  questionsLoading: questions.requestLoading,
  questionsError: questions.requestError,
  questionsSuccess: questions.requestSuccess,
});

const mapDispatchToProps = dispatch => ({
  submit: (payload: any) => dispatch(requestQuestions(payload)),
  clear: () => dispatch(requestQuestionsClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
