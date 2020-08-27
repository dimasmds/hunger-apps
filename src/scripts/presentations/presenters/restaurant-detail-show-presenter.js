class RestaurantDetailShowPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodingApi = restaurantDicodingApi;
  }

  async showRestaurantDetail(id) {
    const restaurant = await this._restaurantDicodingApi.getRestaurant(id);

    if (restaurant.name) {
      this._view.renderDetailRestaurant(restaurant);
      return;
    }
    this._view.renderError();
  }
}

export default RestaurantDetailShowPresenter;
