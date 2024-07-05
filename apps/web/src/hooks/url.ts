import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useAppSearchParams = () => {
  const [urlSearchParams, _] = useSearchParams();
  const [searchParams, setSearchParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const results: { [key: string]: string } = {};
    // @ts-ignore
    for (const [key, value] of urlSearchParams.entries()) {
      if (['', 'null', 'undefined'].includes(value)) continue;
      results[key] = value;
    }
    setSearchParams(results);
  }, [urlSearchParams]);

  return searchParams;
};
