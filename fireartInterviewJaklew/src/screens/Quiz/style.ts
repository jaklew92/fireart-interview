import {StyleSheet} from 'react-native';
import {textStyles, fontColors} from '../../const/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...textStyles.big,
    color: fontColors.blue,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 30,
  },
  question: {
    ...textStyles.big,
    fontSize: 25,
    marginTop: 50,
    color: fontColors.blue,
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
  bubbleMiddleRight: {
    position: 'absolute',
    bottom: 90,
    right: 0,
  },
  buttonContainer: {
    marginTop: 50,
  },
  topContainer: {
    marginLeft: 35,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  exit: {
    position: 'absolute',
    top: 40,
    right: 40,
  },
});
