import "./App.css";
import AddProjectFormData from "./components/AddProject/AddProjectFormData/AddProjectFormData";

import Layout from "./components/Layout/Layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import Test from "./components/Test";
import DocumentsPage from "./page/DocumentsPage/DocumentsPage";
import MyProjectPage from "./page/MyProjectPage/MyProjectPage";
import SignInPage from "./page/SignInPage/SignInPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}

      <Layout>
        {/* <MyProjectPage /> */}
        <AddProjectFormData />
        {/* <DocumentsPage /> */}
      </Layout>
    </>
  );
}

export default App;
