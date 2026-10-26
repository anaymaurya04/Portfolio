import { about, projects, quickStats } from "../../data/content";
import { Callout, ChapterHeading, Lead, StatGrid } from "../ui/UI";
import styles from "./Chapters.module.css";

export const Introduction = () => {
  return (
    <div>
      <ChapterHeading
        eyebrow="01 / introduction"
        title="Welcome to My Portfolio"
      >
        <Lead>
          Java backend-focused MCA candidate at JIIT Noida (2025&ndash;2027)
          with hands-on experience building REST APIs, durable execution
          services, and hybrid search systems &mdash; including a reliability
          layer with 22 automated tests.
        </Lead>
      </ChapterHeading>
      <Callout icon="&#182;">
        <strong>Reading guide:&nbsp;</strong>
        This portfolio is organized as numbered sections. Use the top bar to
        jump between background, skills, experience, projects, and education.
      </Callout>
      <h2 className={styles.sectionTitle}>What You&apos;ll Find Here</h2>
      <ul className={styles.checkList}>
        <li>
          <strong>Technical Expertise:&nbsp;</strong> a deep dive into skills
          across Java backend engineering, databases, search, and testing
        </li>
        <li>
          <strong>Hands-on Experience:&nbsp;</strong> internships and freelance
          work spanning space-tech education, web delivery, and Java mentorship
        </li>
        <li>
          <strong>Project Showcase:&nbsp;</strong> {projects.length} projects
          &mdash; a durable execution layer, an e-commerce REST API, a hybrid
          legal search engine, a GenAI email assistant, and a Python utility
        </li>
        <li>
          <strong>Educational Background:&nbsp;</strong> MCA at JIIT Noida and
          BCA from United University
        </li>
      </ul>
      <h2 className={styles.sectionTitle}>Quick Stats</h2>
      <StatGrid stats={quickStats} />
      <blockquote className={styles.aboutDetail}>
        &ldquo;{about.detail}&rdquo;
      </blockquote>
    </div>
  );
};
