import Image from 'components/Image';
import { responsiveHeight, responsiveWidth } from 'utils/responsive';
import View from 'components/View';
import React from 'react';
import { Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Title2 } from 'components/Text/Text';
import SizedBox from 'components/SizedBox';
import { ImageProps } from 'expo-image';
import { ColorType } from 'constants/colors';
import { useTheme } from 'hooks/app';

interface Props {
    style?: ViewStyle;
    textStyle?: TextStyle;
    text: string;
    icon?: ImageProps['source'];
    onPress?: () => null;
}

const IconButton: React.FC<Props> = ({
    text,
    style = {},
    textStyle = {},
    icon,
    onPress,
}) => {
    const { color } = useTheme();
    return (
        <Pressable onPress={onPress}>
            <View
                ph={responsiveWidth(20)}
                pv={responsiveHeight(16)}
                r
                rd={responsiveWidth(15)}
                itemCenter
                contentCenter
                style={[style, styles(color).container]}>
                {icon && (
                    <>
                        <Image source={icon} style={styles(color).img} />
                        <SizedBox w={responsiveWidth(10)} />
                    </>
                )}
                <Title2 style={[textStyle, styles(color).textStyle]}>
                    {text}
                </Title2>
            </View>
        </Pressable>
    );
};

export default IconButton;

const styles = (color: ColorType) =>
    StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: color.border,
        },
        textStyle: {},
        img: {
            height: responsiveWidth(25),
            width: responsiveWidth(25),
        },
    });
