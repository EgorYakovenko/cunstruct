import { IoIosSearch } from "react-icons/io";
import css from "./Search.module.css";

export default function Search() {
  return (
    <div className={css.inputWrapper}>
      <IoIosSearch className={css.icon} />
      <input className={css.input} type="text" placeholder="Поиск" />
    </div>
  );
}
