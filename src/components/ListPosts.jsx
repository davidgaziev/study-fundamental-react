import Post from './Post';
import { AnimatePresence, motion } from 'framer-motion';

const ListPosts = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1>Посты не найдены</h1>;
  }

  return (
    <>
      <h1>{title}</h1>
      <AnimatePresence>
        {posts.map((post) => [
          <motion.div
            animate={{ translateX: 0 }}
            initial={{ translateX: -1350 }}
            exit={{ translateX: -1350 }}
            transition={{ duration: 0.3 }}
            layout
            key={post.id}
          >
            <Post removePost={removePost} post={post} />
          </motion.div>,
        ])}
      </AnimatePresence>
    </>
  );
};

export default ListPosts;
