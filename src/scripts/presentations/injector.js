import ShowPage from './pages/ShowPage';
import RestaurantDicodingShowView from './view/restaurant-dicoding-show-view';

const restaurantDicodingShowView = new RestaurantDicodingShowView();
const showPage = new ShowPage({ restaurantDicodingShowView });

const otherPage = {};

export { showPage, otherPage };
