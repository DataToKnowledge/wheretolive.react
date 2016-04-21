import { Promise } from 'q';
import f from 'fetchify';

class Api {

  github() {
    const fetch = f(Promise).fetch;
    return fetch('https://api.github.com/users/unicredit');
  }
}

exports.Api = Api;
