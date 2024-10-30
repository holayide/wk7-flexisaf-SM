import styles from "./Ribbon.module.css";

export default function Ribbon() {
  return (
    <div className={styles.wrapper}>
      <div className="gContainer">
        <ul className={styles.ul}>
          <li className={styles.list}>
            <span>x</span>Fashion
          </li>
          <li className={styles.list}>
            <span>x</span>OCCASIONALLY
          </li>
          <li className={styles.list}>
            <span>x</span>EVERYDAY
          </li>
        </ul>
      </div>
    </div>
  );
}
