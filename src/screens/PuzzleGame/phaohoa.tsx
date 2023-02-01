import React, {useEffect, useRef} from 'react';
import {StyleSheet, Dimensions, View, Animated, Easing} from 'react-native';

const CONFETTI_COLORS = ['#623cea', '#ffe66d', '#06d6a0', '#cc3363', '#00bbf9'];

export const useConfetti = (number = 60) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const dimensions = Dimensions.get('screen');

  const run = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.ease,
      duration: 2000,
    }).start();
  };
  const confetti = (
    <View style={styles.confettiContainer}>
      {[...Array(number)].map((_, index) => {
        const backgroundColor = CONFETTI_COLORS[index % CONFETTI_COLORS.length];
        const startX = Math.random() * dimensions.width;
        const endX = Math.random() * dimensions.width;

        const translateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [startX, endX],
        });

        let startY = 0;
        startY -= styles.confettiBit.width;
        startY -= Math.random() * dimensions.height;
        let endY = dimensions.height;
        endY += styles.confettiBit.width;
        endY += Math.random() * dimensions.height;
        const translateY = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [startY, endY],
        });

        const rotateStart = Math.random() * 360;

        const rotateEnd = rotateStart + 720 + Math.random() * 8 * 360;
        const rotate = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [rotateStart + 'deg', rotateEnd + 'deg'],
        });

        const rotateXStart = Math.random() * 360;
        const rotateXEnd = rotateStart + 360 + Math.random() * 19 * 360;
        const rotateX = animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [rotateXStart + 'deg', rotateXEnd + 'deg'],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.confettiBit,
              {
                backgroundColor,
                transform: [{translateX}, {translateY}, {rotate}, {rotateX}],
              },
            ]}
          />
        );
      })}
      {/* <Button title="test ua" onPress={animate} /> */}
      {/* <TouchableOpacity onPress={run}>
        <Text>bat dau phao hoa</Text>
      </TouchableOpacity> */}
    </View>
  );
  return [confetti, run] as const;
};

const App = () => {
  const [confetti, runAnimated] = useConfetti(60);
  useEffect(() => {
    runAnimated();
  }, [runAnimated]);

  return (
    <>
      {/* <Confetti /> */}
      {confetti}
    </>
  );
};

const styles = StyleSheet.create({
  confettiContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  confettiBit: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 25,
    height: 10,
    borderRadius: 7,
  },
});

export default App;
