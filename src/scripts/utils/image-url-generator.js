import AppConfig from '../globals/app-config';

const generateImageUrl = (id, quality = AppConfig.imageQuality.MEDIUM) => {
  if (!id) throw new Error('Parameter should be an id of restaurant');
  if ((typeof id) !== 'string' || (typeof quality) !== 'string') throw new Error('Parameter should be string');
  return `${AppConfig.BASE_IMAGE_URL}/${quality}/${id}`;
};

export default generateImageUrl;
