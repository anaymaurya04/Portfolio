import { useState } from "react";
import { identity } from "../../data/content";
import { ChapterHeading, Lead } from "../ui/UI";
import styles from "./Chapters.module.css";
import contactStyles from "./Contact.module.css";

const contactCards = [
  { label: "email", value: identity.email, href: `mailto:${identity.email}` },
  { label: "phone", value: identity.phone, href: identity.phoneHref },
  { label: "github", value: identity.github, href: identity.githubHref },
  { label: "location", value: identity.location, href: null },
];

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <ChapterHeading
        eyebrow="07 / contact"
        title="Get in Touch"
      >
        <Lead>
          I&apos;m always open to new opportunities, collaborations, and
          conversations about backend and GenAI work.
        </Lead>
      </ChapterHeading>
      <div className={contactStyles.cardGrid}>
        {contactCards.map((card) => (
          <div key={card.label} className={contactStyles.card}>
            <div className={contactStyles.cardLabel}>{card.label}</div>
            {card.href ? (
              <a className={contactStyles.cardValue} href={card.href}>
                {card.value}
              </a>
            ) : (
              <div className={contactStyles.cardValue}>{card.value}</div>
            )}
          </div>
        ))}
      </div>
      <h2 className={styles.sectionTitle}>Send Me a Message</h2>
      <form className={contactStyles.form} onSubmit={handleSubmit}>
        <div className={contactStyles.fieldRow}>
          <label className={contactStyles.field}>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label className={contactStyles.field}>
            <span>Your email</span>
            <input type="email" name="email" required />
          </label>
        </div>
        <label className={contactStyles.field}>
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit" className={contactStyles.submitBtn}>
          Send Message
        </button>
      </form>
      {sent && (
        <p className={contactStyles.sentNote}>
          Opening your email client with the message pre-filled to{" "}
          {identity.email}. No message has been sent if your mail app
          didn&apos;t open.
        </p>
      )}
    </div>
  );
};
