import { useEffect, useState } from 'react';
import productApi from '@/api/productApi';
import { restApi } from '@/utils';

export const useFetchProducts = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<{ [key: string]: any } | null>(null);

  useEffect(() => {
    const { url, params } = productApi.getProducts();
    restApi.get({ url, params }).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, isLoading };
};
