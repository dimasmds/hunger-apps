class RestaurantDicodingShowPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodingApi = restaurantDicodingApi;
  }

  async showRestaurants() {
    const restaurants = await this._restaurantDicodingApi.getAllRestaurants();

    if (restaurants.length) {
      this._view.renderRestaurants(restaurants);
      return;
    }
    this._view.renderError();
  }
}

export default RestaurantDicodingShowPresenter;
