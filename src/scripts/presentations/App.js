import UrlParser from '../routes/url-parser';
import routes from '../routes';

class App {
  constructor({ content, skipLink }) {
    this._content = content;
    this._skipLink = skipLink;
    this._initialAppShell();
  }

  _initialAppShell() {
    this._initialDrawer();
    this._initialSkipLink();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  _initialDrawer() {
    const appBarElement = document.querySelector('app-bar');

    this._content.addEventListener('click', () => {
      appBarElement._isDrawerOpen = false;
    });
  }

  _initialSkipLink() {
    this._skipLink.addEventListener('click', () => {
      this._content.tabIndex = 0;
      this._content.focus();
    });
  }
}

export default App;
