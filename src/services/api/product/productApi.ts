import { UseQueryOptions, useQuery } from 'react-query';
import api from '..';
import { productKeyFactory } from 'src/constants/queryKeys';
import { AxiosError } from 'axios';
import { Product } from 'src/types/product';

export const getAllProducts = async () => {
    return (await api.get('/products')).data;
};

export const useGetAllProducts = (
    options?: UseQueryOptions<Array<Product>, AxiosError, Array<Product>>,
) => {
    return useQuery({
        queryKey: [...productKeyFactory.products],
        queryFn: getAllProducts,
        ...options,
    });
};
