import Endpoint from '../globals/api-endpoint';

class RestaurantDicodingApi {
  constructor(network) {
    this._network = network;
  }

  async getAllRestaurants() {
    try {
      const response = await this._network.get(Endpoint.getAllRestaurants());
      return response.restaurants;
    } catch (error) {
      // TODO: do something with error
      return [];
    }
  }

  async getRestaurant(id) {
    try {
      const response = await this._network.get(Endpoint.getRestaurant(id));
      return response.restaurant;
    } catch (error) {
      // TODO: do something with error
      return {};
    }
  }

  postReview({ idRestaurant, name, review }) {
    return this._network.post(Endpoint.postCustomerReview(), {
      body: {
        id: idRestaurant,
        name,
        review,
      },
    });
  }
}

export default RestaurantDicodingApi;
