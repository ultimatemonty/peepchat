import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  init() {
    this._super(...arguments);
      const parentComponent = this.get('_parentComponent');
      if (parentComponent && parentComponent._setupChildComponent) {
        parentComponent._setupChildComponent(this);
      }
  }
});
