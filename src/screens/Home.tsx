import FirstPage from 'components/FirstPage';
import Header from 'components/Header';
import MenuSection from 'components/MenuSection';
import ProfileSection from 'components/ProfileSection';
import SecondPage from 'components/SecondPage';
import {GetDataContext} from 'context/GetData';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';
import {isCloseToBottom} from 'utils';

const Home = () => {
  const [x, setX] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const horizontalScroll = React.useRef<ScrollView>(null);
  const {_getDataList} = React.useContext(GetDataContext);
  const {width} = useWindowDimensions();

  const listenScroll = (e: any) => {
    let {x} = e.nativeEvent.contentOffset;
    const halfScreen = Math.floor(width / 2);
    if (x > halfScreen) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  };

  const onMenuPress = React.useCallback((selectedItem, offset) => {
    setSelected(selectedItem);
    horizontalScroll?.current?.scrollTo({x: offset, animated: true});
  }, []);

  return (
    <>
      <Header />
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            _getDataList();
          }
        }}
        style={styles.backgroundStyle}>
        <ProfileSection />
        <MenuSection
          selected={selected}
          scrollX={scrollX}
          x={x}
          onFirstPress={() => onMenuPress(0, 0)}
          onSecondPress={() => onMenuPress(1, width)}
          setX={x => setX(x)}
        />
        <Animated.ScrollView
          ref={horizontalScroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: true,
              listener: (event: NativeSyntheticEvent<unknown>) =>
                listenScroll(event),
            },
          )}
          decelerationRate="fast">
          <FirstPage />
          <SecondPage />
        </Animated.ScrollView>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
});
