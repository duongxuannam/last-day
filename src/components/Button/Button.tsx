import Text from 'components/Text';
import { useTheme } from 'hooks/app';
import { DefaultTFuncReturn } from 'i18next';
import React from 'react';
import { Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { LinearGradientProps, LinearGradient } from 'expo-linear-gradient';
import { responsiveHeight, responsiveWidth } from 'utils/responsive';

interface Props extends Omit<LinearGradientProps, 'colors'> {
    onPress?: () => void;
    colors?: LinearGradientProps['colors'];
    textStyle?: TextStyle;
    text?: string | DefaultTFuncReturn | null;
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
    defaultColor?: string;
}

const Button = ({ style = {}, text, textStyle, onPress, ...rest }: Props) => {
    const { color } = useTheme();
    const styleParam = { ...rest, defaultColor: color.sa_background };
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#53E88B', '#15BE77']}
                {...rest}
                style={[styles(styleParam).viewStyle, style]}>
                <Text
                    f="BentonSans-Bold"
                    fw={'500'}
                    s={16}
                    style={textStyle}
                    cl="white">
                    {text}
                </Text>
            </LinearGradient>
        </Pressable>
    );
};

export default Button;

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
    defaultColor,
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
            paddingHorizontal: ph || responsiveWidth(60),
            paddingVertical: pv || responsiveHeight(18),
            paddingBottom: pb,
            paddingTop: pt,
            paddingLeft: pl,
            paddingRight: pr,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: responsiveWidth(15),
        },
    });
