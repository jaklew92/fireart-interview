import React from 'react';
import {View, Text, Picker, TextInput, ViewStyle} from 'react-native';
import Cup from '../../../assets/cup.svg';
import Star from '../../../assets/amount.svg';
import style from './style';

type InputType = 'difficulty' | 'amount';

interface InputProps {
  type: InputType;
  value: 'easy' | 'hard' | number;
  style: ViewStyle;
  onValueChange: (value: any) => void;
}

const renderHeader = (type: InputType) => {
  return (
    <View style={style.header}>
      {type === 'difficulty' ? <Cup /> : <Star />}
      <Text style={style.text}>{type}</Text>
    </View>
  );
};

export default (props: InputProps) => {
  return (
    <View style={props.style} >
      {renderHeader(props.type)}
      <View style={style.inputContainer}>
        {props.type === 'difficulty' ? (
          <Picker
            selectedValue={props.value}
            style={style.inputText}
            onValueChange={props.onValueChange}>
            <Picker.Item label="easy" value="easy" />
            <Picker.Item label="hard" value="hard" />
          </Picker>
        ) : (
          <TextInput
            style={style.inputText}
            keyboardType="number-pad"
            onChangeText={props.onValueChange}
            value={props.value && props.value.toString()}
          />
        )}
      </View>
    </View>
  );
};
