import routes from "../constants/routes";
import AuthGuard from "../guards/AuthGuard";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes Api/Recipes";
import SignIn from "../pages/Register and Login/SignIn";
import SignUp from "../pages/Register and Login/SignUp";
import RecipeDetail from "../pages/RecipeDetail";
import FavoriteRecipes from "../pages/FavoriteRecipes";
import About from "../pages/About";
import NotFound from "../pages/Not Found/NotFound";


const appRoutes = [
  { path: routes.home, Component: Home },
  { path: routes.about, Component: About},
  { path: routes.signIn, Component: SignIn },
  { path: routes.signUp, Component: SignUp },
  { path: routes.recipes, Component: Recipes, Guard: AuthGuard },
  { path: `${routes.recipes}/:id`, Component: RecipeDetail, Guard: AuthGuard },
  { path: routes.favouriteRecipes, Component: FavoriteRecipes, Guard: AuthGuard },
  { path: '*', Component: NotFound },


];

export default appRoutes;
