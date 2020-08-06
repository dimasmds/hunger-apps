import fetchMock from 'fetch-mock';
import itActsAsNetworkModel from './contract/NetworkContract';
import FetchNetwork from '../../src/scripts/network/fetch-network';
import {
  GetObjectFailedMock,
  GetObjectMock, PostObjectFailedMock,
  PostObjectMock,
} from './contract/mock/network-object-mock';

describe('Fetch Network', () => {
  fetchMock.get(GetObjectMock.targetUrl, GetObjectMock.expectedResponse);
  fetchMock.post(PostObjectMock.targetUrl, PostObjectMock.expectedResponse);
  fetchMock.get(GetObjectFailedMock.targetUrl, GetObjectFailedMock.expectedResponse);
  fetchMock.post(PostObjectFailedMock.targetUrl, PostObjectFailedMock.expectedResponse);

  afterAll(() => {
    fetchMock.reset();
  });

  itActsAsNetworkModel(FetchNetwork);
});
