import service from './service.js';

const endpoint = '/summary';

export default { 
  getSummary: () => {
    return service.get(`${endpoint}`);
  }
}