import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';

export default function PostItem({ post, remove }) {
//   console.log(post);
  const router = useNavigate();
  const id = (ide) => {
    // console.log(ide);
    router(`/posts/${ide}`);
  };
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {post.id}
          .
          {post.title}
        </strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => id(post.id)} type="button">Открыть</MyButton>
        <MyButton onClick={() => remove(post)} type="button">Удалить</MyButton>
      </div>
    </div>
  );
}
