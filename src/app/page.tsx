import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="verticalFlex">
          <h2>About Me</h2>
        </div>
      </main>
    </div>
  );
}
