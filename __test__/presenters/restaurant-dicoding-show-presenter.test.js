// Inject components
import '../../src/scripts/presentations/components/RestaurantsContainer';

import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import FetchNetwork from '../../src/scripts/apis/networks/fetch-network';
import { GetRestaurantsObjectMock } from '../sources/mock/response-object-mock';
import RestaurantDicodingShowPresenter
  from '../../src/scripts/presentations/presenters/restaurant-dicoding-show-presenter';
import RestaurantDicodingShowView
  from '../../src/scripts/presentations/view/restaurant-dicoding-show-view';
import ImageUrlGenerator from '../../src/scripts/utils/image-url-generator';

describe('Showing all dicoding restaurant', () => {
  const network = new FetchNetwork();
  const view = new RestaurantDicodingShowView();

  beforeEach(() => {
    document.body.innerHTML = view.getTemplates();
  });

  it('should show the rest of restaurants', () => new Promise((done) => {
    const restaurantDicodingApi = new RestaurantDicodingApi(network);
    const mockDicodingApi = jest.spyOn(restaurantDicodingApi, 'getAllRestaurants')
      .mockImplementation(() => GetRestaurantsObjectMock);

    const mockImageGenerator = jest.spyOn(ImageUrlGenerator, 'generate')
      .mockImplementation(() => 'some image urls');

    const mockShowLoading = jest.spyOn(view, 'showLoading');
    const mockHideLoading = jest.spyOn(view, 'hideLoading');
    const mockRenderRestaurant = jest.spyOn(view, 'renderRestaurants');

    const restaurantDicodingShowPresenter = new RestaurantDicodingShowPresenter({
      view,
      restaurantDicodingApi,
    });

    restaurantDicodingShowPresenter.showRestaurants()
      .then(() => {
        expect(mockShowLoading)
          .toBeCalled();
        expect(mockDicodingApi)
          .toBeCalled();
        expect(mockRenderRestaurant)
          .toBeCalledWith(GetRestaurantsObjectMock);
        expect(mockHideLoading)
          .toBeCalled();
        expect(mockImageGenerator)
          .toBeCalled();
      });

    document.querySelector('restaurants-container')
      .addEventListener('restaurants:updated', () => {
        expect(document.querySelector('restaurants-container')
          .getRestaurants().length)
          .toEqual(GetRestaurantsObjectMock.length);
        done();
      });
  }));

  it('should show error view when restaurants empty', () => new Promise((done) => {
    const restaurantDicodingApi = new RestaurantDicodingApi(network);
    const mockDicodingApi = jest.spyOn(restaurantDicodingApi, 'getAllRestaurants')
      .mockImplementation(() => ([]));

    const mockShowLoading = jest.spyOn(view, 'showLoading');
    const mockHideLoading = jest.spyOn(view, 'hideLoading');
    const mockRenderError = jest.spyOn(view, 'renderError');

    const restaurantDicodingShowPresenter = new RestaurantDicodingShowPresenter({
      view,
      restaurantDicodingApi,
    });

    restaurantDicodingShowPresenter.showRestaurants()
      .then(() => {
        expect(mockShowLoading)
          .toBeCalled();
        expect(mockDicodingApi)
          .toBeCalled();
        expect(mockRenderError)
          .toBeCalled();
        expect(mockHideLoading)
          .toBeCalled();
      });

    document.querySelector('restaurants-container')
      .addEventListener('restaurants:not-found', () => {
        done();
      });
  }));
});
