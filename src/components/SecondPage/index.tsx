import React from 'react';
import CustomText from 'components/CustomText';
import {Dimensions, StyleSheet, View} from 'react-native';

const {width} = Dimensions.get('window');

const SecondPage = () => {
  return (
    <View style={styles.container}>
      <CustomText weight="SemiBold" fontSize={14} style={styles.boldText}>
        This user's liked videos are private
      </CustomText>
      <CustomText fontSize={13} style={styles.center}>
        Videos liked by wealth are currently hidden
      </CustomText>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {width, backgroundColor: 'white', minHeight: 200},
  boldText: {textAlign: 'center', marginTop: 66},
  center: {textAlign: 'center'},
});
