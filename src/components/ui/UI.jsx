import styles from "./UI.module.css";

const STATUS_META = {
  active: { label: "active — in development", className: "status_active" },
  shipped: { label: "shipped", className: "status_shipped" },
  archived: { label: "archived", className: "status_archived" },
};

export const ChapterHeading = ({ eyebrow, title, children }) => {
  return (
    <header className={styles.chapterHeading}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h1 className={styles.chapterTitle}>{title}</h1>
      {children && <div className={styles.leadWrap}>{children}</div>}
    </header>
  );
};

export const Lead = ({ children }) => {
  return <p className={styles.lead}>{children}</p>;
};

export const Callout = ({ icon, title, children, tone = "primary" }) => {
  return (
    <div className={`${styles.callout} ${styles[`callout_${tone}`]}`}>
      {icon && <span className={styles.calloutIcon}>{icon}</span>}
      <span>
        {title && <strong className={styles.calloutTitle}>{title}</strong>}
        {children}
      </span>
    </div>
  );
};

export const Tag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

export const StatusPill = ({ status }) => {
  const meta = STATUS_META[status] || STATUS_META.archived;
  return (
    <span className={`${styles.statusPill} ${styles[meta.className]}`}>
      <span className={styles.statusDot} />
      {meta.label}
    </span>
  );
};

export const Footnote = ({ href, label }) => {
  return (
    <sup className={styles.footnote}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        [{label}]
      </a>
    </sup>
  );
};

export const StatGrid = ({ stats }) => {
  return (
    <div className={styles.statGrid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.statCell}>
          <div className={styles.statValue}>
            {stat.value}
            {stat.source && (
              <Footnote href={stat.source.href} label={stat.source.label} />
            )}
          </div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export const DataBlock = ({ summary, lines }) => {
  return (
    <details className={styles.dataBlock}>
      <summary className={styles.dataBlockSummary}>{summary}</summary>
      <pre className={styles.dataBlockBody}>{lines.join("\n")}</pre>
    </details>
  );
};