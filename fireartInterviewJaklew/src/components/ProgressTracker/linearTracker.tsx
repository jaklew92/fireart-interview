import React from 'react';
import {View} from 'react-native';
import style from './style';
import {TrackerProps} from './index';

const LINE_LENGTH = 350;

const calculateProgress = (props: TrackerProps) => {
  return (props.current / props.total) * LINE_LENGTH;
};

export default (props: TrackerProps) => {
  return (
    <View style={style.tracker}>
      <View style={[style.lineEmpty, {width: LINE_LENGTH}]} />
      <View style={[style.lineFilled, {width: calculateProgress(props)}]} />
    </View>
  );
};
