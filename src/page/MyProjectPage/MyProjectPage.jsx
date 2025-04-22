import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { IoIosSearch } from "react-icons/io";
import css from "./MyProjectPage.module.css";

export default function MyProjectPage() {
  return (
    <>
      <div className={css.pageTitle}>Мои проекты</div>
      <div className={css.inputWrapper}>
        <IoIosSearch className={css.icon} />
        <input className={css.input} type="text" placeholder="Поиск" />
      </div>
      <div className={css.card}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
