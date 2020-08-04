import AppConfig from '../globals/app-config';
import ExceptionMessages from '../globals/ExceptionMessages';

const generateImageUrl = (id, quality = AppConfig.imageQuality.MEDIUM) => {
  if (!id) throw new Error(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);
  if ((typeof id) !== 'string' || (typeof quality) !== 'string') throw new Error(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);
  return `${AppConfig.BASE_IMAGE_URL}/${quality}/${id}`;
};

export default generateImageUrl;
