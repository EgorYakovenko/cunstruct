import ProjectCard from "../../components/ProjectCard/ProjectCard";
import css from "./MyProjectPage.module.css";

export default function MyProjectPage() {
  return (
    <>
      <div className={css.pageTitle}>Мои проекты</div>
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
