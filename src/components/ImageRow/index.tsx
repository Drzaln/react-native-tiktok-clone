import React from 'react';
import ImageContainer from 'components/ImageContainer';
import {Dimensions, StyleSheet, View} from 'react-native';
import {images} from 'context/GetData';

const {width} = Dimensions.get('window');

type Props = {
  data: images[];
};

const ImageRow: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <ImageContainer
              key={index}
              source={{
                uri: item.src.medium,
              }}
            />
          );
        })}
    </View>
  );
};

export default ImageRow;

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
