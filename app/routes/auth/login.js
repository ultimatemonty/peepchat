import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      email: '',
      password: ''
    };
  },
  actions: {
    doLogin() {
      alert('login attempted');
    }
  }
});
