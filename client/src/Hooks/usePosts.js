import { useMemo } from 'react';
// // Кастомные React хуки - это хуки которые используют внутри себя стандартные React хуки

// React хуки, типа useState, useMemo и т.д.
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => { // сортировка массива
    // console.log('ОТРАБОТАЛА СОРТИРОВКА');
    if (sort) {
      /* менять состояние на прямую запрещенно, по-этому мы делаем копию массива постов
        (sort() не возвращает новый массив, а мутирует исходный) */
      // localeCompare() используется для сравнения строк и чаще при сортировке
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  // console.log(posts, sort);
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSerchedPosts = useMemo(// поиск по отсортированному массиву через поисковый запрос
    () => sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())),
    [query, sortedPosts],
  );
  return sortedAndSerchedPosts;
};
