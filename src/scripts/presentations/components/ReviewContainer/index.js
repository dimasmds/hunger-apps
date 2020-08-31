import '../ReviewItem';

import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

import style from './style.scss';
import responsive from './responsive.scss';

class ReviewContainer extends CommonElement {
  static get properties() {
    return {
      _reviews: { type: Array },
    };
  }

  static get styles() {
    return [...super.styles, style, responsive];
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
