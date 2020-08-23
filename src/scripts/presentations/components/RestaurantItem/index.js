import CommonElement from '../CommonElement';
import style from './style.scss';

class RestaurantItem extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  setRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.renderRestaurant();
  }

  constructor() {
    super();
    this.restaurant = {};
  }

  renderRestaurant() {
    const { name } = this._restaurant;

    this.shadowRoot.innerHTML = `
      <div class="restaurant-item">
       <p>${name}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
