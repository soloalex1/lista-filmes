import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@/containers/pages/HomePage";
// import MoviePage from "@/containers/pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children: [
    //   {
    //     path: "movie/:id",
    //     element: <MoviePage />,
    //   },
    // ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

