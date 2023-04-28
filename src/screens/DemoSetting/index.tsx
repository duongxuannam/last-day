import React from 'react';
import Text from 'components/Text';
import View from 'components/View';
import { Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppStackScreenProps } from 'navigation/index';
import { useAppInfoStore, useAppInfoStoreActions } from 'src/store/appInfo';

const TextMobx = () => {
    const lang = useAppInfoStore(state => state.data.language);
    const theme = useAppInfoStore(state => state.data.theme);
    return (
        <>
            <Text>{lang}</Text>
            <Text>{theme}</Text>
        </>
    );
};

const ButtonSetMox = () => {
    const { setAppInfoData } = useAppInfoStoreActions();
    const onPressHandle = () =>
        setAppInfoData({
            language: 'en',
            theme: 'light',
        });
    const onPressHandleVN = () =>
        setAppInfoData({
            language: 'vi',
            theme: 'dark',
        });

    const onPressRung = () =>
        setAppInfoData({
            theme: 'forest',
        });

    return (
        <>
            <Pressable onPress={onPressHandle}>
                <Text>Change theme</Text>
            </Pressable>
            <Pressable onPress={onPressHandleVN}>
                <Text>Change theme black - vi</Text>
            </Pressable>
            <Pressable onPress={onPressRung}>
                <Text>Change theme rung </Text>
            </Pressable>
        </>
    );
};

const LangText = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text fw="900">{t('text.hello')}</Text>
        </>
    );
};

interface Props extends AppStackScreenProps<'DemoSetting'> {}

const DemoSettingScreen = ({ navigation }: Props) => {
    const { setAppInfoData } = useAppInfoStoreActions();

    return (
        <>
            <View flex={1} contentCenter itemCenter>
                <Text s={30} fw="800">
                    Setting
                </Text>
                <TextMobx />
                <ButtonSetMox />
                <LangText />
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Text>go Home</Text>
                </Pressable>
                <Text s={30} fw="500" f="BentonSans-Book">
                    The future is in our hands to shape.
                </Text>
                <Text s={30} fw="500" f="BentonSans-Black">
                    The future is in our hands to shape.
                </Text>
                <Pressable onPress={() => setAppInfoData({ isOnboard: false })}>
                    <Text>onboard modal</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('DemoSetting')}>
                    <Text>go setting</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('DemoTab')}>
                    <Text>go tab</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('PuzzleGame')}>
                    <Text>go puzzle</Text>
                </Pressable>
            </View>
        </>
    );
};

export default DemoSettingScreen;
