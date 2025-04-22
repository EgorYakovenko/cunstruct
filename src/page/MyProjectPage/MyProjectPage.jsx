import Search from "../../components/Filters/Search/Search";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import css from "./MyProjectPage.module.css";

export default function MyProjectPage() {
  return (
    <>
      <div className={css.pageTitle}>Мои проекты</div>
      <Search />
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
