import Api from './api';

const RatingService = {
  create: (store, rating) => Api.post('/ratings', { store: store, rating: rating} ),
}

export default RatingService;