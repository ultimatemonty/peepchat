import Ember from 'ember';

const { inject, Route } = Ember;
const { service } = inject;

export default Route.extend({
  flashMessages: service(),

  actions: {
    doRegister() {
      const flashMessages = this.get('flashMessages');
      this.get('currentModel').save()
        .then(() => {
          this.transitionTo('auth.login');
          flashMessages.success('Registered! Please login.');
        }).catch((response) => {
          const { errors } = response;
          flashMessages.danger(errors.mapBy('detail').join(', '));
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
