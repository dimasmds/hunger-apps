import FetchNetwork from '../../src/scripts/apis/networks/fetch-network';
import RestaurantDicodingApi from '../../src/scripts/sources/restaurant-dicoding-api';
import { PostReviewResponseObjectMock } from '../sources/mock/response-object-mock';
import CustomerReviewPresenter
  from '../../src/scripts/presentations/presenters/customer-review-presenter';

describe('Customer Review Presenter', () => {
  const view = {
    reviewPosted() {
      // Mock Implementation
    },
  };

  const network = FetchNetwork;

  it('should post review correctly', async () => {
    const restaurantDicodingApi = new RestaurantDicodingApi(network);
    const mockReviewPosted = jest.spyOn(view, 'reviewPosted');
    const mockPostReview = jest.spyOn(restaurantDicodingApi, 'postReview')
      .mockImplementation(() => PostReviewResponseObjectMock);

    const customerReviewPresenter = new CustomerReviewPresenter({
      view,
      restaurantDicodingApi,
    });

    await customerReviewPresenter.postReview({
      id: 'some id',
      name: 'Dimas Maulana',
      review: 'Makanannya mantap pool!',
    });

    expect(mockPostReview)
      .toBeCalledWith({
        id: 'some id',
        name: 'Dimas Maulana',
        review: 'Makanannya mantap pool!',
      });

    expect(mockReviewPosted)
      .toBeCalledWith([
        {
          name: 'Dimas Maulana',
          review: 'Makanannya mantap pool!',
        },
      ]);
  });
});
