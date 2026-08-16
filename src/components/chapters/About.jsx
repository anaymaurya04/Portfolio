import { about, identity } from "../../data/content";
import { Callout, ChapterHeading, Lead } from "../ui/UI";
import styles from "./Chapters.module.css";

const interests = [
  "Backend Engineering",
  "Retrieval-Augmented Generation",
  "Hybrid Search",
  "Vector Databases",
  "GenAI Applications",
  "Data Structures & Algorithms",
];

export const About = () => {
  return (
    <div>
      <ChapterHeading
        eyebrow="02 / about"
        title="About the Author"
      >
        <Lead>{about.headline}</Lead>
      </ChapterHeading>
      <p className={styles.aboutBlurb}>{about.detail}</p>
      <h2 className={styles.sectionTitle}>Interests</h2>
      <ul className={styles.checkList}>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <div className={styles.aboutDetail}>
        <div>
          <strong>Location:</strong> {identity.location}
        </div>
        <div>
          <strong>Email:</strong>{" "}
          <a className={styles.repoLink} href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
        </div>
        <div>
          <strong>Phone:</strong> {identity.phone}
        </div>
        <div>
          <strong>GitHub:</strong>{" "}
          <a className={styles.repoLink} href={identity.githubHref}>
            {identity.github}
          </a>
        </div>
      </div>
      <Callout icon="&#128161;">
        <strong>Positioning:&nbsp;</strong>
        Primarily targeting SDE roles through campus placements with a focus on
        backend and GenAI engineering.
      </Callout>
    </div>
  );
};
