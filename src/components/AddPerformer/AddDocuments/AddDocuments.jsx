import AddDocumentsCounterparties from "../../AddDocumentsCounterparties/AddDocumentsCounterparties";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsListColumns } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import css from "./AddDocuments.module.css";

export default function AddDocuments() {
  return (
    <div className={css.container}>
      <AddDocumentsCounterparties
        Icon={LiaFileContractSolid}
        role="Договор"
        description="Храните и управляйте договорами"
        link="Добавить"
      />
      <AddDocumentsCounterparties
        Icon={BsListColumns}
        role="Сметы"
        description="Прогнозирование затрат и расчет бюджета проекта"
        link="Добавить"
      />
      <AddDocumentsCounterparties
        Icon={BiMoneyWithdraw}
        role="Оплаты"
        description="Учет платежей и финансовых операций."
        link="Добавить"
      />
    </div>
  );
}
