import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import HeaderPart from "./components/Header/HeaderPart";
import DefaultPart from "./components/Default/DefaultPart";
import { Fragment } from "react";
function App() {
  return (
    <div>

      <Router>
        <Routes>
          {routes.map((item) => {
            const Page = item.page;
            const Layout = item.isShowHeader ? DefaultPart : Fragment;
            return (
              <Route
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
