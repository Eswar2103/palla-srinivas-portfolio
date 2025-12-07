import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import LoadingScreen from "./components/LoadingScreen";
import ErrorPage from "./ui/ErrorPage";
import Admin from "./ui/Admin";

const Home = lazy(() => import("./ui/Home"));
const About = lazy(() => import("./ui/About"));
const Connect = lazy(() => import("./ui/Connect"));
const MLA = lazy(() => import("./ui/MLA"));
const PartyPresident = lazy(() => import("./ui/PartyPresident"));
const Events = lazy(() => import("./components/Events"));
const Gallery = lazy(() => import("./components/Gallery"));
const AddNews = lazy(() => import("./admin-components/AddNews"));
const AddEvents = lazy(() => import("./admin-components/AddEvents"));
const AddGalleryImages = lazy(
  () => import("./admin-components/AddGalleryImages")
);

function App() {
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
          path: "/admin",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<LoadingScreen />}>
                  <Admin />
                </Suspense>
              ),
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
