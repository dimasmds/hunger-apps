class FetchNetwork {
  static async get({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error('Target url cannot be empty');

    const response = await fetch(targetUrl, {
      ...headers,
    });
    return response.json();
  }

  static async post({ targetUrl = '', headers = {} } = {}) {
    if (!targetUrl.trim()) throw new Error('Target url cannot be empty');

    const response = await fetch(targetUrl, {
      ...headers,
      method: 'POST',
    });
    return response.json();
  }
}

export default FetchNetwork;
