import React from 'react';
import Button from 'components/Button';
import CustomText from 'components/CustomText';
import Icons from 'components/Icons';
import Stat from 'components/Stat';
import {Image, StyleSheet, View} from 'react-native';

const imageSize = 120;
const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.ibb.co/1zrXY93/2e8477cde07b9020c34f31d5250e8f3a-c5-720x720.jpg',
        }}
        style={styles.image}
      />
      <CustomText weight="SemiBold">@wealth</CustomText>
      <View style={styles.row}>
        <Stat name="Following" statNumber="40" />
        <View style={styles.divider} />
        <Stat name="Followers" statNumber="5.6M" />
        <View style={styles.divider} />
        <Stat name="Likes" statNumber="128.9M" />
      </View>
      <View style={styles.buttonRow}>
        <Button text="Follow" style={styles.flex1} />
        <Button
          icon="instagram"
          iconSize={40}
          backgroundColor="white"
          outlined
          style={styles.instagramButton}
        />
        <Button
          icon="bottom"
          iconSize={20}
          backgroundColor="white"
          outlined
          style={styles.bottomButton}
        />
      </View>
      <CustomText fontSize={13} style={styles.textCenter}>
        Goal 5.7M 🔝{'\n'}Inspiring Millions Daily! 💫{'\n'}Follow Our Instagram
        (3.3M+) ⬇️
      </CustomText>
      <View style={styles.link}>
        <Icons name="link" size={15} />
        <CustomText weight="SemiBold" fontSize={12} style={styles.marginL4}>
          Instagram.com/Wealth
        </CustomText>
      </View>
      <View style={styles.qaContainer}>
        <Icons name="question" size={15} color="#ea4359" />
        <CustomText
          weight="SemiBold"
          fontSize={12}
          color="#ea4359"
          style={styles.marginL4}>
          Q&A
        </CustomText>
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 24},
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
    marginBottom: 20,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  divider: {height: 20, width: 0.7, backgroundColor: '#e3e3e4'},
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '78%',
    marginBottom: 20,
  },
  flex1: {flex: 1},
  instagramButton: {padding: 6, marginLeft: 6},
  bottomButton: {padding: 16, marginLeft: 6},
  textCenter: {textAlign: 'center'},
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  marginL4: {marginLeft: 4},
  qaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
