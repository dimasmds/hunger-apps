class RestaurantDetailShowPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodingApi = restaurantDicodingApi;
  }

  async showRestaurantDetail(id) {
    const restaurant = await this._restaurantDicodingApi.getRestaurant(id);
    this._view.showDetailRestaurant(restaurant);
  }
}

export default RestaurantDetailShowPresenter;
