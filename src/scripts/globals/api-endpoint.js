import AppConfig from './app-config';

const Endpoint = {
  getAllRestaurants: () => `${AppConfig.BASE_API_URL}/list`,
  getRestaurant: (id) => `${AppConfig.BASE_API_URL}/detail/${id}`,
  postCustomerReview: () => `${AppConfig.BASE_API_URL}/review`,
};

export default Endpoint;
