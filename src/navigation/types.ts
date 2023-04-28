import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum ROUTE_NAMES {
    Home = 'Home',
    DemoTab = 'DemoTab',
    DemoSetting = 'DemoSetting',
    PuzzleGame = 'PuzzleGame',
    Authentication = 'Authentication',

    ProductList = 'PRODUCT_LIST',
    ProductDetail = 'PRODUCT_DETAIL',
    // basket = 'basket',
}

export type AppStackParamList = {
    [ROUTE_NAMES.ProductList]: undefined;
    [ROUTE_NAMES.ProductDetail]: { id: number };
    Home: undefined;
    DemoTab: undefined;
    DemoSetting: undefined;
    PuzzleGame: undefined;
    Authentication: undefined;
};

export type NonParamScreenProps = NativeStackScreenProps<
    AppStackParamList,
    ROUTE_NAMES.Home
>;

export type ProductListScreenProps = NativeStackScreenProps<
    AppStackParamList,
    ROUTE_NAMES.ProductList
>;
