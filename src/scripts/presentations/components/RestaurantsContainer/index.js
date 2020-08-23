import '../RestaurantItem';

import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';

class RestaurantsContainer extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  setRestaurants(restaurants) {
    this._restaurants = restaurants;
    this.renderRestaurants();
  }

  getRestaurants() {
    return this._restaurants;
  }

  render() {
    return html`
     <div id="restaurants" class="restaurant-list">
     </div>
    `;
  }

  renderRestaurants() {
    const restaurantsElement = this.shadowRoot.querySelector('#restaurants');
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.setRestaurant(restaurant);
      restaurantsElement.appendChild(restaurantItemElement);
    });

    this.dispatchEvent(new Event('restaurants:updated'));
  }

  renderError(message) {
    const restaurantsElement = this.shadowRoot.querySelector('#restaurants');
    restaurantsElement.innerHTML = `<p class="restaurants-not-found">${message}</p>`;

    this.dispatchEvent(new Event('restaurants:not-found'));
  }
}

customElements.define('restaurants-container', RestaurantsContainer);
