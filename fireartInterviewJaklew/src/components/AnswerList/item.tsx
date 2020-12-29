import React from 'react';
import {Text, View} from 'react-native';
import Right from '../../../assets/tick.svg';
import Wrong from '../../../assets/cross-blue.svg';
import style from './style';

interface ItemProps {
  right: boolean;
  text: string;
}

export default (props: ItemProps) => (
  <View
    style={[
      style.itemContainer,
      props.right ? style.itemContainerRight : style.itemContainerWrong,
    ]}>
    <Text numberOfLines={4} style={style.itemText}>
      {props.text}
    </Text>
    {props.right ? (
      <Right style={style.image} />
    ) : (
      <Wrong style={style.image} />
    )}
  </View>
);
