/* eslint-disable no-console */

const registerSW = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('service worker registration success');
    } catch (error) {
      console.log(error);
    }
    return;
  }
  console.log('Service Worker not Support in This Browser');
};

export default registerSW;
