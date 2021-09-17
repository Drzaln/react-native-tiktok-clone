import React from 'react';
import {CustomText} from 'components/CustomText/CustomText';
import {Icons} from 'components/Icons/Icons';
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
import {styles} from './ImageContainer.style';

const {width} = Dimensions.get('window');

type ImageProps = {
  source: ImageSourcePropType;
};

export const ImageContainer: React.FC<ImageProps> = ({source}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: width * 0.3282,
        },
      ]}>
      <ImageBackground source={source} style={styles.imageBackground}>
        <View style={styles.textContainer}>
          <Icons name="right-outline" color="white" size={19} />
          <CustomText fontSize={14} color="white" style={styles.marginL6}>
            99.6K
          </CustomText>
        </View>
      </ImageBackground>
    </View>
  );
};
