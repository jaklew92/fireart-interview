import React from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'
import CrossBlue from '../../../assets/cross-blue.svg';
import CrossWhite from '../../../assets/cross-white.svg';

interface ExitProps{
  style?: ViewStyle;
  white?: boolean;
  onPress: () => void;
}

export default (props: ExitProps) => (
  <>
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.white ? <CrossWhite/> : <CrossBlue/>}
    </TouchableOpacity>
  </>
);
