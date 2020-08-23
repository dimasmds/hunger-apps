import { html } from 'lit-html';
import CommonElement from '../CommonElement';
import AppConfig from '../../../globals/app-config';

class AppBar extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _brand: { type: String },
    };
  }

  constructor() {
    super();
    this._title = AppConfig.APP_NAME;
    this._brand = AppConfig.APP_LOGO_ICON;
  }

  render() {
    const { _title, _brand } = this;
    return html`
    <header class="app-bar">
        <p>${_title}</p>
        <p>${_brand}</p>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
