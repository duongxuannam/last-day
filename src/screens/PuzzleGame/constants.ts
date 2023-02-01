export const SIZE_BOX = 80;
export const ROW_LENGTH = 4;
export const COLUMN_LENGTH = 4;

export enum MOVE_DIRECTION {
  TO_TOP = 'TO_TOP',
  TO_BOTTOM = 'TO_BOTTOM',
  TO_RIGHT = 'TO_RIGHT',
  TO_LEFT = 'TO_LEFT',
}
export enum HORIZONTAL_DIRECTION {
  TO_RIGHT,
  TO_LEFT,
}

export enum VERTICAL_DIRECTION {
  TO_TOP,
  TO_BOTTOM,
}

const MOVE_DIRECTION_ARRAY: MOVE_DIRECTION[] = [
  MOVE_DIRECTION.TO_BOTTOM,
  MOVE_DIRECTION.TO_TOP,
  MOVE_DIRECTION.TO_LEFT,
  MOVE_DIRECTION.TO_RIGHT,
];

export interface POSITION_CAN_SWIPES {
  [index: number]: POSITION_CAN_SWIPE;
}

export interface POSITION_CAN_SWIPE {
  direction: MOVE_DIRECTION;
  currentPosition: number;
  nextAvailablePosition: number;
}

export const getRandomMoveDirection = (): MOVE_DIRECTION => {
  const randomIndex: number = Math.floor(
    Math.random() * MOVE_DIRECTION_ARRAY.length,
  );
  return MOVE_DIRECTION_ARRAY[randomIndex];
};

export interface Item {
  id: number;
  currentIndex: number;
  value: number;
  isMatch?: boolean;
  img: string;
}
export const data: Array<Item> = [
  {
    id: 1,
    currentIndex: 1,
    value: 1,
    isMatch: true,
    img: require('./image/1.jpg'),
  },
  {id: 2, currentIndex: 2, value: 6, img: require('./image/2.jpg')},
  {id: 3, currentIndex: 3, value: 7, img: require('./image/3.jpg')},
  {id: 4, currentIndex: 4, value: 5, img: require('./image/4.jpg')},
  {id: 5, currentIndex: 5, value: 2, img: require('./image/5.jpg')},
  {id: 6, currentIndex: 6, value: 3, img: require('./image/6.jpg')},
  {id: 7, currentIndex: 7, value: 8, img: require('./image/7.jpg')},
  {id: 8, currentIndex: 8, value: 4, img: require('./image/8.jpg')},
  {id: 9, currentIndex: 9, value: 9, img: require('./image/9.jpg')},
  {id: 10, currentIndex: 10, value: 13, img: require('./image/10.jpg')},
  {id: 11, currentIndex: 11, value: 10, img: require('./image/11.jpg')},
  {id: 12, currentIndex: 12, value: 12, img: require('./image/12.jpg')},
  {id: 13, currentIndex: 13, value: 11, img: require('./image/13.jpg')},
  {id: 14, currentIndex: 14, value: 16, img: require('./image/14.jpg')},
  {id: 15, currentIndex: 15, value: 14, img: require('./image/15.jpg')},
  {id: 16, currentIndex: 16, value: 15, img: require('./image/16.jpg')},
  {id: 17, currentIndex: 17, value: 11, img: require('./image/17.jpg')},
  {id: 18, currentIndex: 18, value: 16, img: require('./image/18.jpg')},
  {id: 19, currentIndex: 19, value: 14, img: require('./image/19.jpg')},
  {id: 20, currentIndex: 20, value: 15, img: require('./image/20.jpg')},
  // {id: 10, currentIndex: 10, value: 3},
  // {id: 11, currentIndex: 11, value: 2},
  // {id: 12, currentIndex: 12, value: 5},
  // {id: 13, currentIndex: 13, value: 11},
  // {id: 14, currentIndex: 14, value: 7},
  // {id: 15, currentIndex: 15, value: 10},
  // {id: 16, currentIndex: 16, value: 16},
];
