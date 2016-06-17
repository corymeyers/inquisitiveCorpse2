import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  shoppingCart: Ember.inject.service(),
  fullLocation: Ember.computed('rental.owner', 'rental.type', function() {
    return this.get('rental.type') +  "-"  +'Answered by ' + this.get('rental.owner');
  }),

  actions: {
   addToCart(item) {
     this.get('shoppingCart').add(item);
   },
}
});
