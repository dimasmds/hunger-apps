class RestaurantDicodingShowView {
  getTemplates() {
    return `
      <div id="preloader"></div>
      <div id="restaurants" class="restaurant-list">
      </div>
    `;
  }

  renderRestaurants(restaurants = []) {
    let html = '';

    restaurants.forEach((restaurant) => {
      html += `<div class="restaurant-item">${restaurant}</div>`;
    });

    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = html;
    restaurantsContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  renderError(message = 'Failed to show restaurants, please try again!') {
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = `<p class="restaurants-not-found">${message}</p>`;
    restaurantsContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  showLoading() {
    // TODO
  }

  hideLoading() {
    // TODO
  }
}

export default RestaurantDicodingShowView;
