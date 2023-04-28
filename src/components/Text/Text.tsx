import { useTheme } from 'hooks/app';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text as TextRN, TextProps, TextStyle } from 'react-native';
import { FONTS } from 'utils/fonts';

interface Props extends TextProps {
    s?: number;
    fw?: TextStyle['fontWeight'];
    fs?: TextStyle['fontStyle'];
    f?: TextStyle['fontFamily'] | FONTS;
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
    textDecorationLine?: TextStyle['textDecorationLine'];
    defaultColor?: string;
}

const Text = ({ style = {}, children, ...rest }: Props): JSX.Element => {
    const { color } = useTheme();
    const styleParam = { ...rest, defaultColor: color.sa_textColor };
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
    textDecorationLine,
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
            textDecorationLine: textDecorationLine || undefined,
        },
    });

export default Text;

export const Title0: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Bold'}
            fw={fw || '500'}
            s={s || 24}
            lh={lh || 26}
            {...props}>
            {children}
        </Text>
    );
};

export const Title1: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Bold'}
            fw={fw || '500'}
            s={s || 22}
            lh={lh || 25}
            {...props}>
            {children}
        </Text>
    );
};
export const Title2: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Bold'}
            fw={fw || '500'}
            s={s || 18}
            lh={lh || 20}
            {...props}>
            {children}
        </Text>
    );
};
export const Title3: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Bold'}
            fw={fw || '500'}
            s={s || 16}
            lh={lh || 17}
            {...props}>
            {children}
        </Text>
    );
};

export const Text1: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Book'}
            fw={fw || '500'}
            s={s || 22}
            lh={lh || 25}
            {...props}>
            {children}
        </Text>
    );
};

export const Text2: React.FC<PropsWithChildren<Props>> = ({
    fw,
    s,
    lh,
    f,
    children,
    ...props
}) => {
    return (
        <Text
            f={f || 'BentonSans-Book'}
            fw={fw || '500'}
            s={s || 16}
            lh={lh || 20}
            {...props}>
            {children}
        </Text>
    );
};
