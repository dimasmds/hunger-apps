class DetailPage {
  constructor({ restaurantDetailShowView }) {
    this._view = restaurantDetailShowView;
  }

  async render() {
    return this._view.getTemplates();
  }

  async afterRender() {
    // TODO
  }
}

export default DetailPage;
