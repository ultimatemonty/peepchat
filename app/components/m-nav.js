import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['navbar-fixed', 'm-nav'],

  didInsertElement() {
    this._super(...arguments);

    this.$('a.button-collapse').attr('data-activates', this.get('_sideNavId'));

    this.$('.button-collapse').sideNav({
      closeOnClick: true
    });

    this.$('.dropdown-button').dropdown();
  },

  _setupChildComponent(childComponent) {
    if (childComponent.classNames.indexOf('side-nav') >= 0) {
      this.set('_sideNavId', childComponent.elementId);
    }
  }
});
