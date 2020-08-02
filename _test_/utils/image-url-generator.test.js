import generateImageUrl from '../../src/scripts/utils/image-url-generator';
import AppConfig from '../../src/scripts/globals/app-config';

describe('Image Url Generator', () => {
  it('should throw error when id is falsy', () => {
    expect(() => {
      generateImageUrl();
    })
      .toThrowError('Parameter should be an id of restaurant');

    expect(() => {
      generateImageUrl(null);
    })
      .toThrowError('Parameter should be an id of restaurant');

    expect(() => {
      generateImageUrl(0);
    })
      .toThrowError('Parameter should be an id of restaurant');

    expect(() => {
      generateImageUrl(false);
    })
      .toThrowError('Parameter should be an id of restaurant');
  });

  it('should throw error when id is not string', () => {
    expect(() => {
      generateImageUrl(1);
    })
      .toThrowError('Parameter should be string');

    expect(() => {
      generateImageUrl(true);
    })
      .toThrowError('Parameter should be string');

    expect(() => {
      generateImageUrl('01', true);
    })
      .toThrowError('Parameter should be string');
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
