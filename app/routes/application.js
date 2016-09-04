import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { inject, Route } = Ember;
const { service } = inject;

export default Route.extend(ApplicationRouteMixin, {
  flashMessages: service(),

  actions: {
    logout() {
      this.get('session').invalidate();
      this.get('flashMessages').success('Logged out');
    }
  }
});
