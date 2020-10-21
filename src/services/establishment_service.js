import Api from './api';

const EstablishmentsService = {
  index: (latitude, longitude) => Api.get(`/google_stores?latitude=${latitude}&longitude=${longitude}`),
  show: (place_id) => Api.get(`/google_stores/${place_id}`)
}

export default EstablishmentsService;