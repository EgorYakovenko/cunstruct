import { PiImageSquareThin } from "react-icons/pi";
import css from "./AddProjectImage.module.css";

export default function AddProjectImage() {
  return (
    <div className={css.container}>
      <PiImageSquareThin className={css.projectImg} />
    </div>
  );
}
