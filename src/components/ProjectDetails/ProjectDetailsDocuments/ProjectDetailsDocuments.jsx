import AddDocumentsCounterparties from "../../AddDocumentsCounterparties/AddDocumentsCounterparties";

import css from "./ProjectDetailsDocuments.module.css";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { MdOutlineAddAPhoto } from "react-icons/md";

export default function ProjectDetailsDocuments() {
  return (
    <div className={css.container}>
      <AddDocumentsCounterparties
        Icon={IoDocumentsOutline}
        role="Документы"
        description="Храните и получайте доступ к основным файлам проекта в одном месте."
        link="Посмотреть детали"
      />
      <AddDocumentsCounterparties
        Icon={MdOutlineAddAPhoto}
        role="Фото отчёт"
        description="Загружайте и просматривайте визуальные обновления хода выполнения работ."
        link="Посмотреть детали"
      />
      <AddDocumentsCounterparties
        Icon={GrUserWorker}
        role="Исполнитель"
        description="Контролировать работу членов команды, которым поручены различные задачи."
        link="Посмотреть детали"
      />
      <AddDocumentsCounterparties
        Icon={BsPersonVcard}
        role="Постовщик"
        description="Отслеживайте поставщиков материалов и оборудования."
        link="Посмотреть детали"
      />
      <AddDocumentsCounterparties
        Icon={MdOutlineEngineering}
        role="Подрядчик"
        description="Управление компаниями и лицами, ответственными за реализацию проекта."
        link="Посмотреть детали"
      />
    </div>
  );
}
