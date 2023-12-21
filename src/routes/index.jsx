import { Suspense, lazy } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("src/pages/home"));
const About = lazy(() => import("src/pages/about"));

// const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      element: (
        <Suspense fallback={""}>
          <Outlet />
        </Suspense>
      ),
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },

    {
      path: "*",
      element: (
        <Navigate
          to="/404"
          replace
        />
      ),
    },
  ]);
}
