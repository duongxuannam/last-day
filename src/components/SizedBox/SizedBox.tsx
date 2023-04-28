import React from 'react';
import {StyleSheet, View as ViewRN} from 'react-native';

interface Props {
  h?: number | string;
  w?: number | string;
}

const SizedBox = (props: Props) => {
  return <ViewRN style={styles(props).container} />;
};

export default SizedBox;

const styles = ({h, w}: Props) =>
  StyleSheet.create({
    container: {
      height: h,
      width: w,
    },
  });
