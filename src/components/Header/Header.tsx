import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/types/routes';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={ROUTES.FORGE}>Forge</Link>
      <Link to={ROUTES.STORAGE}>Storage</Link>
    </div>
  );
};
