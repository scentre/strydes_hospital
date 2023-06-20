import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { PrivateRoute } from "../privateRoute";
import { PublicRoute } from "../publicRoute";
import Styles from "./app.module.scss";
import EmailConfirmation from "../../pages/emailConfirmation";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route
            path="/login"
            element={<PublicRoute restricted={true} component={Login} />}
          />
          <Route
            path="/emailconfirmation"
            element={
              <PublicRoute restricted={true} component={EmailConfirmation} />
            }
          />
          <Route
            path="/register"
            element={<PublicRoute restricted={true} component={Register} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

const Layout = ({ children }) => (
  <div className={Styles.mainContainer}>
    <div className={Styles.contentContainer}>{children}</div>
  </div>
);

export { App };
