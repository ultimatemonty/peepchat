import Ember from 'ember';
import config from '../config/environment';
import fetch from 'ember-network/fetch';

const { Route, inject } = Ember;
const { service } = inject;

export default Route.extend({
  session: service(),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },

  afterModel() {
    return fetch(`${config.DS.host}/${config.DS.namespace}/user/current`, {
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${this.get('session').get('session.content.authenticated.access_token')}`
      }
    }).then(raw => {
      return raw.json().then(data => {
        const currentUser = this.store.push(data);
        this.set('session.currentUser', currentUser);
      });
    });
  }
});
