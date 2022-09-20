import { LitElement } from 'lit';
import style from './style.scss';

class CommonElement extends LitElement {
  static get styles() {
    return [style];
  }
}

export default CommonElement;
