import React from 'react';
import {CustomText} from 'components/CustomText/CustomText';
import {Icons} from 'components/Icons/Icons';
import {Stat} from 'components/Stat/Stat';
import {Image, View} from 'react-native';
import {Button} from 'components/Button/Button';
import {styles} from './ProfileSection.style';

const imageSize = 120;
export const ProfileSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.ibb.co/1zrXY93/2e8477cde07b9020c34f31d5250e8f3a-c5-720x720.jpg',
        }}
        style={[
          styles.image,
          {height: imageSize, width: imageSize, borderRadius: imageSize / 2},
        ]}
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
