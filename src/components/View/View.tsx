import { useTheme } from 'hooks/app';
import React from 'react';
import { StyleSheet, View as ViewRN, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  flex?: ViewStyle['flex'];
  h?: number | string;
  w?: number | string;
  r?: boolean;
  contentCenter?: boolean;
  itemCenter?: boolean;
  bg?: string;
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  ph?: number;
  pv?: number;
  rd?: number;
  defaultColor?: string;
}

const View = ({ style = {}, children, ...rest }: Props) => {
  const { color } = useTheme();
  const styleParam = { ...rest, defaultColor: color.sa_background };
  return (
    <ViewRN {...rest} style={[styles(styleParam).viewStyle, style]}>
      {children}
    </ViewRN>
  );
};

export default View;

const styles = ({
  flex,
  r,
  h,
  w,
  bg,
  m,
  mv,
  mh,
  mt,
  mb,
  ml,
  mr,
  p,
  ph,
  pv,
  pt,
  pb,
  pl,
  pr,
  itemCenter,
  contentCenter,
  defaultColor,
  rd,
}: Props) =>
  StyleSheet.create({
    viewStyle: {
      flex: flex,
      backgroundColor: bg || defaultColor,
      height: h,
      width: w,
      flexDirection: r ? 'row' : 'column',
      margin: m,
      marginHorizontal: mh,
      marginVertical: mv,
      marginBottom: mb,
      marginTop: mt,
      marginLeft: ml,
      marginRight: mr,
      padding: p,
      paddingHorizontal: ph,
      paddingVertical: pv,
      paddingBottom: pb,
      paddingTop: pt,
      paddingLeft: pl,
      paddingRight: pr,
      alignItems: itemCenter ? 'center' : undefined,
      justifyContent: contentCenter ? 'center' : undefined,
      borderRadius: rd,
    },
  });
