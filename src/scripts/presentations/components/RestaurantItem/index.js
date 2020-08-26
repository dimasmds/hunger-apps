import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import AppConfig from '../../../globals/app-config';
import ImageUrlGenerator from '../../../utils/image-url-generator';

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
    const {
      id, name, pictureId, city, description,
    } = this._restaurant;

    this.shadowRoot.innerHTML = `
      <div class="restaurant-item">
       <div class="restaurant-item__header">
            <img class="restaurant-item__header__picture" src="${ImageUrlGenerator.generate(pictureId, AppConfig.imageQuality.SMALL)}" alt="${name}"/>
            <div class="restaurant-item__header__location">
                <span>${city}</span>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3><a href="/#/detail/${id}">${name}</a></h3>
            <p>${description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
