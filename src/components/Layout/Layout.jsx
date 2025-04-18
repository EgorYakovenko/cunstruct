import { Children } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="main-content">
          <Header />
          <div className="page-content">{children}</div>
        </div>
      </div>
    </>
  );
}
