import { projects } from "../../data/content";
import { ChapterHeading, DataBlock, Lead, StatusPill, Tag } from "../ui/UI";
import styles from "./Chapters.module.css";

export const Projects = () => {
  return (
    <div>
      <ChapterHeading eyebrow="05 / projects" title="Notable Projects">
        <Lead>
          4 projects spanning hybrid search, GenAI, developer tooling, and an
          e-commerce backend.
        </Lead>
      </ChapterHeading>
      {projects.map((project, index) => (
        <article
          key={project.title}
          className={`${styles.article} ${index > 0 ? styles.articleDivider : ""}`}
        >
          <div className={styles.projectHeader}>
            <h2>{project.title}</h2>
            <StatusPill status={project.status} />
          </div>
          <a className={styles.repoLink} href={project.repoHref}>
            &rarr; {project.repo}
          </a>
          {project.points.length > 0 && (
            <ul className={styles.checkList}>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {project.detail && (
            <DataBlock summary="view request / response" lines={project.detail} />
          )}
          <div className={styles.stackRow}>
            <span className={styles.stackLabel}>stack</span>
            {project.stack.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};