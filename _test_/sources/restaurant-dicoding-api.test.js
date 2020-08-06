import FetchNetwork from '../../src/scripts/network/fetch-network';
import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import {
  GetRestaurantObjectMock,
  GetRestaurantsObjectMock,
  PostReviewResponseObjectMock,
} from './mock/response-object-mock';
import ExceptionMessages from '../../src/scripts/globals/ExceptionMessages';

describe('Restaurant Dicoding API', () => {
  describe('Get All Restaurants', () => {
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
  });

  describe('Get Restaurant', () => {
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

  describe('Post a Review', () => {
    it('should post a review and get response properly', async () => {
      const mockNetwork = jest.spyOn(FetchNetwork, 'post')
        .mockImplementation(() => PostReviewResponseObjectMock);

      const restaurantDicodingApi = new RestaurantDicodingApi(FetchNetwork);
      const response = await restaurantDicodingApi.postReview({
        idRestaurant: '3',
        name: PostReviewResponseObjectMock.customerReviews[0].name,
        review: PostReviewResponseObjectMock.customerReviews[0].review,
      });

      expect(mockNetwork)
        .toBeCalled();
      expect(response)
        .toStrictEqual(PostReviewResponseObjectMock);
    });
  });
});
