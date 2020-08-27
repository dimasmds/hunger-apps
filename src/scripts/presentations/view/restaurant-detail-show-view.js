class RestaurantDetailShowView {
  getTemplates() {
    return '<restaurant-detail></restaurant-detail>';
  }

  showDetailRestaurant(restaurant) {
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.setRestaurant(restaurant);
  }

  renderError() {
    // TODO
  }
}

export default RestaurantDetailShowView;
