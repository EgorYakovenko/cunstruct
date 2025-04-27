import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import css from "./Counterparties.module.css";

export default function Counterparties() {
  return (
    <>
      <ul className={css.counterpartiesList}>
        <li className={css.counterpartiesItem}>
          <div className={css.cardContainer}>
            <GrUserWorker className={css.icon} />
            <div>
              <p className={css.role}>Исполнители</p>
              <span className={css.description}>
                Контролировать работу членов команды, которым поручены различные
                задачи.
              </span>
            </div>
          </div>

          <a className={css.link} href="">
            Посмотреть детали
          </a>
        </li>
        <li className={css.counterpartiesItem}>
          <div className={css.cardContainer}>
            <MdOutlineEngineering className={css.icon} />
            <div>
              <p className={css.role}>Подрядчики</p>
              <span className={css.description}>
                Управление компаниями и лицами, ответственными за реализацию
                проекта.
              </span>
            </div>
          </div>

          <a className={css.link} href="">
            Посмотреть детали
          </a>
        </li>
        <li className={css.counterpartiesItem}>
          <div className={css.cardContainer}>
            <BsPersonVcard className={css.icon} />
            <div>
              <p className={css.role}>Поставщики</p>
              <span className={css.description}>
                Отслеживайте поставщиков материалов и оборудования.
              </span>
            </div>
          </div>

          <a className={css.link} href="">
            Посмотреть детали
          </a>
        </li>
      </ul>
    </>
  );
}
