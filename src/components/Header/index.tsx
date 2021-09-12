import React from 'react';
import CustomText from 'components/CustomText';
import Icons from 'components/Icons';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Icons name="left" />
      </View>
      <CustomText weight="Bold" fontSize={18}>
        Wealth
      </CustomText>
      <View style={styles.rightFlex}>
        <Icons name="bell" style={styles.marginR24} />
        <Icons name="three-dot" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  flex1: {flex: 1},
  rightFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  marginR24: {marginRight: 24},
});
