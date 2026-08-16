import { certifications, education, leadership } from "../../data/content";
import { ChapterHeading, Lead, Tag } from "../ui/UI";
import styles from "./Chapters.module.css";

export const Education = () => {
  return (
    <div>
      <ChapterHeading
        eyebrow="06 / education"
        title="Education &amp; Learning"
      >
        <Lead>Academic background and continuous, self-directed learning.</Lead>
      </ChapterHeading>
      {education.map((item, index) => (
        <article
          key={item.degree}
          className={`${styles.article} ${index > 0 ? styles.articleDivider : ""}`}
        >
          <div className={styles.articleHeader}>
            <h2>{item.degree}</h2>
          </div>
          <p className={styles.articleMeta}>
            <strong>{item.institution}</strong>
            <span className={styles.metaSep}>&bull;</span>
            <span>{item.period}</span>
          </p>
          {item.detail && (
            <p className={styles.aboutDetail}>{item.detail}</p>
          )}
        </article>
      ))}
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <ul className={styles.checkList}>
        {certifications.map((cert) => (
          <li key={cert.title}>
            <strong>{cert.title}</strong> &mdash; {cert.issuer}, {cert.period}
          </li>
        ))}
      </ul>
      <h2 className={styles.sectionTitle}>Leadership &amp; Activities</h2>
      <ul className={styles.checkList}>
        {leadership.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className={styles.sectionTitle}>Current Learning Focus</h2>
      <div className={styles.stackRow}>
        <Tag>Spring Boot</Tag>
        <Tag>RAG</Tag>
        <Tag>LangChain</Tag>
        <Tag>Vector Databases</Tag>
        <Tag>Data Structures &amp; Algorithms</Tag>
      </div>
    </div>
  );
};
