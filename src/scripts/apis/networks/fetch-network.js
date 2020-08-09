import ExceptionMessages from '../../globals/ExceptionMessages';

class FetchNetwork {
  static async get({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);

    const response = await fetch(targetUrl, {
      ...headers,
    });

    if (response.status !== 200) {
      throw new Error(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
    }

    return response.json();
  }

  static async post({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);

    const response = await fetch(targetUrl, {
      ...headers,
      method: 'POST',
    });

    if (response.status !== 200) {
      throw new Error(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
    }

    return response.json();
  }
}

export default FetchNetwork;
