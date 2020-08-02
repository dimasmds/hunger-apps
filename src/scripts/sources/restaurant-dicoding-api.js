import Endpoint from '../globals/api-endpoint';

class RestaurantDicodingApi {
  constructor(network) {
    this._network = network;
  }

  async getAllRestaurants() {
    const response = await this._network.get(Endpoint.getAllRestaurants());
    return response.restaurants;
  }

  async getRestaurant(id) {
    const response = await this._network.get(Endpoint.getRestaurant(id));
    return response.restaurant;
  }
}

export default RestaurantDicodingApi;
