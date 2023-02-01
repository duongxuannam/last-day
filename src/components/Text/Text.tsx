import {useTheme} from 'hooks/app';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, Text as TextRN, TextProps, TextStyle} from 'react-native';

interface Props extends TextProps {
  s?: number;
  fw?: TextStyle['fontWeight'];
  fs?: TextStyle['fontStyle'];
  f?: TextStyle['fontFamily'];
  cl?: string;
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
  ct?: boolean;
  lh?: number;
  defaultColor?: string;
}

const Text = ({style = {}, children, ...rest}: Props): JSX.Element => {
  const {color} = useTheme();
  const styleParam = {...rest, defaultColor: color.text};
  return (
    <TextRN {...rest} style={[styles(styleParam).textStyle, style]}>
      {children}
    </TextRN>
  );
};

const styles = ({
  fw,
  s,
  fs,
  f,
  cl,
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
  ct,
  lh,
  defaultColor,
}: Props) =>
  StyleSheet.create({
    textStyle: {
      color: cl || defaultColor,
      fontFamily: f || 'BentonSans-Book',
      fontSize: s || 20,
      fontWeight: fw || 'normal',
      fontStyle: fs || 'normal',
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
      textAlign: ct ? 'center' : undefined,
      lineHeight: lh,
    },
  });

export default observer(Text);
