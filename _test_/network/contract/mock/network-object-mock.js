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

export {
  GetObjectMock,
  PostObjectMock,
};
