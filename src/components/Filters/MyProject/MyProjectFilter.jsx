import css from "./MyProjectFilter.module.css";

export default function MyProjectFilter() {
  return (
    <>
      <input className={css.input} type="text" placeholder="Поиск" />
      <input className={css.input} type="date" placeholder="Искать с" />
      <input className={css.input} type="date" placeholder="Искать до" />

      <select className={css.select} id="status" name="status">
        <option value="">Статус</option>
        <option value="active">В процессе</option>
        <option value="paused">На паузе</option>
        <option value="done">Завершён</option>
      </select>
    </>
  );
}
