declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.react-i18next' {
  import en from './src/languages/en.json';
  // and extend them!
  export interface Resources {
    translation: typeof en;
  }
}
