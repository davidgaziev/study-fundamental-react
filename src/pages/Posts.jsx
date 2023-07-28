import { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import ListPosts from '../components/ListPosts';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loader/Loader';
import Modal from '../components/UI/modal/Modal';
import { useFetching } from '../components/hooks/useFetching';
import { useObserver } from '../components/hooks/useObserver';
import { usePosts } from '../components/hooks/usePosts';
import { getPageCount } from '../utils/pages';
import { uniquePosts } from '../utils/uniquePosts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchedPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const unique = uniquePosts([...posts, ...response.data]);
      setPosts(unique);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchedPosts(limit, page);
  }, [page, limit]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <section className="post-section">
      <Button onClick={() => setVisible(true)}>Создать пост</Button>

      <Modal visible={visible} setVisible={setVisible}>
        <PostForm createNewPost={createNewPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} setLimit={setLimit} />

      {postsError && <h1>Error:{postsError}</h1>}
      <ListPosts
        removePost={removePost}
        posts={searchedAndSortedPosts}
        title="Список"
      />
      <div
        ref={lastElement}
        style={{ height: 20, backgroundColor: 'grey', opacity: 0 }}
      ></div>
      {isPostsLoading && <Loader />}
    </section>
  );
}

export default Posts;
