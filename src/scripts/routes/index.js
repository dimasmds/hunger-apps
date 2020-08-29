import { detailPage, favoritePage, showPage } from '../presentations/injector';

const routes = {
  '/': showPage,
  '/home': showPage,
  '/detail/:id': detailPage,
  '/favorite': favoritePage,
};

export default routes;
