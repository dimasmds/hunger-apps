import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

import style from './style.scss';
import RestaurantDicodingFavorite from '../../../sources/restaurant-dicoding-favorite';
import IdbDatabase from '../../../apis/databases/idb-database';

class FavoriteButton extends CommonElement {
  static get properties() {
    return {
      _isFavorite: { type: Boolean },
      _restaurant: { type: Object },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();

    // it's so critical :(
    this._idbDatabase = new IdbDatabase();
    this._restaurantDicodingFavorite = new RestaurantDicodingFavorite(this._idbDatabase);
  }

  async connectedCallback() {
    super.connectedCallback();
    await this._analyzeFavoriteState();
  }

  render() {
    return html`
      <button @click="${this._onFavoriteClick}" 
           class="favorite-button"
           aria-label="${this._isFavorite ? 'unlike this restaurant' : 'like this restaurant'}">
        <img src="${this._isFavorite ? './images/icons/favorite-fill.svg' : './images/icons/favorite-outline.svg'}" 
             alt="${this._isFavorite ? 'restaurant favorite' : 'restaurant is not favorite'}">
      </button>
    `;
  }

  async _analyzeFavoriteState() {
    const { id } = this._restaurant;
    await this._idbDatabase.createNewObjectStore({ objectStoreConfig: { keyPath: 'id' } });
    const restaurant = await this._restaurantDicodingFavorite.getRestaurant(id);

    this._isFavorite = !!restaurant;
  }

  async _onFavoriteClick() {
    if (!this._isFavorite) {
      await this._saveRestaurant();
      return;
    }
    await this._removeRestaurant();
  }

  async _saveRestaurant() {
    try {
      await this._restaurantDicodingFavorite.putRestaurant(this._restaurant);
      this._isFavorite = !this._isFavorite;
    } catch (error) {
      // TODO with error
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async _removeRestaurant() {
    const { id } = this._restaurant;

    try {
      await this._restaurantDicodingFavorite.deleteRestaurant(id);
      this._isFavorite = !this._isFavorite;
    } catch (error) {
      // TODO with error;
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

customElements.define('favorite-button', FavoriteButton);
