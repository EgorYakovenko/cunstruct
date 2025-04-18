import "./App.css";

import Layout from "./components/Layout/Layout";

import Test from "./components/Test";
import SignInPage from "./page/SignInPage/SignInPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}

      <Layout>
        <Test />
      </Layout>
    </>
  );
}

export default App;
