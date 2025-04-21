import "./App.css";

import Layout from "./components/Layout/Layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import Test from "./components/Test";
import SignInPage from "./page/SignInPage/SignInPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}

      <Layout>
        <ProjectCard />
        {/* <Test /> */}
      </Layout>
    </>
  );
}

export default App;
