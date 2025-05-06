import workerImage from "../../assets/worker.svg";
import css from "./CounterpartiesCard.module.css";

export default function CounterpartiesCard() {
  return (
    <div className={css.container}>
      <div className={css.personalData}>
        <img src={workerImage} alt="Фото" width={70} h />
        <div>
          <h2>Jimmy Nilsson</h2>
          <p>123 Main Street, New York, NY</p>
          <ul>
            <li>+1 234 567 890</li>
            <li>Jimmy_Nilsson@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className={css.about}>
        <div className={css.services}>
          <h3>Услуги</h3>
          <ul className={css.test}>
            <li>Штукатурка</li>
            <li>Шпатлёвка</li>
            <li>Покраска</li>
          </ul>
        </div>
        <div className={css.services}>
          <h3>Описание</h3>
          <p>
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
