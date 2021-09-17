import React from 'react';
import {CustomText} from 'components/CustomText/CustomText';
import {Dimensions, View} from 'react-native';
import {styles} from './SecondPage.style';

const {width} = Dimensions.get('window');

export const SecondPage = () => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
        },
      ]}>
      <CustomText weight="SemiBold" fontSize={14} style={styles.boldText}>
        This user's liked videos are private
      </CustomText>
      <CustomText fontSize={13} style={styles.center}>
        Videos liked by wealth are currently hidden
      </CustomText>
    </View>
  );
};
