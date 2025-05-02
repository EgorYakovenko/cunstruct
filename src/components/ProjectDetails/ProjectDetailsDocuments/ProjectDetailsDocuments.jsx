import AddDocumentsCounterparties from "../../AddDocumentsCounterparties/AddDocumentsCounterparties";

import { AiOutlineSchedule } from "react-icons/ai";

export default function ProjectDetailsDocuments() {
  return (
    <>
      <AddDocumentsCounterparties
        Icon={AiOutlineSchedule}
        role="График работ"
        description="Планируйте и контролируйте сроки и ключевые этапы проекта."
        link="Посмотреть детали"
      />
    </>
  );
}
