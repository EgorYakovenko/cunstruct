import workerImage from "../assets/worker.jpg";
import css from "./CounterpartiesProfiles.module.css";

export default function CounterpartiesProfiles() {
  return (
    <>
      <div className={css.foto}>
        <img src={workerImage} alt="Фото" />
        <h3>Jimmy Nilsson</h3>
      </div>

      <div className={css.personalData}>
        <h3>Личные данные</h3>
        <ul>
          <li>Телефон:+1 234 567 890</li>
          <li>Почта:example@contractor.com</li>
          <li>Адрес прописки: Одесса</li>
          <li>Адрес проживания: Одесса</li>
          <li>Дата рождения:21.05.1988</li>
        </ul>
      </div>

      <div className={css.history}>
        <h3>История сотрудничества</h3>
        <ul>
          <li>
            <p>Объект: Kiliya</p>
            <p>
              Описание: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Maxime vitae odio deserunt velit.
            </p>
          </li>
        </ul>
      </div>

      {/* ================================================================== */}

      <div className={css.description}>
        <h3>Описание</h3>
        <p>
          A highly experienced contractor specializing in residential and
          commercial projects. Known for attention to detail and timely
          delivery.
        </p>
      </div>

      <div className={css.service}>
        <h3>Услуги</h3>
        <ul>
          <li>
            <p>Штукатурка</p>
          </li>
        </ul>
      </div>

      <div className={css.documents}>
        <h3>Документы</h3>
        <ul>
          <li>
            <p>Смета Килия</p>
          </li>
        </ul>
      </div>
    </>
  );
}
