import { about, quickStats } from "../../data/content";
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
          Backend-focused MCA candidate at JIIT Noida (2025&ndash;2027) with
          hands-on experience building REST APIs, hybrid search systems, and
          AI-integrated applications.
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
          across backend engineering, databases, search, and GenAI
        </li>
        <li>
          <strong>Hands-on Experience:&nbsp;</strong> internships spanning
          space-tech education and computer lab mentorship
        </li>
        <li>
          <strong>Project Showcase:&nbsp;</strong> 4 projects &mdash; a hybrid
          legal search engine, a GenAI email assistant, a Python utility, and an
          in-progress e-commerce backend
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
