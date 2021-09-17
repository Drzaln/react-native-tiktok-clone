import React from 'react';
import {CustomText} from 'components/CustomText/CustomText';
import {View} from 'react-native';
import {styles} from './Stat.style';

type StatProps = {
  name: string;
  statNumber: string;
};

export const Stat: React.FC<StatProps> = ({name, statNumber}) => {
  return (
    <View style={styles.container}>
      <CustomText weight="Bold" fontSize={19} style={styles.marginB6}>
        {statNumber}
      </CustomText>
      <CustomText weight="Regular" fontSize={14} color="grey">
        {name}
      </CustomText>
    </View>
  );
};
