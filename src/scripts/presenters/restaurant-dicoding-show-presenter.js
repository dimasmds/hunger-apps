class RestaurantDicodingShowPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodingApi = restaurantDicodingApi;
  }

  async showRestaurants() {
    const restaurants = await this._restaurantDicodingApi.getAllRestaurants();
    this._view.renderRestaurants(restaurants);
  }
}

export default RestaurantDicodingShowPresenter;
