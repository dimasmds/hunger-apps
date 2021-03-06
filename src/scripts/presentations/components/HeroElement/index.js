import { html } from 'lit-html';
import CommonElement from '../_base_/CommonElement';
import style from './style.scss';
import AppConfig from '../../../globals/app-config';

// noinspection JSUnresolvedFunction
class HeroElement extends CommonElement {
  static get properties() {
    return {
      _heroImage: { type: String },
      _content: { type: String },
      _subContent: { type: String },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._heroImage = document.body.clientWidth < 800 ? AppConfig.HERO_IMAGE_SMALL
      : AppConfig.HERO_IMAGE_LARGE;
    this._content = 'Find Your Favorite Restaurant Here!';
    this._subContent = 'Let\'s enjoy every bite of foods here!';
  }

  render() {
    return html`
      <div class="hero-element" style="background-image: url('${this._heroImage}')">
        <div>
            <h2>${this._content}</h2>
        </div>
      </div> 
    `;
  }
}

customElements.define('hero-element', HeroElement);
