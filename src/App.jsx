import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import SignUp from "./components/SignUp/SignUp";
import Test from "./components/Test";
import SignUpPage from "./page/SignUp/SignUpPage";

function App() {
  return (
    <>
      <SignUpPage />
      {/* <SignUp /> */}
      {/* <Layout>
        <Test />
      </Layout> */}
    </>
  );
}

export default App;
