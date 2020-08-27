import RestaurantDicodingApi from '../../sources/restaurant-dicoding-api';
import FetchNetwork from '../../apis/networks/fetch-network';
import RestaurantDetailShowPresenter from '../presenters/restaurant-detail-show-presenter';
import UrlParser from '../../routes/url-parser';

class DetailPage {
  constructor({ restaurantDetailShowView }) {
    this._view = restaurantDetailShowView;
  }

  async render() {
    return this._view.getTemplates();
  }

  async afterRender() {
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
}

export default DetailPage;
