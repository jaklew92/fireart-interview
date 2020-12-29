import {StyleSheet} from 'react-native';
import {textStyles, fontColors, colors} from '../../const/style';

const LINE_HEIGHT = 5;

export default StyleSheet.create({
  current: {
    ...textStyles.medium,
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
  },
  slash: {
    ...textStyles.medium,
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
    color: fontColors.blue,
  },
  total: {
    ...textStyles.medium,
    fontSize: 14,
    fontFamily: 'Quicksand-SemiBold',
    color: fontColors.blue,
  },
  lineFilled: {
    borderRadius: 5,
    backgroundColor: colors.salmon,
    height: LINE_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  lineEmpty: {
    borderRadius: 5,
    backgroundColor: colors.grey,
    height: LINE_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  trackerContainer: {
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  tracker: {
    marginTop: 10,
  },
});
