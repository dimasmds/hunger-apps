import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';

class MenuContainer extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _menus: { type: Array },
    };
  }

  constructor() {
    super();
    this._title = 'General';
    this._menus = [];
  }

  render() {
    return html`
      <div class="menu-container">
        ${this._menus.map(() => (html`<p>Render menu</p>`))}
      </div>
    `;
  }
}

customElements.define('menu-container', MenuContainer);
