import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';

class RestaurantDetail extends CommonElement {
  static get properties() {
    return {
      _restaurant: { type: Object },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  setRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.dispatchEvent(new Event('restaurant:updated'));
  }

  getRestaurant() {
    return this._restaurant;
  }

  constructor() {
    super();
    this._restaurant = null;
  }

  render() {
    if (this._restaurant) {
      return this._renderRestaurant();
    }

    return this._renderSkeleton();
  }

  renderError(message) {
    const restaurantDetailContainer = this.shadowRoot.querySelector('#restaurantDetail');
    restaurantDetailContainer.innerHTML = `<p>${message}</p>`;

    this.dispatchEvent(new Event('restaurant:update:failed'));
  }

  _renderRestaurant() {
    const { name } = this._restaurant;
    return html`
      <div id="restaurantDetail" class="restaurant-detail">
         <p>${name}</p>
      </div>
    `;
  }

  _renderSkeleton() {
    return html`
      <div id="restaurantDetail" class="restaurant-detail">
         <p>Loading ...</p>
      </div>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
