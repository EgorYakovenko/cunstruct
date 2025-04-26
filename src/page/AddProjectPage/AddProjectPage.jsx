import AddProjectFormData from "../../components/AddProject/AddProjectFormData/AddProjectFormData";
import AddProjectImage from "../../components/AddProject/AddProjectImage/AddProjectImage";
import UploadDocuments from "../../components/AddProject/UploadDocuments/Uploaddocuments";
import Counterparties from "../../components/Counterparties/Counterparties";
import css from "./AddProjectPage.module.css";

export default function AddProjectPage() {
  return (
    <>
      <div className={css.container}>
        <div className={css.item1}>
          <AddProjectImage />
        </div>
        <div className={css.item2}>
          <AddProjectFormData />
        </div>
      </div>
      <div className={css.upload}>
        <UploadDocuments />
      </div>
      <Counterparties />
    </>
  );
}
