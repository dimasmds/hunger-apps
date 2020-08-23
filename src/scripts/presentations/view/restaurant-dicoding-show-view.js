class RestaurantDicodingShowView {
  getTemplates() {
    return `
      <pre-loader></pre-loader>
      <restaurants-container></restaurants-container>
    `;
  }

  renderRestaurants(restaurants = []) {
    const restaurantContainer = document.querySelector('restaurants-container');
    restaurantContainer.setRestaurants(restaurants);
  }

  renderError(message = 'Failed to show restaurants, please try again!') {
    const restaurantsContainer = document.querySelector('restaurants-container');
    restaurantsContainer.renderError(message);
  }

  showLoading() {
    const preLoaderElement = document.querySelector('pre-loader');
    preLoaderElement.style.display = 'block';
  }

  hideLoading() {
    const preLoaderElement = document.querySelector('pre-loader');
    preLoaderElement.style.display = 'none';
  }
}

export default RestaurantDicodingShowView;
