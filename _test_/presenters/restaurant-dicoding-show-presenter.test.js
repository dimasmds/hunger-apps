import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import FetchNetwork from '../../src/scripts/apis/networks/fetch-network';
import { GetRestaurantsObjectMock } from '../sources/mock/response-object-mock';
import RestaurantDicodingShowPresenter
  from '../../src/scripts/presenters/restaurant-dicoding-show-presenter';

describe('Showing all dicoding restaurant', () => {
  const network = new FetchNetwork();

  it('should show the rest of restaurants', () => new Promise((done) => {
    const restaurantDicodingApi = new RestaurantDicodingApi(network);
    const mockDicodingApi = jest.spyOn(restaurantDicodingApi, 'getAllRestaurants')
      .mockImplementation(() => ({
        restaurants: GetRestaurantsObjectMock,
      }));

    const restaurantDicodingShowPresenter = new RestaurantDicodingShowPresenter({
      view: RestaurantDicodingShowView,
      restaurantDicodingApi,
    });

    restaurantDicodingShowPresenter.showRestaurants();

    expect(mockDicodingApi)
      .toBeCalled();

    document.querySelector('#restaurants')
      .addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length)
          .toEqual(GetRestaurantsObjectMock.length);
        done();
      });
  }));
});
