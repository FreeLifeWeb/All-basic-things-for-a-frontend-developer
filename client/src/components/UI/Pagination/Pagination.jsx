import React from 'react';
import { usePagination } from '../../../Hooks/usePagination';

export default function Pagination({ totalPages, page, changePage }) {
  const pageArray = usePagination(totalPages);

  return (
    <div className="page-wrapper">
      {pageArray?.map((p) => (
        <span onClick={() => changePage(p)} className={page === p ? 'page page-current' : 'page'} key={p}>
          {p}
        </span>
      ))}
    </div>
  );
}
