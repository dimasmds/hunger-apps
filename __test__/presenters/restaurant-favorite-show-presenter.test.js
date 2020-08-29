import '../../src/scripts/presentations/components/RestaurantsContainer';

import 'fake-indexeddb/auto';
import {
  beforeEach, describe, it, jest,
} from '@jest/globals';
import RestaurantFavoriteShowView
  from '../../src/scripts/presentations/view/restaurant-favorite-show-view';
import IdbDatabase from '../../src/scripts/apis/databases/idb-database';
import RestaurantDicodingFavorite from '../../src/scripts/sources/restaurant-dicoding-favorite';
import { GetFavoriteRestaurantsObjectMock } from '../sources/mock/favorites-object-mock';
import ImageUrlGenerator from '../../src/scripts/utils/image-url-generator';
import RestaurantFavoriteShowPresenter
  from '../../src/scripts/presentations/presenters/restaurant-favorite-show-presenter';

describe('Restaurant Favorite Show Presenter', () => {
  const idbDatabase = new IdbDatabase();
  const view = new RestaurantFavoriteShowView();

  beforeEach(() => {
    idbDatabase.createNewObjectStore({ objectStoreConfig: { keyPath: 'id' } });
    document.body.innerHTML = view.getTemplates();
  });

  it('should show all favorite restaurant', () => new Promise((done) => {
    const restaurantDicodingFavorite = new RestaurantDicodingFavorite(idbDatabase);
    const mockIdbDatabase = jest.spyOn(idbDatabase, 'getAll')
      .mockImplementation(() => GetFavoriteRestaurantsObjectMock);

    jest.spyOn(ImageUrlGenerator, 'generate')
      .mockImplementation(() => 'some image urls');

    const restaurantFavoriteShowPresenter = new RestaurantFavoriteShowPresenter({
      view,
      restaurantDicodingFavorite,
    });

    restaurantFavoriteShowPresenter.showFavoriteRestaurants()
      .then(() => {
        expect(mockIdbDatabase)
          .toBeCalled();
      });

    document.querySelector('restaurants-container')
      .addEventListener('restaurants:updated', () => {
        expect(document.querySelector('restaurants-container').getRestaurants().length)
          .toBe(GetFavoriteRestaurantsObjectMock.length);
        done();
      });
  }));
});
