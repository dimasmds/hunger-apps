import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';

class ErrorElement extends CommonElement {
  static get properties() {
    return {
      _message: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._message = '';
  }

  render() {
    return html`
      <div class="error-container">
        <img alt="man in thinking" src="./images/icons/not-found.webp">
        <p>${this._message}</p>
      </div>
    `;
  }
}

customElements.define('error-element', ErrorElement);
