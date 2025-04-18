import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Начните сегодня</h2>
      <p className={css.description}>
        Зарегистрируйтесь, чтобы оптимизировать управление строительством.
        Отслеживайте бюджеты, контролируйте этапы проекта, храните важные
        документы и координируйте работу с подрядчиками — все на одной
        платформе.
      </p>
    </div>
  );
}
