import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import css from "./Counterparties.module.css";
import AddDocumentsCounterparties from "../AddDocumentsCounterparties/AddDocumentsCounterparties";

export default function Counterparties() {
  return (
    <>
      <AddDocumentsCounterparties
        Icon={GrUserWorker}
        role="Исполнители"
        description="Контролировать работу членов команды, которым поручены различные задачи."
        link="Добавить"
      />
      <AddDocumentsCounterparties
        Icon={MdOutlineEngineering}
        role="Подрядчики"
        description="Управление компаниями и лицами, ответственными за реализацию
//                 проекта."
        link="Добавить"
      />
      <AddDocumentsCounterparties
        Icon={BsPersonVcard}
        role="Поставщики"
        description="Отслеживайте поставщиков материалов и оборудования."
        link="Добавить"
      />
    </>
  );
}

// export default function Counterparties() {
//   return (
//     <>
//       <ul className={css.counterpartiesList}>
//         <li className={css.counterpartiesItem}>
//           <div className={css.cardContainer}>
//             <GrUserWorker className={css.icon} />
//             <div>
//               <p className={css.role}>Исполнители</p>
//               <span className={css.description}>
//                 Контролировать работу членов команды, которым поручены различные
//                 задачи.
//               </span>
//             </div>
//           </div>

//           <a className={css.link} href="">
//             Добавить
//           </a>
//         </li>
//         <li className={css.counterpartiesItem}>
//           <div className={css.cardContainer}>
//             <MdOutlineEngineering className={css.icon} />
//             <div>
//               <p className={css.role}>Подрядчики</p>
//               <span className={css.description}>
//                 Управление компаниями и лицами, ответственными за реализацию
//                 проекта.
//               </span>
//             </div>
//           </div>

//           <a className={css.link} href="">
//             Добавить
//           </a>
//         </li>
//         <li className={css.counterpartiesItem}>
//           <div className={css.cardContainer}>
//             <BsPersonVcard className={css.icon} />
//             <div>
//               <p className={css.role}>Поставщики</p>
//               <span className={css.description}>
//                 Отслеживайте поставщиков материалы и оборудования.
//               </span>
//             </div>
//           </div>

//           <a className={css.link} href="">
//             Добавить
//           </a>
//         </li>
//       </ul>
//     </>
//   );
// }
