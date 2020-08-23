import { html } from 'lit-html';
import CommonElement from '../CommonElement';
import style from './style.scss';

class PreLoader extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div id="preloader"></div>
    `;
  }
}

customElements.define('pre-loader', PreLoader);
