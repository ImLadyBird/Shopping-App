import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/axios';

const getProducts = async () => {
  const res = await client.get('/products');
  return res.data;
};

export function useGetProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts, 
  });
}
