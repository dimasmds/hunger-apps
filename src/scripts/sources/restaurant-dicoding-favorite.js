class RestaurantDicodingFavorite {
  constructor(database) {
    this._database = database;
  }

  async getAllRestaurants() {
    return this._database.getAll();
  }
}

export default RestaurantDicodingFavorite;
