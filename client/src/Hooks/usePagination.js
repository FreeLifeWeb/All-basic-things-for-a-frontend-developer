import { useMemo } from 'react';

export const usePagination = (totalPages) => {
  const pagesArray = [];
  const pagination = useMemo(() => {
    for (let i = 0; i < totalPages; i += 1) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [pagesArray]);
  return pagination;
};
