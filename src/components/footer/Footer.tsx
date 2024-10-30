import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gContainer">
      <div className={styles.footer}>
        copyright@{currentYear}. All right reserved | made by Olaide
      </div>
    </footer>
  );
}
