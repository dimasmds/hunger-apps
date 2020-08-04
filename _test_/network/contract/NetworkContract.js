import { GetObjectMock, PostObjectMock } from './mock/network-object-mock';

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
        .toThrow('Target url cannot be empty');
      await expect(network.get({ targetUrl: '       ' }))
        .rejects
        .toThrow('Target url cannot be empty');
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
        .toThrow('Target url cannot be empty');

      await expect(network.post('      '))
        .rejects
        .toThrow(('Target url cannot be empty'));
    });
  });
};

export default itActsAsNetworkModel;
