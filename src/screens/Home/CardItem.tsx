import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Image from 'src/components/Image';
import SizedBox from 'src/components/SizedBox';
import Text, { Title1 } from 'src/components/Text';
import View from 'src/components/View';
import { Product } from 'src/types/product';
import { getPriceText } from 'src/utils/price';
import {
    heightPercentageToDP,
    responsiveHeight,
    responsiveWidth,
    widthPercentageToDP,
} from 'src/utils/responsive';

const heartIcon = require('assets/images/icons/heart.png');
const heartOutlineIcon = require('assets/images/icons/heart_outline.png');

interface Props {
    product: Product;
    index: number;
    onAddToBasketPress: (product: Product) => void;
    isInBasket: boolean;
}

const CardItem: React.FC<Props> = ({
    product,
    index,
    onAddToBasketPress,
    isInBasket,
}) => {
    return (
        <Animated.View entering={FadeIn.duration(((index % 6) + 1) * 500)}>
            <Pressable>
                <View
                    contentCenter
                    itemCenter
                    h={heightPercentageToDP(35)}
                    w={widthPercentageToDP(42)}
                    style={styles.itemContainer}>
                    <Image
                        contentFit={'contain'}
                        style={styles.image}
                        source={{ uri: product.image }}
                    />
                    <SizedBox h={responsiveHeight(12)} />
                    <Text numberOfLines={1} style={styles.title}>
                        {product?.title}
                    </Text>

                    <Title1 style={styles.price} fw="bold">
                        {getPriceText(product?.price)}
                    </Title1>

                    <Title1 style={styles.price} fw="bold">
                        {product?.rating.rate} ({product?.rating.count})
                    </Title1>

                    <Pressable
                        style={styles.iconHeartContainer}
                        onPress={() => onAddToBasketPress(product)}>
                        <Image
                            contentFit={'contain'}
                            source={isInBasket ? heartIcon : heartOutlineIcon}
                            style={styles.iconHeart}
                        />
                    </Pressable>
                </View>
            </Pressable>
        </Animated.View>
    );
};

export default CardItem;
const styles = StyleSheet.create({
    itemContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: responsiveWidth(10),
        padding: responsiveWidth(5),
    },
    image: {
        height: heightPercentageToDP(15),
        width: widthPercentageToDP(35),
        marginTop: 6,
        // resizeMode: 'contentFit',
    },
    price: {
        fontSize: 16,
        marginTop: 4,
        textAlign: 'center',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
    },
    iconHeartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000,
    },
    iconHeart: {
        width: responsiveWidth(25),
        aspectRatio: 1,
        // resizeMode: 'contentFit',
        tintColor: 'darkslateblue',
    },
});
