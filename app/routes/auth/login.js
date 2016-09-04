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
      const user = this.get('currentModel');
      this.get('session').authenticate('authenticator:peepchat', user.email, user.password);
    }
  }
});
