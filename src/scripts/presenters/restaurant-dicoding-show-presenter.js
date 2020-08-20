class RestaurantDicodingShowPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodingApi = restaurantDicodingApi;
  }

  async showRestaurants() {
    this._view.showLoading();
    const restaurants = await this._restaurantDicodingApi.getAllRestaurants();
    this._view.renderRestaurants(restaurants);
    this._view.hideLoading();
  }
}

export default RestaurantDicodingShowPresenter;
