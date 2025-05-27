import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="vertical-flex">
          <p>Page content</p>
        </div>
      </main>
    </div>
  );
}
