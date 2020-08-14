const ExceptionMessages = {
  Apis: {
    Network: {
      EMPTY_TARGET_URL_ERR: 'Target url cannot be empty',
      GENERIC_REQUEST_FAILED_ERR: 'Failed to execute request. Try again.',
    },
    Database: {
      EMPTY_KEY_PARAMETER_GET_ERR: 'Please specify key to get a single data',
      EMPTY_KEY_PARAMETER_DELETE_ERR: 'Please specify key to delete a single data',
      INVALID_VALUE_SPECIFICATION_WITH_ERR: (error) => `Value not meet specification to put to database see: ${error}`,
      GENERIC_GET_WITH_ERR: (error) => `Failed to get single data, see: ${error}`,
      GENERIC_GET_ALL_WITH_ERR: (error) => `Failed to get all data, see: ${error}`,
      GENERIC_DELETE_WITH_ERR: (error) => `Failed to delete single data, see: ${error}`,

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
