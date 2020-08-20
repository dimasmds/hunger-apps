import { LitElement } from 'lit-element';
import { html } from 'lit-html';

class HelloWorld extends LitElement {
  render() {
    return html`
      <div>Hello World!</div>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
