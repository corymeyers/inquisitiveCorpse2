import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,

  fullLocation: Ember.computed('rental.owner', 'rental.type', function() {
    return this.get('rental.type') +  "-"  +'Answered by ' + this.get('rental.owner');
  })

});
