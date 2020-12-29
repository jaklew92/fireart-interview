import React from 'react';
import {Text} from 'react-native';
import style from './style';
import {TrackerProps} from './index';

export default (props: TrackerProps) => {
  return (
    <Text>
      <Text style={style.current}>{props.current}</Text>
      <Text style={style.slash}>/</Text>
      <Text style={style.total}>{props.total}</Text>
    </Text>
  );
};
