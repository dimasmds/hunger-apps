import ExceptionMessages from '../globals/ExceptionMessages';

class FetchNetwork {
  static async get({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);

    const response = await fetch(targetUrl, {
      ...headers,
    });
    return response.json();
  }

  static async post({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);

    const response = await fetch(targetUrl, {
      ...headers,
      method: 'POST',
    });
    return response.json();
  }
}

export default FetchNetwork;
