import css from "./AddDocumentsCounterparties.module.css";

export default function AddDocumentsCounterparties({
  Icon,
  role,
  description,
  link,
}) {
  return (
    <>
      <div className={css.counterpartiesItem}>
        <div className={css.cardContainer}>
          <Icon className={css.icon} />
          <div>
            <p className={css.role}>{role}</p>
            <span className={css.description}>{description}</span>
          </div>
        </div>

        <a className={css.link} href="">
          {link}
        </a>
      </div>
    </>
  );
}
