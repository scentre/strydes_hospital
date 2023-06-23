import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { Register } from "../../pages/register";
import { PrivateRoute } from "../privateRoute";
import { PublicRoute } from "../publicRoute";
import Styles from "./app.module.scss";
import EmailConfirmation from "../../pages/emailConfirmation";
import AdminPageLayout from "../adminPageLayout";
import AdminBank from "../../pages/adminBank";

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
          <Route
            path="/admin"
            element={
              <PublicRoute restricted={true} component={AdminPageLayout} />
            }
          >
            <Route
              path="bank"
              element={<PublicRoute restricted={true} component={AdminBank} />}
            />
            {/* <Route
              path="user"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="circle"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="lab"
              element={
                <PublicRoute restricted={true} component={AdminContentLayout} />
              }
            />
            <Route
              path="cross"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="bucket"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="home"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="menu"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="pot"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            />
            <Route
              path="settings"
              element={
                <PublicRoute restricted={true} component={AdminContent} />
              }
            /> */}
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
