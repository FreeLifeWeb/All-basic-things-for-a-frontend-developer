import React, { useEffect, useState } from 'react';
import MyPostForm from '../PostForm/MyPostForm';
import '../../styles/App.css';
import PostFilter from '../PostFilter/PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/Button/MyButton';
import { usePosts } from '../../Hooks/usePosts';
import PostService from '../../API/PostService';
import PostList from '../PostList/PostList';
import Pagination from '../UI/Pagination/Pagination';
import { getPagesCount } from '../../utils/pages';
import { useFetching } from '../../Hooks/useFetching';
import Loader from '../UI/Loader/Loader';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  // const bodyInputRef = useRef();// хук для получения доступа к Dom элементту
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // кастомный хук который содержит логику сортировки и фильтрации
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  // console.log('page', page);
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => { // добавление постов
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => { // удаление постов
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    // console.log(p);
    setPage(p);
    fetchPosts(limit, p);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать новый пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <MyPostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {postError
&& (
<h1>
  {' '}
  Произошла ошибка $
  {postError}
</h1>
)}
      {isPostLoading
        ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Loader />
          </div>
        )
        : <PostList remove={removePost} posts={sortedAndSerchedPosts} title="Posts JS" />}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
