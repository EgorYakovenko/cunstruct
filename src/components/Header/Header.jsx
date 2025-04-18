import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
