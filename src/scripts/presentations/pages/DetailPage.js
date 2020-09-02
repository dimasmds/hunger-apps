import RestaurantDicodingApi from '../../sources/restaurant-dicoding-api';
import FetchNetwork from '../../apis/networks/fetch-network';
import RestaurantDetailShowPresenter from '../presenters/restaurant-detail-show-presenter';
import UrlParser from '../../routes/url-parser';

class DetailPage {
  constructor({ restaurantDetailShowView }) {
    this._view = restaurantDetailShowView;
    this._appBarElement = document.querySelector('app-bar');
  }

  async render() {
    this._clearAppBarPageActive();
    return this._view.getTemplates();
  }

  async afterRender() {
    // fix fist view scroll on mobile
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const presenter = new RestaurantDetailShowPresenter({
      view: this._view,
      restaurantDicodingApi,
    });

    await presenter.showRestaurantDetail(this._getIdByUrl());
  }

  _getIdByUrl() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    return url.id;
  }

  _clearAppBarPageActive() {
    this._appBarElement._pageActive = null;
  }
}

export default DetailPage;
