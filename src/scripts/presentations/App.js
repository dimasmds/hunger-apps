import UrlParser from '../routes/url-parser';
import routes from '../routes';

class App {
  constructor({ content }) {
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    // TODO
    const appBarElement = document.querySelector('app-bar');
    const mainContent = document.querySelector('#mainContent');

    mainContent.addEventListener('click', () => {
      appBarElement._isDrawerOpen = false;
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
