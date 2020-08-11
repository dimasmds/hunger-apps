import { GetFavoriteRestaurantsObjectMock } from './mock/favorites-object-mock';
import IdbDatabase from '../../src/scripts/apis/databases/idb-database';
import RestaurantDicodingFavorite from '../../src/scripts/sources/restaurant-dicoding-favorite';

describe('Restaurant Dicoding Favorite Source', () => {
  describe('Get All Favorite Restaurants', () => {
    it('should return all favorite restaurants correctly', () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'getAll')
        .mockImplementation(() => ({
          restaurants: GetFavoriteRestaurantsObjectMock,
        }));

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurants = restaurantDicodingFavorite.getAllRestaurants();

      expect(mockDatabase)
        .toBeCalled();

      expect(restaurants)
        .toStrictEqual(GetFavoriteRestaurantsObjectMock);
    });
  });
});
