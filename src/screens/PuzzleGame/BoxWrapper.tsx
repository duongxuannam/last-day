import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Box from './Box';
import {COLUMN_LENGTH, Item, MOVE_DIRECTION} from './constants';

interface Props {
  item: Item;
  emptyPosition: number;
  currentIndex: number;
  setPositions: Function;
  onMatchBoxCallback: Function;
}

const BoxWrapper: React.FC<Props> = ({
  item,
  emptyPosition,
  //   currentIndex,
  setPositions,
  onMatchBoxCallback,
}) => {
  const [currentItemState, setCurrentIndexState] = useState<Item>(item);

  const {currentIndex: currentIndexState} = currentItemState;

  const isMatch = useRef(currentIndexState === item.value);

  useEffect(() => {
    if (currentIndexState === item.value) {
      isMatch.current = true;
      onMatchBoxCallback(item.id);
    } else if (isMatch.current) {
      isMatch.current = false;
      onMatchBoxCallback(item.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndexState]);

  const direction: MOVE_DIRECTION | undefined = useMemo(() => {
    if (emptyPosition === 0) {
      if (currentIndexState === 1) {
        return MOVE_DIRECTION.TO_TOP;
      }
      return;
    }
    if (emptyPosition === 1 && currentIndexState === 0) {
      return MOVE_DIRECTION.TO_BOTTOM;
    }
    if (emptyPosition === currentIndexState + 1) {
      return MOVE_DIRECTION.TO_RIGHT;
    }
    if (emptyPosition === currentIndexState - 1) {
      return MOVE_DIRECTION.TO_LEFT;
    }
    if (emptyPosition === currentIndexState + COLUMN_LENGTH) {
      return MOVE_DIRECTION.TO_BOTTOM;
    }
    if (emptyPosition === currentIndexState - COLUMN_LENGTH) {
      return MOVE_DIRECTION.TO_TOP;
    }

    return;
  }, [emptyPosition, currentIndexState]);

  const onPositionChange = useCallback(
    (nextEmpty: number) => {
      setCurrentIndexState({
        ...item,
        currentIndex: emptyPosition,
      });
      setPositions(nextEmpty);
    },
    [item, setPositions, emptyPosition],
  );

  return (
    <>
      <Box
        onMatchBoxCallback={onMatchBoxCallback}
        setPositions={onPositionChange}
        position={item.value}
        isCanSwipe={!!direction}
        item={item}
        direction={direction}
        emptyPosition={emptyPosition}
        currentIndex={currentIndexState}
        img={item.img}
      />
    </>
  );
};

export default BoxWrapper;
