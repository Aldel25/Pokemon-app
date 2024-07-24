import Home from "../features/home";
import Layout from "../component/layout";
import MyPokemon from "../features/pokemon";
import PokemonDetail from "../features/detail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetail />,
      },
      {
        path: "/MyPokemon",
        element: <MyPokemon />,
      },
    ],
  },
]);
