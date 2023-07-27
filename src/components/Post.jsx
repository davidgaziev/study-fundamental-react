import { Link } from 'react-router-dom';
import '../styles/Post.css';
import Button from './UI/button/Button';

const Post = ({ post, removePost }) => {
  return (
    <>
      <div className="postWrapper">
        <article>
          <div className="post__header">
            <h3>
              <strong>
                {post.id}. {post.title}
              </strong>
            </h3>
          </div>

          <div className="post__body">{post.body}</div>
        </article>

        <Link to={`/posts/${post.id}`}>
          <Button>Открыть</Button>
        </Link>

        <Button onClick={() => removePost(post)}>Удалить</Button>
      </div>
    </>
  );
};

export default Post;
