import styles from './colorTile.module.css';

interface ColorTileProps {
  colorVariable: string;
}

export function ColorTile({ colorVariable }: ColorTileProps) {
  return (
    <div className={styles.colorTileWrapper}>
      <div
        className={styles.colorTile}
        style={{ backgroundColor: `var(${colorVariable})` }}
      ></div>
      <p>{colorVariable}</p>
    </div>
  );
}
