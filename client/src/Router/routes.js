import Login from '../components/Login/Login';
import MainPage from '../components/MainPage/MainPage';
import Posts from '../components/Pages/Posts';
import PostIdPage from '../components/PostIdPage/PostIdPage';

export const privateRoutes = [
  { path: '/about', element: MainPage, exact: true },
  { path: '/posts', element: Posts, exact: true },
  { path: '/posts/:id', element: PostIdPage, exact: true },
];

export const publicRoutes = [
  { path: '/login', element: Login, exact: true },
];
