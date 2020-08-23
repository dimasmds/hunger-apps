// Main dependencies
import 'regenerator-runtime';

// Components Inject
import './presentations/components';

// Style Inject
import '../styles/main.scss';

import App from './presentations/App';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});
