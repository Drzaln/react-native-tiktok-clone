import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderTopColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  indicator: {
    position: 'absolute',
    width: 50,
    height: 2,
    backgroundColor: 'black',
    bottom: 0,
  },
});
