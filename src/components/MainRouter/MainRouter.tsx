import { Routes, Route } from 'react-router-dom';
import { Forge } from 'pages/Forge/Forge';
import { Storage } from 'pages/Storage/Storage';
import { ROUTES } from 'shared/types/routes';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.FORGE} Component={Forge} />
      <Route path={ROUTES.STORAGE} Component={Storage} />

      <Route path={ROUTES.HOME} Component={Forge} />
    </Routes>
  );
};
