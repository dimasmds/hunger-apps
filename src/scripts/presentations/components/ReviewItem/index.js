import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

class ReviewItem extends CommonElement {
  static get properties() {
    return {
      _review: { type: Object },
    };
  }

  constructor() {
    super();
    this._review = {};
  }

  render() {
    const { name, review, date } = this._review;
    return html`
      <div class="review-item">
        <h4 class="review-item__title">${name}</h4>
        <span class="review-item__date">${date}</span>
        <p class="review-item__review">${review}</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
