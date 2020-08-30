import '../ReviewItem';

import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

class ReviewContainer extends CommonElement {
  static get properties() {
    return {
      _reviews: { type: Array },
    };
  }

  constructor() {
    super();
    this._reviews = [];
  }

  render() {
    return html`
      <div class="review-container">
        ${this._reviews.map((review) => (html`<review-item _review="${JSON.stringify(review)}"></review-item>`))}
      </div>
    `;
  }
}

customElements.define('review-container', ReviewContainer);
