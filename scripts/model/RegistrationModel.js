/**
 * Created by smanoharan on 18/05/2017.
 */
import Backbone from 'backbone';

export default Backbone.Model.extend({

	defaults: {
		email: '',
    username: '',
    mobile: '',
    password: '',
    firstName: '',
    lastName: ''
	}

})

