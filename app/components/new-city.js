import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    update(city, params) {
      this.sendAction('update', city, params);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        country: this.get('country')
      };
      this.set('addNewCity', false);
      this.sendAction('saveCity', params);
    }
  }
});
