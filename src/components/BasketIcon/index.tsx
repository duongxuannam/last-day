import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Image from '../Image';
import { useUserStoreActions } from 'src/store/user';
import { useProductsInBasketCount } from 'src/store/product';

const basketIcon = require('assets/images/basket.png');

type Props = {
    onPress: () => void;
    productCount: number;
};

const BasketIcon: React.FC<Props> = ({ onPress }) => {
    const { logOut } = useUserStoreActions();
    const productCount = useProductsInBasketCount();

    return (
        <Pressable testID="basket-icon" onPress={logOut}>
            {productCount > 0 && (
                <View style={styles.productCountTextContainer}>
                    <Text
                        testID={`basket-icon-quantity-text-${productCount}`}
                        style={styles.productCountText}>
                        {productCount}
                    </Text>
                </View>
            )}
            <Image source={basketIcon} style={styles.icon} />
            {/* <Ionicons disabled name="basket" color="darkslateblue" size={28} /> */}
        </Pressable>
    );
};

export default BasketIcon;

const styles = StyleSheet.create({
    icon: {
        width: 28,
        aspectRatio: 1,
        tintColor: 'darkslateblue',
    },
    productCountText: {
        color: 'white',
        fontSize: 12,
    },
    productCountTextContainer: {
        top: -6,
        backgroundColor: 'darkslateblue',
        borderRadius: 999,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        width: 18,
        right: -10,
        position: 'absolute',
    },
});
