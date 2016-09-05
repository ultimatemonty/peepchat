import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('m-nav', 'Integration | Component | m nav', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#m-nav}}
      template block text
    {{/m-nav}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'menutemplateblocktext');
});
