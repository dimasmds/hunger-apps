import fetchMock from 'fetch-mock';
import itActsAsNetworkModel from './contract/NetworkContract';
import FetchNetwork from '../../src/scripts/network/fetch-network';
import {
  GetObjectMock,
  PostObjectMock,
} from './contract/mock/network-object-mock';

describe('Fetch Network', () => {
  fetchMock.get(GetObjectMock.targetUrl, GetObjectMock.expectedResponse);
  fetchMock.post(PostObjectMock.targetUrl, PostObjectMock.expectedResponse);

  afterAll(() => {
    fetchMock.reset();
  });

  itActsAsNetworkModel(FetchNetwork);
});
