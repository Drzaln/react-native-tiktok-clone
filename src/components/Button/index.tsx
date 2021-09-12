import CustomText from 'components/CustomText';
import Icons from 'components/Icons';
import React from 'react';
import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Props = {
  text?: string;
  icon?: string;
  backgroundColor?: string;
  outlined?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconSize?: number;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({
  text,
  icon,
  backgroundColor = '#ea4359',
  outlined,
  style,
  textStyle,
  onPress,
  iconSize,
}) => {
  return (
    <Pressable
      android_ripple={{color: 'lightgrey'}}
      style={[
        {
          backgroundColor,
          borderWidth: outlined ? 1 : 0,
        },
        styles.container,
        style,
      ]}
      onPress={onPress}>
      {icon && <Icons name={icon} size={iconSize} />}
      {text && (
        <CustomText
          style={textStyle}
          color={backgroundColor === '#ea4359' ? 'white' : 'black'}
          weight="SemiBold">
          {text}
        </CustomText>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 3,
    borderColor: 'lightgrey',
    justifyContent: 'center',
  },
});
