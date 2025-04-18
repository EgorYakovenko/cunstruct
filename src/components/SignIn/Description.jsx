import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>У вас нет учетной записи?</h2>
      <p className={css.description}>
        Зарегистрируйтесь, чтобы эффективно управлять своими строительными
        проектами. Отслеживайте расходы, контролируйте ход работ, храните
        документы и сотрудничайте с подрядчиками — все в одном месте.
      </p>
    </div>
  );
}
