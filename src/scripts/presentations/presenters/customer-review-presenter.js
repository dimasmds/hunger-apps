class CustomerReviewPresenter {
  constructor({ view, restaurantDicodingApi }) {
    this._view = view;
    this._restaurantDicodinApi = restaurantDicodingApi;
  }

  async postReview(review) {
    try {
      const response = await this._restaurantDicodinApi.postReview(review);
      this._view.reviewPosted(response.customerReviews);
    } catch (error) {
      this._view.renderError();
    }
  }
}

export default CustomerReviewPresenter;
