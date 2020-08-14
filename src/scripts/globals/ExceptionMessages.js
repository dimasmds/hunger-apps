const ExceptionMessages = {
  Apis: {
    Network: {
      EMPTY_TARGET_URL_ERR: 'Target url cannot be empty',
      GENERIC_REQUEST_FAILED_ERR: 'Failed to execute request. Try again.',
    },
    Database: {
      EMPTY_KEY_PARAMETER_GET_ERR: 'Please specify key to get a single data',
      EMPTY_KEY_PARAMETER_DELETE_ERR: 'Please specify key to delete a single data',

    },
  },
  Utils: {
    ImageUrlGenerator: {
      INVALID_PARAMETER_ID_ERR: 'Parameter should be an id of restaurant',
      INVALID_TYPE_OF_PARAMETER_ID_ERR: 'Parameter should be string',
    },
  },
};

export default ExceptionMessages;
