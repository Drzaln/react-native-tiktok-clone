import React from 'react';
import MenuButton from 'components/MenuButton';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

type MenuProps = {
  selected: number;
  scrollX: Animated.Value;
  setX: (x: number) => void;
  x: number;
  onFirstPress: () => void;
  onSecondPress: () => void;
};

const MenuSection: React.FC<MenuProps> = ({
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
          iconName="grid"
          iconColor={selected === 0 ? 'black' : 'grey'}>
          <Animated.View
            style={[styles.indicator, {transform: [{translateX: indicatorX}]}]}
          />
        </MenuButton>
        <MenuButton
          onPress={onSecondPress}
          iconColor={selected === 1 ? 'black' : 'grey'}
          iconName="heart"
          setViewMeasure={data => setX(data.x)}
        />
      </View>
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderTopColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  indicator: {
    position: 'absolute',
    width: 50,
    height: 2,
    backgroundColor: 'black',
    bottom: 0,
  },
});
