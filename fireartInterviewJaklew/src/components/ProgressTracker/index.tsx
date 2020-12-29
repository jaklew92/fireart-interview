import React from 'react';
import {View} from 'react-native';
import Numbers from './numbers';
import LinearTracker from './linearTracker';
import style from './style';

export interface TrackerProps {
  total: number;
  current: number;
}

export default (props: TrackerProps) => {
  return (
    <View style={style.trackerContainer}>
      <Numbers {...props} />
      <LinearTracker {...props} />
    </View>
  );
};
