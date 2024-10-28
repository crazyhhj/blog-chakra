// src/routes.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeView } from "@/views/home";
import { LayoutBlog } from "@/views/blog";

// 路由配置
const router = createBrowserRouter([
  {
    path: "/blog-chakra",
    element: <HomeView />,
  },
  {
    path: "/blog-layout",
    element: <LayoutBlog />,
  },
  {
    path: "*", // 通配符，匹配未定义的路径
    // element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
