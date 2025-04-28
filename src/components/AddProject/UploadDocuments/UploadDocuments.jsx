import { BsPlus } from "react-icons/bs";
import css from "./UploadDocuments.module.css";

export default function UploadDocuments() {
  return (
    <>
      <ul className={css.uploadList}>
        <li className={css.uploadItem}>
          <a className={css.link} href="">
            <BsPlus className={css.icon} />
            <p>Склад</p>
            <span>Контроль материалов</span>
          </a>
        </li>
        <li className={css.uploadItem}>
          <a className={css.link} href="">
            <BsPlus className={css.icon} />
            <p>Документы</p>
            <span>Все документы в одном месте</span>
          </a>
        </li>
        <li className={css.uploadItem}>
          <a className={css.link} href="">
            <BsPlus className={css.icon} />

            <p>График работ</p>
            <span>Удобный контроль сроков</span>
          </a>
        </li>
        <li className={css.uploadItem}>
          <a className={css.link} href="">
            <BsPlus className={css.icon} />

            <p>Создать смету</p>
            <span>Контроль бюджета</span>
          </a>
        </li>
        <li className={css.uploadItem}>
          <a className={css.link} href="">
            <BsPlus className={css.icon} />

            <p>Загрузить фото</p>
            <span>Все фото в одном месте</span>
          </a>
        </li>
      </ul>
    </>
  );
}
