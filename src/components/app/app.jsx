import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { PrivateRoute } from "../privateRoute";
import { PublicRoute } from "../publicRoute";
import Styles from "./app.module.scss";
import EmailConfirmation from "../../pages/emailConfirmation";
import AdminPageLayout from "../adminPageLayout";
import AdminContent from "../adminContent";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route
            exact
            path="/login"
            element={<PublicRoute restricted={true} component={Login} />}
          />
          <Route 
            exact
            path="/emailconfirmation"
            element={
              <PublicRoute restricted={true} component={EmailConfirmation} />
            }
          />
          <Route
            path="/register"
            element={<PublicRoute restricted={true} component={Register} />}
          />
          <Route
            exact
            path="/admin"
            element={
              <PublicRoute restricted={true} component={AdminPageLayout} />
            }
          >
            <Route
              exact
              path="/admin"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            ></Route>
          </Route>
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
