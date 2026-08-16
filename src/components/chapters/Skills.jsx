import { skillCategories } from "../../data/content";
import { Callout, ChapterHeading, Lead, Tag } from "../ui/UI";
import styles from "./Chapters.module.css";

const totalSkills = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0
);

export const Skills = () => {
  return (
    <div>
      <ChapterHeading
        eyebrow="03 / skills"
        title="Technical Skills"
      >
        <Lead>
          A comprehensive overview of my technical expertise across backend
          engineering, databases, search, AI/ML, and tooling.
        </Lead>
      </ChapterHeading>
      <h2 className={styles.sectionTitle}>Skills Matrix</h2>
      <div>
        {skillCategories.map((row) => (
          <div key={row.category} className={styles.skillRow}>
            <div className={styles.skillCategory}>{row.category}</div>
            <div className={styles.skillTags}>
              {row.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Callout>
        <strong>Total Arsenal:&nbsp;</strong>
        {totalSkills} distinct technical skills across languages, frameworks,
        databases, and tools.
      </Callout>
    </div>
  );
};
