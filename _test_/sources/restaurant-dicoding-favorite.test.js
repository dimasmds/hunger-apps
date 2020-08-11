import {
  GetFavoriteRestaurantObjectMock,
  GetFavoriteRestaurantsObjectMock,
} from './mock/favorites-object-mock';
import IdbDatabase from '../../src/scripts/apis/databases/idb-database';
import RestaurantDicodingFavorite from '../../src/scripts/sources/restaurant-dicoding-favorite';

describe('Restaurant Dicoding Favorite Source', () => {
  describe('Get All Favorite Restaurants', () => {
    it('should return all favorite restaurants correctly', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'getAll')
        .mockImplementation(() => GetFavoriteRestaurantsObjectMock);

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurants = await restaurantDicodingFavorite.getAllRestaurants();

      expect(mockDatabase)
        .toBeCalled();

      expect(restaurants)
        .toStrictEqual(GetFavoriteRestaurantsObjectMock);
    });

    it('should return empty array if there no favorite restaurant', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'getAll')
        .mockImplementation(() => null);

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurants = await restaurantDicodingFavorite.getAllRestaurants();

      expect(mockDatabase)
        .toBeCalled();

      expect(restaurants)
        .toStrictEqual([]);
    });

    it('should return empty array if database failed to process', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'getAll')
        .mockImplementation(() => {
          throw new Error('Failed to process data');
        });

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurants = await restaurantDicodingFavorite.getAllRestaurants();

      expect(mockDatabase)
        .toThrow();

      expect(restaurants)
        .toStrictEqual([]);
    });
  });

  describe('Get A Favorite Restaurant', () => {
    it('should return a single restaurant correctly', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'get')
        .mockImplementation(() => GetFavoriteRestaurantObjectMock);

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurant = await restaurantDicodingFavorite
        .getRestaurant(GetFavoriteRestaurantObjectMock.id);

      expect(mockDatabase)
        .toBeCalled();

      expect(restaurant)
        .toStrictEqual(GetFavoriteRestaurantObjectMock);
    });
  });
});
