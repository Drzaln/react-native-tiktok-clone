import React from 'react';
import {View} from 'react-native';
import {styles} from './Header.style';
import {CustomText} from 'components/CustomText/CustomText';
import {Icons} from 'components/Icons/Icons';

export const Header = () => {
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
