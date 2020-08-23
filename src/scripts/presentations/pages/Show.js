class Show {
  constructor({ restaurantDicodingShowView, restaurantDicodingShowPresenter }) {
    this._view = restaurantDicodingShowView;
    this._presenter = restaurantDicodingShowPresenter;
  }

  async render() {
    return this._view.getTemplates();
  }

  async afterRender() {
    await this._presenter.showRestaurants();
  }
}

export default Show;
