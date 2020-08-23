import Endpoint from '../globals/api-endpoint';

class RestaurantDicodingApi {
  constructor(network) {
    this._network = network;
  }

  async getAllRestaurants() {
    try {
      const response = await this._network.get({ targetUrl: Endpoint.getAllRestaurants() });
      return response.restaurants;
    } catch (error) {
      // TODO: do something with error
      return [];
    }
  }

  async getRestaurant(id) {
    try {
      const response = await this._network.get({ targetUrl: Endpoint.getRestaurant(id) });
      return response.restaurant;
    } catch (error) {
      // TODO: do something with error
      return {};
    }
  }

  postReview({ idRestaurant, name, review }) {
    try {
      return this._network.post({ targetUrl: Endpoint.postCustomerReview() }, {
        body: {
          id: idRestaurant,
          name,
          review,
        },
      });
    } catch (error) {
      // TODO: do something with error
      return {};
    }
  }
}

export default RestaurantDicodingApi;
