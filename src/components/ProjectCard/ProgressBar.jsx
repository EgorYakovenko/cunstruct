import css from "./ProgressBar.module.css";

export default function ProgressBar({ value }) {
  let barColorClass = css.red;

  if (value >= 70) {
    barColorClass = css.green;
  } else if (value >= 30) {
    barColorClass = css.yellow;
  }

  return (
    <div>
      <div className={css.lable}>
        <span className={css.progress}>Прогресс</span>
        <span className={css.progressCount}>
          {Math.round((value / 100) * 100)}%
        </span>
      </div>
      <progress
        className={`${css.progress} ${barColorClass}`}
        value={value}
        max="100"
      ></progress>
    </div>
  );
}
