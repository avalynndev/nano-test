import Home from "./pages/index";
import About from "./pages/about";
import Ano from "./pages/ano";
import MainLayout from "./components/layout";

const routes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/about", component: About, layout: MainLayout },
  { path: "/ano", component: Ano, layout: MainLayout },
];

export default routes;
