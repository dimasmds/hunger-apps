import FetchNetwork from '../../src/scripts/network/fetch-network';
import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import { GetRestaurantObjectMock, GetRestaurantsObjectMock } from './mock/response-object-mock';
import ExceptionMessages from '../../src/scripts/globals/ExceptionMessages';

describe('Restaurant Dicoding API', () => {
  it('should return all restaurants', async () => {
    const mockNetwork = jest.spyOn(FetchNetwork, 'get')
      .mockImplementation(() => ({
        restaurants: GetRestaurantsObjectMock,
      }));

    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const restaurants = await restaurantDicodingApi.getAllRestaurants();

    expect(mockNetwork)
      .toBeCalled();
    expect(restaurants)
      .toStrictEqual(GetRestaurantsObjectMock);

    mockNetwork.mockClear();
  });

  it('should return detail of selected restaurant', async () => {
    const mockNetwork = jest.spyOn(FetchNetwork, 'get')
      .mockImplementation(() => ({
        restaurant: GetRestaurantObjectMock,
      }));

    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const restaurant = await restaurantDicodingApi.getRestaurant('01');
    expect(mockNetwork)
      .toBeCalled();
    expect(restaurant)
      .toStrictEqual(GetRestaurantObjectMock);
  });

  it('should return empty array when request failed', async () => {
    const mockNetwork = jest.spyOn(FetchNetwork, 'get')
      .mockImplementation(() => {
        throw new Error(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
      });

    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const restaurants = await restaurantDicodingApi.getAllRestaurants();
    expect(mockNetwork)
      .toBeCalled();
    expect(restaurants)
      .toStrictEqual([]);
  });

  it('should return empty object when request failed', async () => {
    const mockNetwork = jest.spyOn(FetchNetwork, 'get')
      .mockImplementation(() => {
        throw new Error(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
      });

    const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
    const restaurant = await restaurantDicodingApi.getRestaurant(1);
    expect(mockNetwork)
      .toBeCalled();
    expect(restaurant)
      .toStrictEqual({});
  });
});
