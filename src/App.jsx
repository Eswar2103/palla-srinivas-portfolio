import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { LoadingScreen } from "./features/utils/utils";
import ErrorPage from "./ui/ErrorPage";
import { Authenticated } from "./utils/utils";

const Home = lazy(() => import("./ui/Home"));
const About = lazy(() => import("./ui/About"));
const Connect = lazy(() => import("./ui/Connect"));
const MLA = lazy(() => import("./ui/MLA"));
const PartyPresident = lazy(() => import("./ui/PartyPresident"));
const Events = lazy(() => import("./features/events/Events"));
const Gallery = lazy(() => import("./features/gallery/Gallery"));
const AddNews = lazy(() => import("./features/admin/AddNews"));
const AddEvents = lazy(() => import("./features/admin/AddEvents"));
const Login = lazy(() => import("./features/admin/Login"));
const Admin = lazy(() => import("./ui/Admin"));
const AddGalleryImages = lazy(
  () => import("./features/admin/AddGalleryImages")
);
const News = lazy(() => import("./features/news/News"));

function App() {
  function ProtectedElement() {
    return Authenticated() ? <Outlet /> : <Navigate to="/admin" replace />;
  }

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/mla",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <MLA />
            </Suspense>
          ),
        },
        {
          path: "/partypresident",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <PartyPresident />
            </Suspense>
          ),
        },
        {
          path: "/connect",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Connect />
            </Suspense>
          ),
        },
        {
          path: "/events",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Events type="page" />
            </Suspense>
          ),
        },
        {
          path: "/gallery",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Gallery />
            </Suspense>
          ),
        },
        {
          path: "/news",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <News type="page" />
            </Suspense>
          ),
        },
        {
          path: "/admin",
          children: [
            {
              index: true,
              element: <Navigate to="login" replace />,
            },
            {
              path: "login",
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Login />
                </Suspense>
              ),
            },
            {
              element: <ProtectedElement />,
              children: [
                {
                  path: "upload",
                  element: <Admin />,
                },
                {
                  path: "add-news",
                  element: <AddNews />,
                },
                {
                  path: "add-events",
                  element: <AddEvents />,
                },
                {
                  path: "add-gallery-images",
                  element: <AddGalleryImages />,
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
