import Documents from "../../components/Documents/Documents";
import Search from "../../components/Filters/Search/Search";
import css from "./DocumentsPage.module.css";

export default function DocumentsPage() {
  return (
    <>
      <h2>Документы</h2>
      <Search />
      <div className={css.wrapper}>
        <Documents />
      </div>
    </>
  );
}
