import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Album from "./pages/Album";
import SingleAlbum from "./pages/singleAlbum";
import About from "./pages/About";
import Home from "./pages/Home";

let api = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about-us", element: <About /> },
        {
          path: "album", // parent path
          element: <Album />,
        },

        {
          path: "album/:albumId", // child path, relative to "/album"
          element: <SingleAlbum />,
        },

        ,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
