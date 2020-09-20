class RestaurantDetailShowView {
  getTemplates() {
    import('../components/RestaurantDetail');
    return '<restaurant-detail></restaurant-detail>';
  }

  renderDetailRestaurant(restaurant) {
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.setRestaurant(restaurant);
  }

  renderError(message = 'Failed to show restaurants, please try again!') {
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.renderError(message);
  }
}

export default RestaurantDetailShowView;
