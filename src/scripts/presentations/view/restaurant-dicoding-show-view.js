/* eslint-disable class-methods-use-this */

class RestaurantDicodingShowView {
  getTemplates() {
    return `
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
}

export default RestaurantDicodingShowView;
