import React, { useEffect } from 'react';
import Text from 'components/Text';
import View from 'components/View';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useGetAllProducts } from 'src/services/api/product/productApi';
import { useAppInfoStoreActions } from 'src/store/appInfo';
import { Product } from 'src/types/product';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COMMON_STYLES } from 'src/utils/styles';
import SizedBox from 'src/components/SizedBox';
import useRefreshByUser from './hook';
import { useProductActions, useProductsInBasket } from 'src/store/product';
import CardItem from './CardItem';

const renderItemSeparator = () => <SizedBox h={COMMON_STYLES.screenPadding} />;

const HomeScreen = () => {
    const { setIsLoading } = useAppInfoStoreActions();
    const { data, isLoading, refetch, isError, isSuccess } =
        useGetAllProducts();
    const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
    const { addProductToBasket, removeProductFromBasket } = useProductActions();
    const productsInBasket = useProductsInBasket();

    const onAddToBasketPress = React.useCallback(
        (product: Product) => {
            if (
                productsInBasket.find(
                    productInBasket =>
                        productInBasket.product.id === product.id,
                )
            ) {
                removeProductFromBasket(product.id);
            } else {
                addProductToBasket(product);
            }
        },
        [productsInBasket, removeProductFromBasket, addProductToBasket],
    );

    // const onProductCardPress = React.useCallback(
    //     (productId: number) => () => {
    //         navigation.navigate(RouteNames.productDetail, { id: productId });
    //     },
    //     [navigation],
    // );

    useEffect(() => {
        setIsLoading(isLoading);

        return () => {
            setIsLoading(false);
        };
    }, [isLoading, setIsLoading]);

    const getKeyExtractor = (item: Product) => item.id.toString();
    const renderItem = ({
        item: product,
        index,
    }: {
        item: Product;
        index: number;
    }) => {
        const isInBasket =
            typeof productsInBasket.find(
                productInBasket => productInBasket.product.id === product.id,
            ) !== 'undefined';
        console.log('index', index);
        return (
            <CardItem
                index={index}
                product={product}
                onAddToBasketPress={onAddToBasketPress}
                isInBasket={isInBasket}
            />
        );
    };

    return (
        <SafeAreaView style={COMMON_STYLES.flex} edges={['bottom']}>
            {isError && (
                <View flex={1} contentCenter itemCenter>
                    <Text cl="red">An error occurred</Text>
                </View>
            )}
            {isSuccess && (
                <FlatList<Product>
                    data={data}
                    testID="product-list-flat-list"
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefetchingByUser}
                            onRefresh={refetchByUser}
                        />
                    }
                    renderItem={renderItem}
                    numColumns={2}
                    ItemSeparatorComponent={renderItemSeparator}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={getKeyExtractor}
                    style={COMMON_STYLES.flex}
                />
            )}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        padding: COMMON_STYLES.screenPadding,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});
