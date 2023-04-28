import View from 'components/View';
import { ColorType } from 'constants/colors';
import { useTheme } from 'hooks/app';
import React, { useCallback, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    ViewStyle,
    TextStyle,
    Pressable,
} from 'react-native';
import { responsiveWidth } from 'utils/responsive';
import { doNothing } from 'constants/props';
import { useRef } from 'react';
import { Image, ImageProps } from 'expo-image';
import SizedBox from 'components/SizedBox';

const eyeIcon = require('../../../assets/images/icons/show.png');

interface Props {
    containerStyle?: ViewStyle;
    style?: TextStyle;
    placeholder?: string;
    borderColor?: string;
    isHiddenText?: boolean;
    onPress?: typeof doNothing;
    icon?: ImageProps['source'];
    toggleShow?: boolean;
    value: string;
    onChange: any;
    onBlur?: any;
    isError?: boolean;
}

const Input: React.FC<Props> = ({
    containerStyle = {},
    placeholder = '',
    isHiddenText = false,
    style,
    onPress,
    icon,
    toggleShow,
    value,
    onChange,
    onBlur = () => {},
    isError = false,
    ...rest
}) => {
    const [isShowText, setIsShowText] = useState(false);
    const { color } = useTheme();
    const inputRef = useRef<TextInput>(null);

    const onPressHandle = useCallback(() => {
        if (onPress) {
            onPress();
        } else {
            inputRef?.current?.focus();
        }
    }, [onPress]);

    const setIsShowTextHandle = useCallback(() => {
        setIsShowText(preState => !preState);
    }, [setIsShowText]);
    return (
        <Pressable onPress={onPressHandle}>
            <View
                w={'100%'}
                p={responsiveWidth(20)}
                r
                rd={responsiveWidth(15)}
                itemCenter
                style={[
                    containerStyle,
                    styles(rest, color).container,
                    isError && styles(rest, color).errorBorder,
                ]}>
                {icon && (
                    <>
                        <Image
                            tintColor={color.text}
                            source={icon}
                            style={styles(rest, color).icon}
                        />
                        <SizedBox w={responsiveWidth(10)} />
                    </>
                )}
                <TextInput
                    onBlur={onBlur}
                    ref={inputRef}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={isHiddenText && !isShowText}
                    style={[style, styles(rest, color).input]}
                    placeholderTextColor={color.text}
                    onChangeText={text => {
                        onChange(text);
                    }}
                />
                {toggleShow && (
                    <>
                        <SizedBox w={responsiveWidth(10)} />
                        <Pressable onPress={setIsShowTextHandle}>
                            <Image
                                tintColor={color.text}
                                contentFit="contain"
                                source={eyeIcon}
                                style={styles(rest, color).icon}
                            />
                        </Pressable>
                    </>
                )}
            </View>
        </Pressable>
    );
};

export default Input;

const styles = ({ borderColor }: Partial<Props>, color: ColorType) =>
    StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: borderColor || color.border,
        },
        input: {
            // width: '100%',
            flex: 1,
            color: color.text,
        },
        icon: {
            width: responsiveWidth(24),
            aspectRatio: 1,
        },
        errorBorder: {
            borderColor: color.textRed,
        },
    });
