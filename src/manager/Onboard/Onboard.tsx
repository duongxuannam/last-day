import { FlashList } from '@shopify/flash-list';
import Button from 'components/Button';
import View from 'components/View';
import Image from 'components/Image';
import { LAYER_SYSTEM } from 'constants/layers';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageRequireSource, StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    screenHeight,
    screenWidth,
} from 'utils/responsive';
import { Text2, Title1 } from 'components/Text';
import { useAppInfoStore, useAppInfoStoreActions } from 'src/store/appInfo';

const bg1 = require('../../../assets/images/onboard/onboard1.png');
const bg2 = require('../../../assets/images/onboard/onboard2.png');

interface IData {
    title: string;
    description: string;
    bg?: ImageRequireSource;
    id: number;
}

const DATA: IData[] = [
    {
        title: 'onboard.step1.title',
        description: 'onboard.step1.description',
        bg: bg1,
        id: 1,
    },
    {
        title: 'onboard.step2.title',
        description: 'onboard.step2.description',
        bg: bg2,
        id: 2,
    },
];

const Screen = ({ item, listRef }: { item: IData; listRef: any }) => {
    const { t } = useTranslation();
    const { setAppInfoData } = useAppInfoStoreActions();
    const id = item.id;
    const onNext = useCallback(() => {
        if (id === 1) {
            listRef?.current?.scrollToIndex({ index: 1, animated: true });
        } else {
            listRef?.current?.scrollToIndex({ index: 0, animated: true });
            setAppInfoData({ isOnboard: true });
        }
    }, [listRef, id, setAppInfoData]);

    return (
        <View h={screenHeight} w={screenWidth}>
            <View flex={1.4}>
                <Image
                    style={styles.image}
                    source={item.bg}
                    // placeholder={blurhash}
                    contentFit="scale-down"
                    transition={1000}
                />
            </View>
            <View flex={1} itemCenter ph={responsiveWidth(30)}>
                <View h={responsiveHeight(30)} />

                <Title1 ct numberOfLines={2}>
                    {t(item.title)}
                </Title1>
                <View h={responsiveHeight(20)} />

                <Text2 ct numberOfLines={2}>
                    {t(item.description)}
                </Text2>
                <View flex={1} contentCenter>
                    <Button text={t('common.next')} onPress={onNext} />
                </View>
            </View>
        </View>
    );
};

const Onboard: React.FC = () => {
    const listRef = useRef<FlashList<IData> | null>(null);
    const isLoadedFonts = useAppInfoStore(state => state.isLoadedFonts);
    const isOnboard = useAppInfoStore(state => state.data.isOnboard);

    if (!isLoadedFonts) {
        return null;
    }
    if (isOnboard) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <View h={screenHeight} w={screenWidth}>
                    <FlashList
                        scrollEnabled={false}
                        ref={listRef}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        data={DATA}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <Screen
                                listRef={listRef}
                                item={item}
                                key={item.id}
                            />
                        )}
                        estimatedItemSize={screenWidth}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        zIndex: LAYER_SYSTEM.ONBOARD,
    },
    image: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#0553',
    },
});

export default Onboard;
