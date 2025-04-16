import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <div className="page-content">{/* Здесь основной контент */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
