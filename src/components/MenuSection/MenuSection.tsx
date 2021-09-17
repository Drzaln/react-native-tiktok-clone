import React from 'react';
import {MenuButton} from 'components/MenuButton/MenuButton';
import {Animated, Dimensions, View} from 'react-native';
import {styles} from './MenuSection.style';

const {width} = Dimensions.get('window');

type MenuProps = {
  selected: number;
  scrollX: Animated.Value;
  setX: (x: number) => void;
  x: number;
  onFirstPress: () => void;
  onSecondPress: () => void;
};

export const MenuSection: React.FC<MenuProps> = ({
  selected,
  scrollX,
  setX,
  x,
  onFirstPress,
  onSecondPress,
}) => {
  const indicatorX = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, x],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MenuButton
          onPress={onFirstPress}
          icon="grid"
          iconColor={selected === 0 ? 'black' : 'grey'}>
          <Animated.View
            style={[styles.indicator, {transform: [{translateX: indicatorX}]}]}
          />
        </MenuButton>
        <MenuButton
          onPress={onSecondPress}
          iconColor={selected === 1 ? 'black' : 'grey'}
          icon="heart"
          setViewMeasure={data => setX(data.x)}
        />
      </View>
    </View>
  );
};
