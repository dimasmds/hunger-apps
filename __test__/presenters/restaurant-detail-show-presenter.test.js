// Inject Component
import '../../src/scripts/presentations/components/RestaurantDetail';

import FetchNetwork from '../../src/scripts/apis/networks/fetch-network';
import RestaurantDetailShowView
  from '../../src/scripts/presentations/view/restaurant-detail-show-view';
import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import { GetRestaurantObjectMock } from '../sources/mock/response-object-mock';
import ImageUrlGenerator from '../../src/scripts/utils/image-url-generator';
import RestaurantDetailShowPresenter
  from '../../src/scripts/presentations/presenters/restaurant-detail-show-presenter';

describe('Restaurant Detail Show Presenter', () => {
  const network = new FetchNetwork();
  const view = new RestaurantDetailShowView();

  beforeEach(() => {
    document.body.innerHTML = view.getTemplates();
  });

  it('should show detail of restaurant', () => new Promise((done) => {
    const restaurantDicodingApi = new RestaurantDicodingApi(network);
    const mockDicodingApi = jest.spyOn(restaurantDicodingApi, 'getRestaurant')
      .mockImplementation(() => GetRestaurantObjectMock);

    jest.spyOn(ImageUrlGenerator, 'generate')
      .mockImplementation(() => 'some image urls');

    const restaurantDetailShowPresenter = new RestaurantDetailShowPresenter({
      view,
      restaurantDicodingApi,
    });

    restaurantDetailShowPresenter.showRestaurantDetail('01')
      .then(() => {
        expect(mockDicodingApi)
          .toBeCalledWith('01');
      });

    document.querySelector('restaurant-detail')
      .addEventListener('restaurant:updated', () => {
        expect(document.querySelector('restaurant-detail')
          .getRestaurant())
          .toStrictEqual(GetRestaurantObjectMock);
        done();
      });
  }));
});
