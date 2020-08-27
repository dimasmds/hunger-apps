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

  _renderRestaurant() {
    const { name } = this._restaurant;
    return html`
      <p>${name}</p>
    `;
  }

  _renderSkeleton() {
    return html`<p>Loading ...</p>`;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
