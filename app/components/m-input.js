import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['input-field'],
  label: null,
  type: 'text',
  value: null,

  _errorMessages: computed('errors.[]', function() {
    return (this.get('errors') || []).join(',');
  })
});
