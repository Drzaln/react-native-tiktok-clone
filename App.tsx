import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from 'screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
