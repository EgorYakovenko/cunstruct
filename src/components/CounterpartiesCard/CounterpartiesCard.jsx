import workerImage from "../../assets/worker.jpg";
import css from "./CounterpartiesCard.module.css";

export default function CounterpartiesCard() {
  return (
    <div className={css.container}>
      <div className={css.personalData}>
        <img className={css.workerImage} src={workerImage} alt="Фото" />
        <div>
          <h2 className={css.name}>Jimmy Nilsson</h2>
          <p className={css.contacts}>123 Main Street, New York, NY</p>
          <ul>
            <li className={css.contacts}>+1 234 567 890</li>
            <li className={css.contacts}>Jimmy_Nilsson@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className={css.about}>
        <div className={css.services}>
          <h3 className={css.title}>Услуги</h3>
          <ul className={css.servicesList}>
            <li className={css.servicesItem}>Штукатурка</li>
            <li className={css.servicesItem}>Шпатлёвка</li>
            <li className={css.servicesItem}>Покраска</li>
          </ul>
        </div>
        <div className={css.description}>
          <h3 className={css.title}>Описание</h3>
          <p className={css.descriptionText}>
            Высокоопытный подрядчик, специализирующийся на жилых и коммерческих
            проектах. Известный вниманием к деталям и своевременной доставкой.
          </p>
        </div>
      </div>
      <a className={css.button} href="">
        Посмотреть профиль
      </a>
    </div>
  );
}
