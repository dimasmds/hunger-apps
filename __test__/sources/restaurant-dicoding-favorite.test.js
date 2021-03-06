import { describe, it } from '@jest/globals';
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

    it('should return an empty object if id not set', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'get')
        .mockImplementation(() => {
          throw new Error('Please specify key to get a single data');
        });

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurant = await restaurantDicodingFavorite.getRestaurant();

      expect(mockDatabase)
        .toThrow('Please specify key to get a single data');

      expect(restaurant)
        .toStrictEqual({});
    });

    it('should return an empty object if database failed to process', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'get')
        .mockImplementation(() => {
          throw new Error('Failed to process transaction');
        });

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      const restaurant = await restaurantDicodingFavorite.getRestaurant('someId');

      expect(mockDatabase)
        .toThrow('Failed to process transaction');

      expect(restaurant)
        .toStrictEqual({});
    });
  });

  describe('Put a Favorite Restaurant', () => {
    it('should put a favorite restaurant correctly', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'put')
        .mockImplementation();

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
      await restaurantDicodingFavorite.putRestaurant(GetFavoriteRestaurantObjectMock);

      expect(mockDatabase)
        .toBeCalledWith({ value: GetFavoriteRestaurantObjectMock });
    });

    it('should throw error when failed to put to database', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'put')
        .mockImplementation(() => {
          throw new Error('Value not meet specification');
        });

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);

      await expect(restaurantDicodingFavorite.putRestaurant({
        ...GetFavoriteRestaurantObjectMock,
        id: undefined,
      }))
        .rejects
        .toThrow();

      expect(mockDatabase)
        .toThrow('Value not meet specification');
    });
  });

  describe('Delete favorite restaurant', () => {
    it('should delete restaurant from database correctly', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'delete')
        .mockImplementation();

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);

      await restaurantDicodingFavorite.deleteRestaurant('01');

      expect(mockDatabase)
        .toBeCalledWith({ key: '01' });
    });

    it('should throw error when id not set', async () => {
      const idbDatabase = new IdbDatabase();
      const mockDatabase = jest.spyOn(idbDatabase, 'delete')
        .mockImplementation(() => {
          throw new Error('Please specify key to delete a single data');
        });

      const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);

      await expect(restaurantDicodingFavorite.deleteRestaurant())
        .rejects
        .toThrow();

      expect(mockDatabase)
        .toThrow('Please specify key to delete a single data');
    });
  });
});
