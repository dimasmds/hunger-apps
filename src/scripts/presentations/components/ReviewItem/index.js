import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import AvatarGenerator from '../../../utils/avatar-generator';

class ReviewItem extends CommonElement {
  static get properties() {
    return {
      _review: { type: Object },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._review = {};
  }

  render() {
    const { name, review, date } = this._review;
    return html`
      <div class="review-item">
        <div class="review-item__avatar">
            <img width="60px" height="60px" loading="lazy" src="${AvatarGenerator.generate()}" alt="${name} avatar" />
        </div>
        <div class="review-item__content">
            <h4 class="review-item__title">${name}</h4>
            <span class="review-item__date">${date}</span>
            <p class="review-item__review">${review}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
