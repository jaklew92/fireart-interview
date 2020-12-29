import {StyleSheet} from 'react-native';
import {textStyles, colors, fontColors} from '../../const/style';

export default StyleSheet.create({
  itemContainer: {
    height: 80,
    width: 350,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 1,
  },
  itemContainerRight: {
    backgroundColor: 'white',
  },
  itemContainerWrong: {
    backgroundColor: colors.orange,
  },
  itemText: {
    marginLeft: 20,
    ...textStyles.medium,
    color: fontColors.blue,
    maxWidth: 200,
  },
  image: {
    marginRight: 20,
  },
});
