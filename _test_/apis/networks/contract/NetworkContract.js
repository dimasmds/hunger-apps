import {
  GetObjectFailedMock,
  GetObjectMock,
  PostObjectFailedMock,
  PostObjectMock,
} from './mock/network-object-mock';
import ExceptionMessages from '../../../../src/scripts/globals/ExceptionMessages';

const itActsAsNetworkModel = (network) => {
  describe('Get Method', () => {
    const {
      targetUrl, headers, expectedResponse,
    } = GetObjectMock;

    it('should return response with get method', async () => {
      const response = await network.get({
        targetUrl,
        headers,
      });

      expect(response)
        .toStrictEqual(expectedResponse);
    });

    it('should throw error when target url empty or white space', async () => {
      await expect(network.get())
        .rejects
        .toThrow(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);
      await expect(network.get({ targetUrl: '       ' }))
        .rejects
        .toThrow(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);
    });

    it('should throw error when failed request', async () => {
      await expect(network.get({
        targetUrl: GetObjectFailedMock.targetUrl,
      }))
        .rejects
        .toThrow(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
    });
  });

  describe('Post Method', () => {
    const {
      targetUrl, headers, expectedResponse,
    } = PostObjectMock;

    it('should return response with post method', async () => {
      const response = await network.post({
        targetUrl,
        headers,
      });

      expect(response)
        .toStrictEqual(expectedResponse);
    });

    it('should throw error when target url empty or white space', async () => {
      await expect(network.post())
        .rejects
        .toThrow(ExceptionMessages.Network.EMPTY_TARGET_URL_ERR);

      await expect(network.post('      '))
        .rejects
        .toThrow((ExceptionMessages.Network.EMPTY_TARGET_URL_ERR));
    });

    it('should throw error when request failed', async () => {
      await expect(network.post({
        targetUrl: PostObjectFailedMock.targetUrl,
      }))
        .rejects
        .toThrow(ExceptionMessages.Network.GENERIC_REQUEST_FAILED_ERR);
    });
  });
};

export default itActsAsNetworkModel;
