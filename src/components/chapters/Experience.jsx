import { experience } from "../../data/content";
import { ChapterHeading, Lead } from "../ui/UI";
import styles from "./Chapters.module.css";

export const Experience = () => {
  return (
    <div>
      <ChapterHeading
        eyebrow="04 / experience"
        title="Work Experience"
      >
        <Lead>A chronological look at my internships and hands-on roles.</Lead>
      </ChapterHeading>
      {experience.map((item, index) => (
        <article
          key={item.role}
          className={`${styles.article} ${index > 0 ? styles.articleDivider : ""}`}
        >
          <div className={styles.articleHeader}>
            <h2>{item.role}</h2>
          </div>
          <p className={styles.articleMeta}>
            <strong>{item.organisation}</strong>
            <span className={styles.metaSep}>&bull;</span>
            <span>{item.period}</span>
          </p>
          <h3 className={styles.subTitle}>Key Contributions</h3>
          <ul className={styles.checkList}>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};
