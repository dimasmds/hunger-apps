import ShowPage from './pages/ShowPage';
import RestaurantDicodingShowView from './view/restaurant-dicoding-show-view';
import DetailPage from './pages/DetailPage';
import RestaurantDetailShowView from './view/restaurant-detail-show-view';
import RestaurantFavoriteShowView from './view/restaurant-favorite-show-view';
import FavoritePage from './pages/FavoritePage';

const restaurantDicodingShowView = new RestaurantDicodingShowView();
const showPage = new ShowPage({ restaurantDicodingShowView });

const restaurantDetailShowView = new RestaurantDetailShowView();
const detailPage = new DetailPage({ restaurantDetailShowView });

const restaurantFavoriteShowView = new RestaurantFavoriteShowView();
const favoritePage = new FavoritePage({ restaurantFavoriteShowView });

export { showPage, detailPage, favoritePage };
