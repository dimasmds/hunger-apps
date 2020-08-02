import FetchNetwork from '../../src/scripts/network/fetch-network';
import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import { GetRestaurantObjectMock, GetRestaurantsObjectMock } from './mock/response-object-mock';

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
});
