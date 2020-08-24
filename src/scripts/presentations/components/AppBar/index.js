import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import AppConfig from '../../../globals/app-config';
import style from './style.scss';
import responsive from './responsive.scss';

class AppBar extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _brand: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style, responsive];
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
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <img src="${_brand}" alt="${AppConfig.APP_NAME}"/>
            <h1>${_title}</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation open">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
