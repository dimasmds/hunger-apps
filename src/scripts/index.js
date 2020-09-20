// Main dependencies
import 'regenerator-runtime';

// Components Inject
import './presentations/components';

// Style Inject
import '../styles/main.scss';

import App from './presentations/App';
import registerSW from './utils/register-sw';

const app = new App({
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  await registerSW();
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});
