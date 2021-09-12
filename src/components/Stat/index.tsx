import React from 'react';
import CustomText from 'components/CustomText';
import {StyleSheet, View} from 'react-native';

type StatProps = {
  name: string;
  statNumber: string;
};

const Stat: React.FC<StatProps> = ({name, statNumber}) => {
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

export default Stat;

const styles = StyleSheet.create({
  container: {alignItems: 'center', padding: 20},
  marginB6: {marginBottom: 6},
});
