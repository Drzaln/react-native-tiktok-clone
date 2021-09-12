import React from 'react';
import Icons from 'components/Icons';
import {Pressable, StyleSheet} from 'react-native';

type TViewLayout = {
  height: number;
  width: number;
  x: number;
  y: number;
};

interface Props {
  setViewMeasure?: (data: TViewLayout) => void;
  onPress: () => void;
  iconColor: string;
  iconName: string;
}

const MenuButton: React.FC<Props> = ({
  children,
  setViewMeasure,
  onPress,
  iconColor,
  iconName,
}) => {
  const onMeasureViewSize = (e: {
    nativeEvent: {
      layout: {height: number; width: number; x: number; y: number};
    };
  }) => {
    setViewMeasure ? setViewMeasure(e.nativeEvent.layout) : null;
  };
  return (
    <Pressable
      android_ripple={{color: 'lightgrey'}}
      style={styles.button}
      onLayout={onMeasureViewSize}
      onPress={onPress}>
      <Icons name={iconName} color={iconColor} />
      {children}
    </Pressable>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  button: {flex: 1, paddingVertical: 8, alignItems: 'center'},
});
