import React from 'react';
import Button from 'components/Button';
import ImageRow from 'components/ImageRow';
import {StyleSheet, View} from 'react-native';
import {GetDataContext} from 'context/GetData';

const FirstPage = () => {
  const {imageDatas} = React.useContext(GetDataContext);
  return (
    <View>
      <View style={styles.container}>
        <Button
          icon="media"
          iconSize={26}
          backgroundColor="white"
          text="3rd Grd Dropout"
          textStyle={styles.text}
          outlined
          style={styles.leftButton}
        />
        <Button
          icon="media"
          iconSize={26}
          backgroundColor="white"
          text="Marc Mero Parts"
          textStyle={styles.text}
          outlined
          style={styles.rightButton}
        />
      </View>
      <ImageRow data={imageDatas} />
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', padding: 12},
  text: {fontSize: 14, marginLeft: 4},
  leftButton: {padding: 4, flex: 1, marginRight: 6},
  rightButton: {padding: 4, flex: 1, marginLeft: 6},
});
