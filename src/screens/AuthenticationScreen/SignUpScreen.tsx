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
import { Text2, Title0, Title1 } from 'components/Text';
import Input from 'components/Input';
import { Title3 } from 'components/Text/Text';
import Button from 'components/Button';
import { useSignUpHook } from './signUpHook';
import { Controller } from 'react-hook-form';

const logo = require('assets/images/logo.png');
const profileIcon = require('assets/images/icons/profile.png');
const mailIcon = require('assets/images/icons/mail.png');
const passwordIcon = require('assets/images/icons/password.png');

const SignUp = ({ onNext }: any) => {
    const {
        control,
        onSubmit,
        handleSubmit,
        reset,
        accountError,
        emailError,
        passwordError,
    } = useSignUpHook();

    const { color } = useTheme();
    const { t } = useTranslation();
    const onNextHandle = useCallback(() => {
        onNext(0);
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
            <Title1>{t('auth.sign_up')}</Title1>
            <View p={widthPercentageToDP(8)} w="100%">
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <Input
                                placeholder="Tên đăng nhập"
                                icon={profileIcon}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                isError={!!accountError}
                            />
                        );
                    }}
                    name="account"
                />
                <SizedBox h={heightPercentageToDP('1')} />
                {!!accountError && (
                    <Text2 cl={color.textRed}>{accountError}</Text2>
                )}
                <SizedBox h={heightPercentageToDP('1')} />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => {
                        return (
                            <Input
                                placeholder="Email"
                                icon={mailIcon}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                isError={!!emailError}
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
                                placeholder="Password"
                                isHiddenText
                                icon={passwordIcon}
                                toggleShow
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                isError={!!passwordError}
                            />
                        );
                    }}
                    name="password"
                />
                <SizedBox h={heightPercentageToDP('1')} />
                {!!passwordError && (
                    <Text2 cl={color.textRed}>{passwordError}</Text2>
                )}
            </View>

            <Button text={'Create Account'} onPress={handleSubmit(onSubmit)} />
            <SizedBox h={heightPercentageToDP('2')} />

            <Pressable onPress={onNextHandle}>
                <Title3 cl={color.sa_main} ct textDecorationLine="underline">
                    already have an account?
                </Title3>
            </Pressable>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    logo: {
        width: responsiveWidth(150),
        height: responsiveHeight(161),
    },
    btnContainer: {
        justifyContent: 'space-between',
    },
});
