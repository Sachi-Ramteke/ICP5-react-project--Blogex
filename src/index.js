import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './view/home/home';
import Contact from "./view/contact/contact";
import About from "./view/about/about";
import BlogWriting from "./view/blogwriting/blogwriting";
import Popular from './view/Popular/popular';
import SignUp from './view/login-signup/signup';
import Login from './view/login-signup/login';
import Blogdisplay from './view/blogdisplay/blogdisplay'
import Tea from './view/Popular/popularcontents/tea';
import Coding from './view/Popular/popularcontents/coding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/popular",
    element: <Popular/>,
  },
  {
    path: '/blogwriting',
    element: <BlogWriting />
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/tea',
    element: <Tea/>
  },
  {
    path: '/coding',
    element: <Coding/>
  },
  {
    path:'/blogdisplay',
    element: <Blogdisplay/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);


