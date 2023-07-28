import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../components/Layout';
import Posts from '../pages/Posts';
import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Login from '../pages/Login';

export const privateRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Posts />} />
    </Route>
  )
);
export const publiceRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Route>
  )
);
