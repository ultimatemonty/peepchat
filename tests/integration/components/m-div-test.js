import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m-div', 'Integration | Component | m div', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{m-div}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#m-div}}
      template block text
    {{/m-div}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
