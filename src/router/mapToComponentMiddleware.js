import routes from "./routes";
import Auth from "../service/Auth";
import UserProfile from "../service/UserProfile";
export default (router, dependencies) => async (toState, fromState) => {
  let toRoute = routes.find((r) => r.name === toState.name);
  if (toRoute) {
    toState.component = toRoute.component;
    return toState;
  }
};
