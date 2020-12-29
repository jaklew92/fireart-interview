import {StyleSheet, Platform} from 'react-native';
import {textStyle} from '../../const';
import { textStyles } from '../../const/style';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 30,
    width: 320,
    maxHeight: 100,
    minHeight: 50,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    ...textStyles.medium,
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  inputText: {
    ...textStyles.medium,
    color: 'white',
    ...Platform.select({
      android: {
        marginLeft: 10,
      },
    })
  },
});
