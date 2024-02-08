import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
