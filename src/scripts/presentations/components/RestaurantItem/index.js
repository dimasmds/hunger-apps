import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import AppConfig from '../../../globals/app-config';
import ImageUrlGenerator from '../../../utils/image-url-generator';

class RestaurantItem extends CommonElement {
  static get properties() {
    return {
      _restaurant: { type: Object },
      _useSkeleton: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._restaurant = {};
    this._useSkeleton = false;
  }

  render() {
    if (this._useSkeleton) {
      return this._renderSkeleton();
    }

    return this._renderRestaurant();
  }

  _renderRestaurant() {
    const {
      id, name, pictureId, city, description,
    } = this._restaurant;

    return html`
      <div class="restaurant-item">
       <div class="restaurant-item__header">
            <img class="restaurant-item__header__picture" height="200px" width="100%" loading="lazy" src="${ImageUrlGenerator.generate(pictureId, AppConfig.imageQuality.SMALL)}" alt="${name}"/>
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

  _renderSkeleton() {
    return html`
      <div class="restaurant-item skeleton">
       <div class="restaurant-item__header">
            <img class="restaurant-item__header__picture" src="./images/placeholder.png" alt=""/>
        </div>
        <div class="restaurant-item__content">
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
