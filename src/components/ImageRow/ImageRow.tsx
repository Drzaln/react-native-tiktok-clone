import React from 'react';
import {ImageContainer} from 'components/ImageContainer/ImageContainer';
import {Dimensions, View} from 'react-native';
import {styles} from './ImageRow.style';

const {width} = Dimensions.get('window');

type source = {
  medium: string;
};

type image = {
  src: source;
};

type Props = {
  data: image[];
};

export const ImageRow: React.FC<Props> = ({data}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width,
        },
      ]}>
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
