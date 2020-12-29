import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';

interface AnswerListProps {
  questions: [any];
}

export default (props: AnswerListProps) => {
  return (
    <>
      <FlatList
        data={props.questions}
        renderItem={({item}) => <Item {...item} />}
      />
    </>
  );
};
