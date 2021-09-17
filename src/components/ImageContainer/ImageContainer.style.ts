import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 1,
    height: 160,
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
