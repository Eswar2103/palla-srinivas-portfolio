import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./ui/Home"));
const About = lazy(() => import("./ui/About"));
const Connect = lazy(() => import("./ui/Connect"));

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
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
          path: "/connect",
          element: (
            <Suspense fallback={<LoadingScreen />}>
              <Connect />
            </Suspense>
          ),
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
