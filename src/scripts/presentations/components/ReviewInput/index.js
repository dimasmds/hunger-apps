import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

import style from './style.scss';
import UrlParser from '../../../routes/url-parser';

class ReviewInput extends CommonElement {
  static get properties() {
    return {
      _id: { type: String },
      _name: { type: String },
      _review: { type: String },
      _onReviewSubmit: { type: Function },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._id = UrlParser.parseActiveUrlWithoutCombiner().id;
    this._name = '';
    this._review = '';
  }

  _onNameChangeHandler(event) {
    const { value } = event.target;
    this._name = value;
  }

  _onReviewChangeHandler(event) {
    const { value } = event.target;
    this._review = value;
  }

  _onButtonClick() {
    this._onReviewSubmit({
      id: this._id,
      name: this._name,
      review: this._review,
    });

    this._name = '';
    this._review = '';
  }

  render() {
    return html`
      <div class="review-input">
        <input aria-label="Name" class="review-input__name" placeholder="John" type="text" @change="${this._onNameChangeHandler}" .value="${this._name}">
        <textarea aria-label="Review" class="review-input__review" placeholder="This restaurant is awesome!" @change="${this._onReviewChangeHandler}" .value="${this._review}"></textarea>
        <button class="review-input__submit" @click="${this._onButtonClick}">Send Review</button>
      </div>
    `;
  }
}

customElements.define('review-input', ReviewInput);
