import {StyleSheet} from 'react-native';
import {COLOR_MAIN, textStyles} from '../../const/style';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR_MAIN,
    flex: 1,
  },
  contentContainer:{
    alignItems: 'center',
    flex: 1,
  },
  welcomeText: {
    marginTop: 125,
    ...textStyles.big,
  },
  triviaImage: {
    marginTop: -30,
  },
  bubbleTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bubbleTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bubbleBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bubbleBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
