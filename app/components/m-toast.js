import Ember from 'ember';

const { Component, computed, getWithDefault, run } = Ember;
const { readOnly } = computed;
const { next, cancel } = run;

export default Component.extend({
  classNames: ['material-toast', 'toast'],
  classNameBindings: ['active', 'exiting', 'color'],
  active: false,
  color: computed('content.type', function() {
    switch(this.get('content.type')) {
      case 'danger':
        return 'red darken-2 white-text';
      case 'warning':
        return 'yellow lighten-1 black-text';
      default:
        return '';
    }
  }),
  exiting: readOnly('content.exiting'),

  _destroyFlashMessage() {
    const flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  },

  didInsertElement() {
    this._super(...arguments);

    this._applyActiveClass = next(() => {
      this.set('active', true);
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this._destroyFlashMessage();
    if (this._applyActiveClass) {
      cancel(this._applyActiveClass);
    }
  }
});
