import AddProjectFormData from "../../components/AddProject/AddProjectFormData/AddProjectFormData";
import AddProjectImage from "../../components/AddProject/AddProjectImage/AddProjectImage";
import css from "./AddProjectPage.module.css";

export default function AddProjectPage() {
  return (
    <div className={css.container}>
      <div className={css.item1}>
        <AddProjectImage />
      </div>
      <div className={css.item2}>
        <AddProjectFormData />
      </div>
    </div>
  );
}
