class RestaurantFavoriteShowView {
  getTemplates() {
    return `
      <section class="restaurants-section">
        <div class="restaurants-section__header">
            <h2>Your Favorite Restaurant</h2>
        </div>
        <restaurants-container></restaurants-container>
      </section>
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
}

export default RestaurantFavoriteShowView;
