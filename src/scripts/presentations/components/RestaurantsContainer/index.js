/* eslint-disable prefer-spread */
import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import responsive from './responsive.scss';

class RestaurantsContainer extends CommonElement {
  static get properties() {
    return {
      _restaurants: { type: Array },
    };
  }

  constructor() {
    super();
    this._restaurants = [];
  }

  static get styles() {
    return [...super.styles, style, responsive];
  }

  setRestaurants(restaurants) {
    this._restaurants = restaurants;
    this.dispatchEvent(new Event('restaurants:updated'));
  }

  getRestaurants() {
    return this._restaurants;
  }

  render() {
    if (this._restaurants.length) {
      import('../RestaurantItem');
      return html`
        <div id="restaurants" class="restaurant-list">
            ${this._restaurants.map((restaurant) => html`<restaurant-item _restaurant=${JSON.stringify(restaurant)}></restaurant-item>`)}
        </div>
      `;
    }

    return html`
     <div id="restaurants" class="restaurant-list">
       ${Array.apply(null, { length: 20 }).map(() => html`<restaurant-item _useSkeleton="true"></restaurant-item>`)}
     </div>
    `;
  }

  renderError(message) {
    const restaurantsElement = this.shadowRoot.querySelector('#restaurants');
    restaurantsElement.classList.add('error');
    import('../ErrorElement');
    restaurantsElement.innerHTML = `<error-element _message="${message}"></error-element>`;

    this.dispatchEvent(new Event('restaurants:not-found'));
  }
}

customElements.define('restaurants-container', RestaurantsContainer);
