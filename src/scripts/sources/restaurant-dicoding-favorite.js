class RestaurantDicodingFavorite {
  constructor(database) {
    this._database = database;
  }

  async getAllRestaurants() {
    try {
      const restaurants = await this._database.getAll();
      if (restaurants) {
        return restaurants;
      }
      return [];
    } catch (error) {
      // do something with error
      return [];
    }
  }

  async getRestaurant(id) {
    try {
      return await this._database.get(id);
    } catch (error) {
      // do something with error
      return {};
    }
  }

  async putRestaurant(restaurant) {
    await this._database.put({ value: restaurant });
  }
}

export default RestaurantDicodingFavorite;
