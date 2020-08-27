import { detailPage, showPage } from '../presentations/injector';

const routes = {
  '/': showPage,
  '/home': showPage,
  '/detail/:id': detailPage,
};

export default routes;
