class FetchNetwork {
  static async get({ targetUrl, headers }) {
    const response = await fetch(targetUrl, {
      headers,
    });
    return response.json();
  }

  static async post({ targetUrl, headers }) {
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
    });
    return response.json();
  }
}

export default FetchNetwork;
