import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import responsive from './responsive.scss';
import ImageUrlGenerator from '../../../utils/image-url-generator';
import AppConfig from '../../../globals/app-config';

class RestaurantDetail extends CommonElement {
  static get properties() {
    return {
      _restaurant: { type: Object },
    };
  }

  static get styles() {
    return [...super.styles, style, responsive];
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
    const {
      id, name, pictureId, address, categories, city, consumerReviews, description, menus, rating,
    } = this._restaurant;
    return html`
      <div id="restaurantDetail" class="restaurant-detail">
        <div class="restaurant-detail__header">
            <img class="restaurant-detail__header__image" 
                 alt="${name}" 
                 src="${ImageUrlGenerator.generate(pictureId, AppConfig.imageQuality.LARGE)}"
                 srcset="${ImageUrlGenerator.generate(pictureId, AppConfig.imageQuality.SMALL)} 480w, 
                         ${ImageUrlGenerator.generate(pictureId)} 800w,
                         ${ImageUrlGenerator.generate(pictureId, AppConfig.imageQuality.LARGE)} 1200w"
                 sizes="(max-width: 799px) 480w,
                        (max-width: 1199px) 800w,
                        1200w">
        </div>
        <div class="restaurant-detail__content">
            <h2 class="restaurant-detail__content__title">${name}</h2>
            <div class="restaurant-detail__content__detail">
                <span class="restaurant-detail__content__detail__item">
                    <img class="icon-small" alt="location" src="./images/icons/location.svg">${`${address}, ${city}.`}
                </span>
                <span class="restaurant-detail__content__detail__item">
                    <img class="icon-small" alt="rating" src="./images/icons/rating.svg">${rating}   
                </span>
                <span class="restaurant-detail__content__detail__item">
                    <img class="icon-small" alt="categories" src="./images/icons/categories.svg">
                    ${categories.map((category) => `${category.name}`).join(', ')}  
                </span>
            </div>
            <p>${description}</p>
        </div>
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
