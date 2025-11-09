import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import LoadingScreen from "./components/LoadingScreen";
import ErrorPage from "./ui/ErrorPage";
import Admin from "./ui/Admin";
import UpdateSchedules from "./components/UpdateSchedules";

const Home = lazy(() => import("./ui/Home"));
const About = lazy(() => import("./ui/About"));
const Connect = lazy(() => import("./ui/Connect"));
const MLA = lazy(() => import("./ui/MLA"));
const PartyPresident = lazy(() => import("./ui/PartyPresident"));
const EventsPage = lazy(() => import("./ui/EventsPage"));

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
              <EventsPage />
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
              path: "update-schedule",
              element: <UpdateSchedules />,
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
