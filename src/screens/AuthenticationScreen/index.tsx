import Image from 'components/Image';
import {
    heightPercentageToDP,
    screenHeight,
    screenWidth,
} from 'utils/responsive';
import View from 'components/View';
import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const headerBackground = require('assets/images/header_background.png');

interface IData {
    title: string;
    description: string;
    id: number;
}

enum TYPE_SCREEN {
    SIGN_IN,
    SIGN_UP,
}

const DATA: IData[] = [
    {
        title: 'onboard.step1.title',
        description: 'onboard.step1.description',
        id: 1,
    },
    {
        title: 'onboard.step2.title',
        description: 'onboard.step2.description',
        id: 2,
    },
];

interface ScreenProps {
    type: TYPE_SCREEN;
    ref?: React.RefObject<FlashList<IData>>;
    onNext: Function;
}

const Screen: React.FC<ScreenProps> = ({ type, onNext }) => {
    switch (type) {
        case TYPE_SCREEN.SIGN_IN:
            return <SignInScreen onNext={onNext} />;
        case TYPE_SCREEN.SIGN_UP:
            return <SignUpScreen onNext={onNext} />;

        default:
            return <SignInScreen onNext={onNext} />;
    }
};

const AuthenticationScreen = () => {
    const listRef = useRef<FlashList<IData> | null>(null);
    const onNextHandle = useCallback(
        (index: number) => {
            listRef?.current?.scrollToIndex({
                animated: true,
                index,
            });
            return null;
        },
        [listRef],
    );
    return (
        <View flex={1}>
            <View h={screenHeight} w={screenWidth}>
                <FlashList
                    //   scrollEnabled={false}
                    ref={listRef}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    data={DATA}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => (
                        <Screen
                            onNext={onNextHandle}
                            key={item.id}
                            type={
                                index === 0
                                    ? TYPE_SCREEN.SIGN_IN
                                    : TYPE_SCREEN.SIGN_UP
                            }
                        />
                    )}
                    estimatedItemSize={screenWidth}
                />
            </View>
            <Image
                contentFit="contain"
                source={headerBackground}
                style={styles.imageBackground}
            />
        </View>
    );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
    imageBackground: {
        height: heightPercentageToDP('45'),
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});
