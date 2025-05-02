import AddDocuments from "../../components/AddPerformer/AddDocuments/AddDocuments";
import AddPerformerForm from "../../components/AddPerformer/AddPerformerFrom/AddPerformerForm";

export default function AddPerformerPage() {
  return (
    <>
      <h2>Добавить исполнителя</h2>
      <AddPerformerForm />
      <h2>Документы</h2>
      <AddDocuments />
    </>
  );
}
