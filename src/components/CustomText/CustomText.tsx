import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {styles} from './CustomText.style';

type Props = {
  children: React.ReactNode;
  weight?: 'Regular' | 'Medium' | 'SemiBold' | 'Bold';
  color?: string;
  fontSize?: number;
  props?: TextProps;
  style?: TextStyle;
};

export const CustomText: React.FC<Props> = (
  {children, weight = 'Regular', color = 'black', fontSize = 17, style},
  props,
) => {
  return (
    <Text
      style={[
        {
          fontFamily: `Montserrat-${weight}`,
          color,
          fontSize,
        },
        styles.text,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};
