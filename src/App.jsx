import "./App.css";

import Layout from "./components/Layout/Layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import Test from "./components/Test";
import MyProjectPage from "./page/MyProjectPage/MyProjectPage";
import SignInPage from "./page/SignInPage/SignInPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}

      <Layout>
        <MyProjectPage />
      </Layout>
    </>
  );
}

export default App;
