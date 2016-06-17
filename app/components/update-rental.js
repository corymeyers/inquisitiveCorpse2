import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },

    update(rental) {
      var ownerFromForm;
      if (typeof this.get('owner') !== "undefined") { //if the owner exists
        ownerFromForm = this.get('owner');
      } else {
        ownerFromForm = "";
      }
      var cityFromForm;
      if (typeof this.get('city') !== "undefined") {
        cityFromForm = this.get('city');
      } else {
        cityFromForm = "";
      }
      var typeFromForm;
      if (typeof this.get('type') !== "undefined") {
        typeFromForm = this.get('type');
      } else {
        typeFromForm = "";
      }

      var params = {
        owner: ownerFromForm,
        city: cityFromForm,
        type: typeFromForm,
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
