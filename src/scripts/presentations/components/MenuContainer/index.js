import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

import style from './style.scss';

class MenuContainer extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _menus: { type: Array },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._title = 'General';
    this._menus = [];
  }

  render() {
    return html`
      <div class="menu-container">
        <h4 class="menu-container__title">${this._title}</h4>
        <ul class="menu-list">
            ${this._menus.map((menu) => (html`<li class="menu-item"><p>${menu.name}</p></li>`))}
        </ul>
      </div>
    `;
  }
}

customElements.define('menu-container', MenuContainer);
