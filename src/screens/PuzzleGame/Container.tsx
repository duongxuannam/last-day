import View from 'components/View';
import { useTheme } from 'hooks/app';
import React from 'react';
import { StyleSheet } from 'react-native';
import BoxWrapper from './BoxWrapper';
import { COLUMN_LENGTH, ROW_LENGTH, SIZE_BOX } from './constants';
import { useSwipeGame } from './hook';

const Game = () => {
  const {
    positions,
    emptyPosition,
    setPositions,
    onMatchBoxCallback,
    phaohoa,
    isWin,
  } = useSwipeGame();
  const { color } = useTheme();
  return (
    <>
      {isWin && phaohoa}
      <View style={styles.container}>
        <View style={styles.spc}>
          <View
            style={[
              styles.nonBox,
              { borderColor: 'back', borderWidth: 1, borderBottomWidth: 0 },
            ]}>
            <View style={styles.subNonBox} bg={color.background} />
          </View>
          <View style={styles.nonBox}>{<View style={styles.subNonBox} />}</View>
          <View style={styles.nonBox}>{<View style={styles.subNonBox} />}</View>
          <View style={styles.nonBox}>{<View style={styles.subNonBox} />}</View>

          {positions.map(item => {
            // if (index + 1 === positions.length) {
            //   return (
            //     <View key={item.id} style={styles.nonBox}>
            //       {<View style={styles.subNonBox} />}
            //     </View>
            //   );
            // }
            return (
              <BoxWrapper
                onMatchBoxCallback={onMatchBoxCallback}
                setPositions={setPositions}
                emptyPosition={emptyPosition}
                key={item?.id}
                item={item}
                currentIndex={item.currentIndex}
              />
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spc: {
    alignItems: 'center',
    justifyContent: 'center',
    width: COLUMN_LENGTH * SIZE_BOX,
    height: (ROW_LENGTH + 1) * SIZE_BOX,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nonBox: {
    zIndex: 1,
    height: SIZE_BOX,
    aspectRatio: 1,
    backgroundColor: 'red',
  },
  subNonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Game;
