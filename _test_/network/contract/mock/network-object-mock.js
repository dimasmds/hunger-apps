const GetObjectMock = {
  targetUrl: 'https://dummy-url.com',
  headers: {},
  options: {},
  expectedResponse: {
    data: 'Hello World!',
  },
};

const PostObjectMock = {
  targetUrl: 'https://dummy-url.com/post',
  headers: {
    body: {
      data: 'Hello World',
    },
  },
  options: {},
  expectedResponse: {
    data: 'Hello World',
  },
};

const GetObjectFailedMock = {
  targetUrl: 'https://dummy-url.com/getFailed',
  headers: {},
  options: {},
  expectedResponse: {},
};

export {
  GetObjectMock,
  PostObjectMock,
  GetObjectFailedMock,
};
