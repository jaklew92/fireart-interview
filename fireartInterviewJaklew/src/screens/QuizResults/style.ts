import {StyleSheet} from 'react-native';
import {textStyles, fontColors, COLOR_MAIN} from '../../const/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_MAIN,
  },
  title: {
    ...textStyles.big,
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 10,
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
    bottom: 200,
    left: 0,
  },
  bubbleBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bubbleMiddleTopRight: {
    position: 'absolute',
    bottom: 90,
    right: 0,
  },
  bubbleMiddleBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});
