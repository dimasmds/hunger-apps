import generateImageUrl from '../../src/scripts/utils/image-url-generator';
import AppConfig from '../../src/scripts/globals/app-config';
import ExceptionMessages from '../../src/scripts/globals/ExceptionMessages';

describe('Image Url Generator', () => {
  it('should throw error when id is falsy', () => {
    expect(() => {
      generateImageUrl();
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      generateImageUrl(null);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      generateImageUrl(0);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      generateImageUrl(false);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);
  });

  it('should throw error when id is not string', () => {
    expect(() => {
      generateImageUrl(1);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);

    expect(() => {
      generateImageUrl(true);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);

    expect(() => {
      generateImageUrl('01', true);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);
  });

  it('should return actual image url', () => {
    const expectedId = '01';
    const expectedQuality = AppConfig.imageQuality.MEDIUM;

    expect(typeof generateImageUrl(expectedId, expectedQuality))
      .toBe('string');
    expect(generateImageUrl(expectedId, expectedQuality))
      .toEqual(expect.stringContaining(AppConfig.BASE_IMAGE_URL));
    expect(generateImageUrl(expectedId, expectedQuality))
      .toEqual(expect.stringContaining('01'));
    expect(generateImageUrl(expectedId, expectedQuality))
      .toEqual(expect.stringContaining(AppConfig.imageQuality.MEDIUM));
  });

  it('should return medium quality image url if only one parameter passed', () => {
    const expectedId = '01';

    expect(typeof generateImageUrl(expectedId))
      .toBe('string');
    expect(generateImageUrl(expectedId))
      .toEqual(expect.stringContaining(AppConfig.BASE_IMAGE_URL));
    expect(generateImageUrl(expectedId))
      .toEqual(expect.stringContaining('01'));
    expect(generateImageUrl(expectedId))
      .toEqual(expect.stringContaining(AppConfig.imageQuality.MEDIUM));
  });
});
