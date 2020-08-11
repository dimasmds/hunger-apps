class RestaurantDicodingFavorite {
  constructor(database) {
    this._database = database;
  }

  async getAllRestaurants() {
    const restaurants = await this._database.getAll();
    if (restaurants) {
      return restaurants;
    }
    return [];
  }
}

export default RestaurantDicodingFavorite;
