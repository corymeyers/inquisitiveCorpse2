import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rental', {path: '/rental/:rental_id'});
  this.route('city', {path: '/city/:city_id'});
});

export default Router;