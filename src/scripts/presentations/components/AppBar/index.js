import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import AppConfig from '../../../globals/app-config';
import style from './style.scss';
import responsive from './responsive.scss';
import UrlParser from '../../../routes/url-parser';

class AppBar extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _brand: { type: String },
      _isDrawerOpen: { type: Boolean },
      _pageActive: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style, responsive];
  }

  constructor() {
    super();
    this._title = AppConfig.APP_NAME;
    this._brand = AppConfig.APP_LOGO_ICON;
    this._isDrawerOpen = false;
    this._pageActive = UrlParser.parseActiveUrlWithCombiner();
  }

  onHamburgerClick() {
    this._isDrawerOpen = !this._isDrawerOpen;
  }

  onNavigateClick(event) {
    const target = event.path[0];
    this._pageActive = target.hash.substring(1);
  }

  render() {
    const { _title, _brand } = this;
    return html`
    <header class="app-bar">
        <div class="app-bar__menu">
            <button @click="${this.onHamburgerClick}" id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <img src="${_brand}" alt="${AppConfig.APP_NAME}"/>
            <h1>${_title}</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation ${this._isDrawerOpen ? 'open' : ''}">
            <ul>
                <li>
                    <a 
                      @click="${this.onNavigateClick}" 
                      href="#/home" 
                      class="${this._pageActive === '/home' || this._pageActive === '/' ? 'active' : ''}">
                      Home</a>
                </li>
                <li>
                    <a 
                      @click="${this.onNavigateClick}"
                      href="#/favorite"
                      class="${this._pageActive === '/favorite' ? 'active' : ''}">
                      Favorite</a>
                </li>
                <li>
                    <a
                      @click="${this.onNavigateClick}"
                      href="#/about"
                      class="${this._pageActive === '/about' ? 'active' : ''}">
                      About Us</a>
                </li>
            </ul>
        </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
