import React from 'react';
import CustomText from 'components/CustomText';
import Icons from 'components/Icons';
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

const {width} = Dimensions.get('window');

type ImageProps = {
  source: ImageSourcePropType;
};

const ImageContainer: React.FC<ImageProps> = ({source}) => {
  return (
    <View style={styles.container}>
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

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    margin: 1,
    height: 160,
    width: width * 0.3282,
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 4,
  },
  textContainer: {flexDirection: 'row', alignItems: 'center'},
  marginL6: {marginLeft: 6},
});
