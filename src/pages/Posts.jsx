import { useEffect, useState } from 'react';
import ListPosts from '../components/ListPosts';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Modal from '../components/UI/modal/Modal';
import Button from '../components/UI/button/Button';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchedPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const posts = await PostService.getAll(limit, page);
      setPosts(posts.data);
      const totalCount = posts.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchedPosts(limit, page);
  }, []);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const updatePosts = (limit, page) => {
    setPage(page);
    fetchedPosts(limit, page);
  };

  return (
    <section className="post-section">
      <Button onClick={() => setVisible(true)}>Создать пост</Button>

      <Modal visible={visible} setVisible={setVisible}>
        <PostForm createNewPost={createNewPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />

      <Pagination
        totalPages={totalPages}
        page={page}
        updatePosts={updatePosts}
        limit={limit}
      />

      {postsError && <h1>Error:{postsError}</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <ListPosts
          removePost={removePost}
          posts={searchedAndSortedPosts}
          title="Список"
        />
      )}

      <Pagination
        totalPages={totalPages}
        page={page}
        updatePosts={updatePosts}
        limit={limit}
      />
    </section>
  );
}

export default Posts;
