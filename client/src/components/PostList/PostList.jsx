import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';// npm пакет анимации
import PostItem from '../PostItem/PostItem';

export default function PostList({ posts, title, remove }) {
  // console.log('posts:', posts);
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts?.map((post) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}

      </TransitionGroup>
    </div>
  );
}
