import ProgressBar from "./ProgressBar";
import css from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <>
      <div className={css.projectCard}>
        <img src="../../../Example.jpg" alt="" />
        <h2 className={css.titleName}>Dream house</h2>
        <ProgressBar value={30} />
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <p className={css.titleInfoItem}>Начало</p>
            <p className={css.dateInfoItem}>16.10.2024</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.titleInfoItem}>Конец</p>
            <p className={css.dateInfoItem}>21.05.2025</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.titleInfoItem}>Этап</p>
            <p className={css.dateInfoItem}>Фундамент</p>
          </li>
        </ul>
        <a className={css.button} href="#">
          Детали проекта
        </a>
      </div>
    </>
  );
}
