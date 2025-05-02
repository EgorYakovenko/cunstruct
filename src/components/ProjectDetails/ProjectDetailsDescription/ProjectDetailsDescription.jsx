import css from "./ProjectDetailsDescription.module.css";

export default function ProjectDetailsDescription() {
  return (
    <>
      <h2>Dream house</h2>
      <p className={css.adress}>123 Main Street, New York, NY</p>
      <div className={css.descriptionWrapper}>
        <img className={css.image} src="../../../../example2.jpg" alt="" />
        <div>
          <ul className={css.descriptionList}>
            <li className={css.descriptionItem}>
              <p>Дата начала</p>
              <p>16.02.2025</p>
            </li>
            <li className={css.descriptionItem}>
              <p>Дата завершения</p>
              <p>16.02.2025</p>
            </li>
            <li className={css.descriptionItem}>
              <p>Этап работ</p>
              <p>Фундамент</p>
            </li>
          </ul>
          <p className={css.description}>
            Construction of a modern residential complex with parking, a green
            area, and recreational infrastructure. The project includes 200
            apartments, a children’s playground, and commercial spaces on the
            ground floor.
          </p>
        </div>
      </div>
    </>
  );
}
