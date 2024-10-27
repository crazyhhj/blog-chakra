// src/routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';

// 路由配置
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
  },
  {
    path: "/about",
    // element: <About />,
  },
  {
    path: "*", // 通配符，匹配未定义的路径
    // element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
