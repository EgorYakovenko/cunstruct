import AddProjectFormData from "../../components/AddProject/AddProjectFormData/AddProjectFormData";
import AddProjectImage from "../../components/AddProject/AddProjectImage/AddProjectImage";
import UploadDocuments from "../../components/AddProject/UploadDocuments/Uploaddocuments";
import Counterparties from "../../components/Counterparties/Counterparties";
import css from "./AddProjectPage.module.css";

export default function AddProjectPage() {
  return (
    <>
      <div className={css.container}>
        <div className={css.image}>
          <AddProjectImage />
        </div>

        <div className={css.form}>
          <AddProjectFormData />
        </div>
        <div className={css.upload}>
          <UploadDocuments />
        </div>
        <div className={css.counterparties}>
          <Counterparties />
        </div>
      </div>
    </>
  );
}
