class RestaurantFavoriteShowPresenter {
  constructor({ view, restaurantDicodingFavorite }) {
    this._view = view;
    this._restaurantDicodingFavorite = restaurantDicodingFavorite;
  }

  async showFavoriteRestaurants() {
    const restaurants = await this._restaurantDicodingFavorite.getAllRestaurants();

    if (restaurants.length) {
      this._view.renderRestaurants(restaurants);
      return;
    }
    this._view.renderError();
  }
}

export default RestaurantFavoriteShowPresenter;
