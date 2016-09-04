import Ember from 'ember';

const { inject, Route } = Ember;
const { service } = inject;

export default Route.extend({
  flashMessages: service(),
  session: service(),

  model() {
    return {
      email: '',
      password: ''
    };
  },

  actions: {
    doLogin() {
      const flashMessages = this.get('flashMessages');
      const user = this.get('currentModel');

      this.get('session').authenticate(
        'authenticator:peepchat',
        user.email,
        user.password
      ).then(() => {
        flashMessages.success('Logged in!');
      }).catch((response) => {
        const { errors } = response;

        if (errors.mapBy('code').indexOf(401) >= 0) {
          flashMessages.danger('There was a problem with your username or password, please try again');
        } else {
          flashMessages.danger('Server Error');
        }
      });
    }
  }
});
