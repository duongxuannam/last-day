import Image from 'components/Image';
import {
    heightPercentageToDP,
    responsiveHeight,
    responsiveWidth,
    screenHeight,
    screenWidth,
    widthPercentageToDP,
} from 'utils/responsive';
import View from 'components/View';
import React, { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from 'hooks/app';
import { useTranslation } from 'react-i18next';
import SizedBox from 'components/SizedBox';
import { FONTS } from 'utils/fonts';
import { Text2, Title0, Title1, Title3 } from 'components/Text';
import Input from 'components/Input';
import IconButton from './IconButton';
import Button from 'components/Button';
import { useSignInHook } from './signInHook';
import { Controller } from 'react-hook-form';

const logo = require('assets/images/logo.png');
const fb = require('assets/images/icons/fb.png');
const google = require('assets/images/icons/google.png');

const SignInScreen = ({ onNext }: any) => {
    const {
        control,
        emailError,
        passwordError,
        onSubmit,
        handleSubmit,
        reset,
    } = useSignInHook();
    const { color } = useTheme();
    const { t } = useTranslation();

    const onNextHandle = useCallback(() => {
        onNext(1);
        reset();
    }, [onNext, reset]);

    return (
        <View h={screenHeight} w={screenWidth} itemCenter>
            <SizedBox h={heightPercentageToDP('6')} />
            <Image source={logo} style={styles.logo} />
            <SizedBox h={heightPercentageToDP('2')} />
            <Title0
                f={FONTS['BentonSans-Bold']}
                s={30}
                lh={30}
                cl={color.sa_main}>
                FoodNinja
            </Title0>
            <SizedBox h={heightPercentageToDP('0.2')} />
            <Text2 f={FONTS['BentonSans-Medium']}>
                {t('auth.description_title')}
            </Text2>
            <SizedBox h={heightPercentageToDP('5')} />
            <Title1>{t('auth.sign_in')}</Title1>

            <View p={widthPercentageToDP(8)} w="100%">
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <Input
                                isError={!!emailError}
                                placeholder="Email"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        );
                    }}
                    name="email"
                />
                <SizedBox h={heightPercentageToDP('1')} />
                {!!emailError && <Text2 cl={color.textRed}>{emailError}</Text2>}
                <SizedBox h={heightPercentageToDP('1')} />

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <Input
                                isError={!!passwordError}
                                placeholder="Password"
                                isHiddenText
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        );
                    }}
                    name="password"
                />
                <SizedBox h={heightPercentageToDP('1')} />
                {!!passwordError && (
                    <Text2 cl={color.textRed}>{passwordError}</Text2>
                )}
                <SizedBox h={heightPercentageToDP('2')} />
                <Title3 ct>or continue with</Title3>
                <SizedBox h={heightPercentageToDP('2')} />
                <View r style={styles.btnContainer}>
                    <IconButton text="Facebook" icon={fb} />
                    <IconButton text="Google" icon={google} />
                </View>
                <SizedBox h={heightPercentageToDP('2')} />
                <Pressable>
                    <Title3
                        cl={color.sa_main}
                        ct
                        textDecorationLine="underline">
                        Forgot your Password?
                    </Title3>
                </Pressable>
            </View>
            <Button text={'Login'} onPress={handleSubmit(onSubmit)} />
            <SizedBox h={heightPercentageToDP('2')} />
            <Pressable onPress={onNextHandle}>
                <Title3 cl={color.sa_main} ct textDecorationLine="underline">
                    Sign Up Account
                </Title3>
            </Pressable>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    logo: {
        width: responsiveWidth(150),
        height: responsiveHeight(161),
    },
    btnContainer: {
        justifyContent: 'space-between',
    },
});
