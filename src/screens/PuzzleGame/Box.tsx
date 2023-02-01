import View from 'components/View';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGesture,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Item, MOVE_DIRECTION, SIZE_BOX} from './constants';

interface Props {
  position?: number;
  nonBox?: boolean;
  setPositions: Function;
  emptyPosition: number;
  item: Item;
  currentIndex: number;
  isCanSwipe: boolean;
  direction: MOVE_DIRECTION | undefined;
  onMatchBoxCallback: Function;
  img?: any;
}

const Box: React.FC<Props> = ({
  img,
  setPositions,
  isCanSwipe,
  direction,
  currentIndex,
}) => {
  const offset = useSharedValue({
    x: 0,
    y: 0,
  });
  const nextOffset = useSharedValue({
    x: 0,
    y: 0,
  });

  const rBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(offset.value.x)},
        {translateY: withTiming(offset.value.y)},
      ],
      zIndex: 2,
    };
  });

  const handleNextPosition = async () => {
    setPositions(currentIndex);
  };

  const gesture: PanGesture = Gesture.Pan()
    .enabled(isCanSwipe)
    // .runOnJS(true)
    .onStart(event => {
      switch (direction) {
        case MOVE_DIRECTION.TO_LEFT:
          if (
            event.velocityX &&
            Math.abs(event.velocityX) > Math.abs(event.velocityY) &&
            event.velocityX < 0
          ) {
            nextOffset.value = {
              x: offset.value.x - SIZE_BOX,
              y: offset.value.y,
            };
          }
          break;

        case MOVE_DIRECTION.TO_RIGHT:
          if (
            event.velocityX &&
            Math.abs(event.velocityX) > Math.abs(event.velocityY) &&
            event.velocityX > 0
          ) {
            nextOffset.value = {
              x: offset.value.x + SIZE_BOX,
              y: offset.value.y,
            };
          }
          break;

        case MOVE_DIRECTION.TO_TOP:
          if (
            event.velocityY &&
            Math.abs(event.velocityX) < Math.abs(event.velocityY) &&
            event.velocityY < 0
          ) {
            nextOffset.value = {
              x: offset.value.x,
              y: offset.value.y - SIZE_BOX,
            };
          }
          break;

        case MOVE_DIRECTION.TO_BOTTOM:
          if (
            event.velocityY &&
            Math.abs(event.velocityX) < Math.abs(event.velocityY) &&
            event.velocityY > 0
          ) {
            nextOffset.value = {
              x: offset.value.x,
              y: offset.value.y + SIZE_BOX,
            };
          }
          break;

        default:
          break;
      }
    })
    .onUpdate(event => {
      if (
        event.translationX + offset.value.x > SIZE_BOX + offset.value.x ||
        event.translationX + offset.value.x < -SIZE_BOX + offset.value.x ||
        event.translationY + offset.value.y > SIZE_BOX + offset.value.y ||
        event.translationY + offset.value.y < -SIZE_BOX + offset.value.y
      ) {
        return;
      }
      offset.value = {
        x: nextOffset.value.x,
        y: nextOffset.value.y,
      };
    })
    .onEnd(event => {
      switch (direction) {
        case MOVE_DIRECTION.TO_LEFT:
          if (
            event.translationX &&
            Math.abs(event.translationX) > Math.abs(event.translationY) &&
            event.translationX < 0
          ) {
            runOnJS(handleNextPosition)();

            // handleNextPosition();
          }
          break;

        case MOVE_DIRECTION.TO_RIGHT:
          if (
            event.translationX &&
            Math.abs(event.translationX) > Math.abs(event.translationY) &&
            event.translationX > 0
          ) {
            runOnJS(handleNextPosition)();
            // handleNextPosition();
          }
          break;

        case MOVE_DIRECTION.TO_TOP:
          if (
            event.translationY &&
            Math.abs(event.translationX) < Math.abs(event.translationY) &&
            event.translationY < 0
          ) {
            runOnJS(handleNextPosition)();
            // handleNextPosition();
          }
          break;

        case MOVE_DIRECTION.TO_BOTTOM:
          if (
            event.translationY &&
            Math.abs(event.translationX) < Math.abs(event.translationY) &&
            event.translationY > 0
          ) {
            runOnJS(handleNextPosition)();
            // handleNextPosition();
          }
          break;
        default:
          break;
      }
    });

  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBoxStyle]}>
          <View style={styles.flex1}>
            {/* <Text>{position}</Text> */}
            <Image source={img} style={{width: '100%', height: '100%'}} />
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  spc: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  container: {
    height: SIZE_BOX,
    aspectRatio: 1,
    backgroundColor: 'white',
  },
  flex1: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  zIndex1: {zIndex: 1},
});

// export default Box;
export default React.memo<Props>(Box, (preProps, nextProps) => {
  if (
    nextProps.isCanSwipe !== preProps.isCanSwipe ||
    nextProps.currentIndex !== preProps.currentIndex
  ) {
    return false;
  }
  return true;
});
