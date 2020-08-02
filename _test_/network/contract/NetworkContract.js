import { GetObjectMock, PostObjectMock } from './mock/network-object-mock';

const itActsAsNetworkModel = (network) => {
  it('should return response with get method', async () => {
    const {
      targetUrl, headers, expectedResponse,
    } = GetObjectMock;

    const response = await network.get({
      targetUrl,
      headers,
    });

    expect(response)
      .toStrictEqual(expectedResponse);
  });

  it('should return response with post method', async () => {
    const {
      targetUrl, headers, expectedResponse,
    } = PostObjectMock;

    const response = await network.post({
      targetUrl,
      headers,
    });

    expect(response)
      .toStrictEqual(expectedResponse);
  });
};

export default itActsAsNetworkModel;
