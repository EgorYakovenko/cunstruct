import css from "./AddPerformerFoto.module.css";
import workerImage from "../../../assets/worker.svg";

export default function AddPerformerFoto() {
  return (
    <>
      <img className={css.foto} src={workerImage} alt="Фото" />
    </>
  );
}
