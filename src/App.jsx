import "./App.css";
import AddDocumentsCounterparties from "./components/AddDocumentsCounterparties/AddDocumentsCounterparties";
import AddProjectFormData from "./components/AddProject/AddProjectFormData/AddProjectFormData";

import Layout from "./components/Layout/Layout";
import ProjectCard from "./components/ProjectCard/ProjectCard";

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
        {/* <AddPerformerPage /> */}
        <ProjectDetailsPage />
        {/* <AddDocumentsCounterparties /> */}
        {/* <AddProjectFormData /> */}
        {/* <DocumentsPage /> */}
      </Layout>
    </>
  );
}

export default App;
