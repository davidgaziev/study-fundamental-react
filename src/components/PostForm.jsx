import { useState } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/button/Button';

const PostForm = ({ createNewPost }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), ...post };

    createNewPost(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form action="" style={{ textAlign: 'right' }}>
      <Input
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <Input
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <Button onClick={addNewPost}>Создать пост</Button>
    </form>
  );
};

export default PostForm;
