import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';

class PreLoader extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div id="preloader">Loading...</div>
    `;
  }
}

customElements.define('pre-loader', PreLoader);
