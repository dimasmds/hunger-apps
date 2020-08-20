import { html } from 'lit-html';
import style from './style.scss';
import CommonElement from '../CommonElement';

class HelloWorld extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <p>Hello World!</p>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
