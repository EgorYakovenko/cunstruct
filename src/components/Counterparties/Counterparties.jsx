import { MdOutlineEngineering } from "react-icons/md";
import css from "./Counterparties.module.css";

export default function Counterparties() {
  return (
    <>
      <ul>
        <li className={css.counterpartiesItem}>
          <div className={css.cardContainer}>
            <MdOutlineEngineering />
            <div>
              <p>Исполнители</p>
              <span>
                Контролировать работу членов команды, которым поручены различные
                задачи.
              </span>
            </div>
          </div>

          <a href="">Посмотреть детали</a>
        </li>
        <li>
          <div className={css.cardContainer}>
            <MdOutlineEngineering />
            <div>
              <p>Подрядчики</p>
              <span>
                Управление компаниями и лицами, ответственными за реализацию
                проекта.
              </span>
            </div>
          </div>

          <a href="">Посмотреть детали</a>
        </li>
        <li></li>
      </ul>
    </>
  );
}
