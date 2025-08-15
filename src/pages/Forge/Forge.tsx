import { Artifact } from 'shared/types/artifacts';
import { generateArt } from 'shared/utils/artifacts';
import styles from './Forge.module.scss';

export const Forge = () => {
  const arts: Artifact[][] = Array.from({ length: 15 }, generateArt);
  const drawArt = (art: Artifact[]) => {
    return art.map((stat, i) => {
      const [entry] = Object.entries(stat);
      const [field, num] = entry;

      return (
        <div key={i}>
          <span>{field}: </span>
          <span>{num}</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      {arts.map((art, i) => (
        <div key={i}>{drawArt(art)}</div>
      ))}
    </div>
  );
};
