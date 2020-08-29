const GetRestaurantsObjectMock = [
  {
    id: 'loremipsum',
    name: 'restaurant a',
  },
  {
    id: 'dolorsitamet',
    name: 'restaurant b',
  },
];

const GetRestaurantObjectMock = {
  id: '01',
  name: 'Lorem ipsum dolor sit amet',
  description: 'This is some description',
  categories: [],
  customerReviews: [],
};

const PostReviewResponseObjectMock = {
  error: false,
  message: 'success',
  customerReviews: [
    {
      name: 'Dimas Maulana',
      review: 'Makanannya mantap pool!',
    },
  ],
};

export { GetRestaurantObjectMock, GetRestaurantsObjectMock, PostReviewResponseObjectMock };
