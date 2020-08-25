import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import AppConfig from '../../../globals/app-config';
import style from './style.scss';

class FootBar extends CommonElement {
  static get properties() {
    return {
      _appName: { type: String },
      _copyYears: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._appName = AppConfig.APP_NAME;
    this._copyYears = new Date().getFullYear();
  }

  render() {
    return html`
      <footer class="foot-bar">
        <p>Copyright © ${this._copyYears} - ${this._appName}</p>
      </footer>
    `;
  }
}

customElements.define('foot-bar', FootBar);
