import "./App.css";
import Layout from "./components/Layout/Layout";
import Test from "./components/Test";
import AddPerformerPage from "./page/AddPerformerPage/AddPerformerPage";
import AddProjectPage from "./page/AddProjectPage/AddProjectPage";
import DocumentsPage from "./page/DocumentsPage/DocumentsPage";
import MyProjectPage from "./page/MyProjectPage/MyProjectPage";
import ProjectDetailsPage from "./page/ProjectDetailsPage/ProjectDetailsPage";
import SignInPage from "./page/SignInPage/SignInPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}

      <Layout>
        {/* <MyProjectPage /> */}
        {/* <AddProjectPage /> */}
        <AddPerformerPage />
        {/* <ProjectDetailsPage /> */}

        {/* <DocumentsPage /> */}
      </Layout>
    </>
  );
}

export default App;
