import ImageUrlGenerator from '../../src/scripts/utils/image-url-generator';
import AppConfig from '../../src/scripts/globals/app-config';
import ExceptionMessages from '../../src/scripts/globals/ExceptionMessages';

describe('Image Url Generator', () => {
  it('should throw error when id is falsy', () => {
    expect(() => {
      ImageUrlGenerator.generate();
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      ImageUrlGenerator.generate(null);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      ImageUrlGenerator.generate(0);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);

    expect(() => {
      ImageUrlGenerator.generate(false);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_PARAMETER_ID_ERR);
  });

  it('should throw error when id is not string', () => {
    expect(() => {
      ImageUrlGenerator.generate(1);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);

    expect(() => {
      ImageUrlGenerator.generate(true);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);

    expect(() => {
      ImageUrlGenerator.generate('01', true);
    })
      .toThrowError(ExceptionMessages.Utils.ImageUrlGenerator.INVALID_TYPE_OF_PARAMETER_ID_ERR);
  });

  it('should return actual image url', () => {
    const expectedId = '01';
    const expectedQuality = AppConfig.imageQuality.MEDIUM;

    expect(typeof ImageUrlGenerator.generate(expectedId, expectedQuality))
      .toBe('string');
    expect(ImageUrlGenerator.generate(expectedId, expectedQuality))
      .toEqual(expect.stringContaining(AppConfig.BASE_IMAGE_URL));
    expect(ImageUrlGenerator.generate(expectedId, expectedQuality))
      .toEqual(expect.stringContaining('01'));
    expect(ImageUrlGenerator.generate(expectedId, expectedQuality))
      .toEqual(expect.stringContaining(AppConfig.imageQuality.MEDIUM));
  });

  it('should return medium quality image url if only one parameter passed', () => {
    const expectedId = '01';

    expect(typeof ImageUrlGenerator.generate(expectedId))
      .toBe('string');
    expect(ImageUrlGenerator.generate(expectedId))
      .toEqual(expect.stringContaining(AppConfig.BASE_IMAGE_URL));
    expect(ImageUrlGenerator.generate(expectedId))
      .toEqual(expect.stringContaining('01'));
    expect(ImageUrlGenerator.generate(expectedId))
      .toEqual(expect.stringContaining(AppConfig.imageQuality.MEDIUM));
  });
});
