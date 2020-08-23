import { html } from 'lit-html';
import CommonElement from '../CommonElement';

class AppBar extends CommonElement {
  static get properties() {
    return {
      _title: { type: String },
      _brand: { type: String },
    };
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
