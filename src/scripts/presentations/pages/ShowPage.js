import RestaurantDicodingShowPresenter from '../presenters/restaurant-dicoding-show-presenter';
import RestaurantDicodingApi from '../../sources/restaurant-dicoding-api';
import FetchNetwork from '../../apis/networks/fetch-network';

class ShowPage {
  constructor({ restaurantDicodingShowView }) {
    this._view = restaurantDicodingShowView;
    this._appBarElement = document.querySelector('app-bar');
  }

  async render() {
    this._synchronizeAppBar();
    return `
        <hero-element></hero-element>
        ${this._view.getTemplates()}
    `;
  }

  async afterRender() {
    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const presenter = new RestaurantDicodingShowPresenter({
      view: this._view,
      restaurantDicodingApi,
    });
    await presenter.showRestaurants();
  }

  _synchronizeAppBar() {
    this._appBarElement._pageActive = '/home';
  }
}

export default ShowPage;
