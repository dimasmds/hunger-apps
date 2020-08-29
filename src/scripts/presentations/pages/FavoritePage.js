import RestaurantDicodingFavorite from '../../sources/restaurant-dicoding-favorite';
import IdbDatabase from '../../apis/databases/idb-database';
import RestaurantFavoriteShowPresenter from '../presenters/restaurant-favorite-show-presenter';

class FavoritePage {
  constructor({ restaurantFavoriteShowView }) {
    this._view = restaurantFavoriteShowView;
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
    const idbDatabase = new IdbDatabase();
    await idbDatabase.createNewObjectStore({ objectStoreConfig: { keyPath: 'id' } });

    const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
    const presenter = new RestaurantFavoriteShowPresenter({
      view: this._view,
      restaurantDicodingFavorite,
    });
    await presenter.showFavoriteRestaurants();
  }

  _synchronizeAppBar() {
    this._appBarElement._pageActive = '/favorite';
  }
}

export default FavoritePage;
