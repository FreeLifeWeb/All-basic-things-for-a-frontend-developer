import React, { useState } from 'react';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';

export default function MyPostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
    // console.log(title);// способ получить значение у контролируемого инпута
    // console.log(bodyInputRef.current.value);// способ получить значение у неконтролируемого инпута
  };

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput name="title" onChange={(e) => changeHandler(e)} type="text" placeholder="Название поста..." />
      <MyInput name="body" onChange={(e) => changeHandler(e)} type="text" placeholder="Содержание поста..." />
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Содержание поста..." /> */}
      {/* Вариант через ref */}
      <MyButton type="submit" onClick={(e) => addNewPost(e)}>Submit</MyButton>
    </form>
  );
}
