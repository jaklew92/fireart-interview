import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLOR_MAIN, textStyles} from '../../const/style';

const button: ViewStyle = {
  borderRadius: 14,
  width: 320,
  height: 65,
  alignItems: 'center',
  justifyContent: 'center',
};

const text: TextStyle = {
  fontFamily: 'Quicksand-Bold',
  textTransform: 'uppercase',
};

export default StyleSheet.create({
  navigationButton: {
    ...button,
  },
  trueButton: {
    ...button,
    backgroundColor: COLOR_MAIN,
  },
  falseButton: {
    ...button,
    marginTop: 7,
    borderColor: COLOR_MAIN,
    borderWidth: 2,
  },
  defaultText: {
    ...textStyles.button,
    ...text,
    color: 'white',
  },
  falseText: {
    ...textStyles.button,
    ...text,
    textTransform: 'uppercase',
    color: COLOR_MAIN,
  },
});
