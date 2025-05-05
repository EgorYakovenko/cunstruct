import AddDocuments from "../../components/AddPerformer/AddDocuments/AddDocuments";
import AddPerformerFoto from "../../components/AddPerformer/AddPerformerFoto/AddPerformerFoto";
import AddPerformerForm from "../../components/AddPerformer/AddPerformerFrom/AddPerformerForm";

import css from "./AddPerformerPage.module.css";

export default function AddPerformerPage() {
  return (
    <>
      <h2>Добавить исполнителя</h2>
      <div className={css.form}>
        <AddPerformerFoto />
        <AddPerformerForm />
        <AddDocuments />
      </div>
    </>
  );
}
