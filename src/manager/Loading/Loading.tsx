import View from 'components/View';
import { LAYER_SYSTEM } from 'constants/layers';
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useAppInfoStore } from 'src/store/appInfo';
import { responsiveWidth, widthPercentageToDP } from 'utils/responsive';

const Loading: React.FC = () => {
    const isLoading = useAppInfoStore(state => state.isLoading);
    const isLoadedFonts = useAppInfoStore(state => state.isLoadedFonts);

    if (!isLoading && isLoadedFonts) {
        return null;
    }
    return (
        <View
            itemCenter
            contentCenter
            flex={1}
            style={styles.container}
            bg="rgba(0, 0, 0, .65)">
            <View
                bg="white"
                w={widthPercentageToDP('30%')}
                h={widthPercentageToDP('30%')}
                style={styles.subContainer}
                itemCenter
                contentCenter>
                <ActivityIndicator size={'large'} />
            </View>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: LAYER_SYSTEM.LOADING,
    },
    subContainer: {
        borderRadius: responsiveWidth(20),
    },
});
