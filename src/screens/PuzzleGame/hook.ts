import {useCallback, useEffect, useRef, useState} from 'react';
import {data as dataInit, Item} from './constants';
import {useConfetti} from './phaohoa';

export const useSwipeGame = () => {
  const [positions] = useState<Array<Item>>(dataInit);
  const [emptyPosition, setEmptyPosition] = useState<number>(0);
  const [phaohoa, runPhaohoa] = useConfetti();
  const [isWin, setIsWin] = useState(false);
  const processDataRef = useRef(dataInit);

  const onMatchBoxCallback = useCallback((idMatch: number) => {
    const processData = processDataRef.current;
    const index = processData.findIndex(i => i.id === idMatch);
    processData[index].isMatch = !processData[index].isMatch;
    const isWinTemp = processData.every(i => i.isMatch);
    if (isWinTemp) {
      setIsWin(true);
    }
    // setIsWin(true);

    // else {
    //     console.log('GAME CONTINUE', processData);
    //   }
  }, []);

  useEffect(() => {
    if (isWin) {
      runPhaohoa();
    }
  }, [isWin, runPhaohoa]);

  //   const positionCanSwipe = useMemo(() => {
  //     const rs: POSITION_CAN_SWIPES = {};
  //     if (availablePosition - ROW_LENGTH > 0) {
  //       rs[availablePosition - ROW_LENGTH] = {
  //         direction: MOVE_DIRECTION.TO_BOTTOM,
  //         currentPosition: availablePosition,
  //         nextAvailablePosition: availablePosition - ROW_LENGTH,
  //       };
  //     }
  //     if (availablePosition + ROW_LENGTH < dataInit.length) {
  //       rs[availablePosition + ROW_LENGTH] = {
  //         direction: MOVE_DIRECTION.TO_TOP,
  //         currentPosition: availablePosition,
  //         nextAvailablePosition: availablePosition + ROW_LENGTH,
  //       };
  //     }
  //     if (availablePosition % ROW_LENGTH !== 0) {
  //       rs[availablePosition + 1] = {
  //         direction: MOVE_DIRECTION.TO_LEFT,
  //         currentPosition: availablePosition,
  //         nextAvailablePosition: availablePosition + 1,
  //       };
  //     }
  //     if ((availablePosition - 1) % ROW_LENGTH !== 0) {
  //       rs[availablePosition - 1] = {
  //         direction: MOVE_DIRECTION.TO_RIGHT,
  //         currentPosition: availablePosition,
  //         nextAvailablePosition: availablePosition - 1,
  //       };
  //     }
  //     return rs;
  //   }, [availablePosition]);

  //   const setNextPosition = (nextPosition: Item) => {
  //     console.log('howmuch');
  //     const tempPositions = [...positions];
  //     const currentIndexAvailablePosition = tempPositions.findIndex(
  //       e => e.id === availablePosition,
  //     );
  //     const currentAvailablePosition =
  //       tempPositions[currentIndexAvailablePosition];

  //     const nextIndexAvailablePosition = tempPositions.findIndex(
  //       e => e.id === nextPosition.id,
  //     );
  //     tempPositions[currentIndexAvailablePosition] = {
  //       ...currentAvailablePosition,
  //       currentIndex: nextPosition.currentIndex,
  //     };
  //     tempPositions[nextIndexAvailablePosition] = {
  //       ...nextPosition,
  //       currentIndex: currentAvailablePosition.currentIndex,
  //     };

  //     // setPositions(tempPositions);
  //     // setAvailablePosition(nextPosition.id);
  //     // availablePositionHandle.current = nextPosition.id;
  //     setData({
  //       positions: tempPositions,
  //       availablePosition: nextPosition.id,
  //     });
  //   };

  const onPositionChange = useCallback((nextEmpty: number) => {
    setEmptyPosition(nextEmpty);
  }, []);

  return {
    positions,
    emptyPosition,
    setEmptyPosition,
    setPositions: onPositionChange,
    onMatchBoxCallback,
    phaohoa,
    isWin,
  };
};
