import { html } from 'lit-html';
import CommonElement from '../CommonElement';
import style from './style.scss';

class RestaurantItem extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  static get properties() {
    return {
      restaurant: { type: Object },
    };
  }

  constructor() {
    super();
    this.restaurant = {};
  }

  render() {
    const { name } = this.restaurant;

    return html`
      <div class="restaurant-item">
       <p>${name}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
