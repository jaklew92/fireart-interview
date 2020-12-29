import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

type ButtonType = 'navigation' | 'true' | 'false';

interface ButtonProps {
  type: ButtonType;
  title?: string;
  loading?: boolean;
  onPress: () => void;
}

const getButtonStyle = (type: ButtonType) => {
  switch (type) {
    case 'navigation':
      return style.navigationButton;
    case 'true':
      return style.trueButton;
    case 'false':
      return style.falseButton;
  }
};

const getButtonTitle = (type: ButtonType, title?: string) => {
  if (type === 'navigation' || !!title) {
    return title;
  }
  return type;
};

const getTitleStyle = (type: ButtonType) => {
  if (type === 'false') {
    return style.falseText;
  }
  return style.defaultText;
};

const renderText = (type: ButtonType, title?: string, loading?: boolean) => {
  if (loading) {
    return <ActivityIndicator color="white" />;
  }
  return <Text style={getTitleStyle(type)}>{getButtonTitle(type, title)}</Text>;
};

const renderButton = (type: ButtonType, title?: string, loading?: boolean) => {
  switch (type) {
    case 'true':
    case 'false':
      return renderText(type, title);
    case 'navigation':
      return (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFA67A', '#FF6065']}
          style={style.navigationButton}>
          {renderText(type, title, loading)}
        </LinearGradient>
      );
  }
};

export default (props: ButtonProps) => (
  <TouchableOpacity style={getButtonStyle(props.type)} onPress={props.onPress}>
    {renderButton(props.type, props.title, props.loading)}
  </TouchableOpacity>
);
