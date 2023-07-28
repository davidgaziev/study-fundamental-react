import { useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostService';
import { useEffect, useState } from 'react';
import Loader from '../components/UI/loader/Loader';

const PostPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchedPosts, isPostsLoading, postsError] = useFetching(async (id) => {
    const post = await PostService.getPostById(id);
    setPost(post.data);
  });

  const [fetchedComments, isCommentsLoading, CommentsError] = useFetching(
    async (id) => {
      const comments = await PostService.getComments(id);
      setComments(comments.data);
    }
  );

  useEffect(() => {
    fetchedPosts(params.postId);
    fetchedComments(params.postId);
  }, []);

  return (
    <>
      {isPostsLoading ? (
        <Loader />
      ) : (
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
        </div>
      )}
      <div
        style={{
          textAlign: 'left',
          maxWidth: 800,
          minWidth: 600,
          margin: ' 0 auto',
        }}
      >
        <h2>Комментарии</h2>
        {isCommentsLoading ? (
          <Loader />
        ) : (
          <div>
            {comments.map((c) => (
              <div key={c.id}>
                <h3>{c.email}</h3>
                {c.body}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PostPage;
