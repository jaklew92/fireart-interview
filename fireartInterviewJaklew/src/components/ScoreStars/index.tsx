import React from 'react';
import {View} from 'react-native';
import StarFull from '../../../assets/star-full.svg';
import StarEmpty from '../../../assets/star-empty.svg';

interface StarsProps {
  right: number;
  wrong: number;
}

const calculateRight = (right: number, wrong: number) => {
  return Math.floor((right * 10) / (right + wrong));
};

const renderStars = (right: number) => {
  const jsx = [];
  for (let i = 0; i < 10; i++) {
    if (i < right) {
      jsx.push(<StarFull />);
    } else {
      jsx.push(<StarEmpty />);
    }
  }
  return jsx;
};

export default (props: StarsProps) => {
  const right = calculateRight(props.right, props.wrong);
  return <View style={{flexDirection: 'row', marginBottom: 10}}>{renderStars(right)}</View>;
};
