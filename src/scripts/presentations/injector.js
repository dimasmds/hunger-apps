import ShowPage from './pages/ShowPage';
import RestaurantDicodingShowView from './view/restaurant-dicoding-show-view';
import DetailPage from './pages/DetailPage';

const restaurantDicodingShowView = new RestaurantDicodingShowView();
const showPage = new ShowPage({ restaurantDicodingShowView });

const restaurantDetailShowView = new RestaurantDetailShowView();
const detailPage = new DetailPage({ restaurantDetailShowView });

export { showPage, detailPage };
