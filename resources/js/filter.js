window.Vue = require('vue')

window.moment = require('moment-timezone')

moment.tz.setDefault('Asia/Dhaka')
Vue.prototype.$moment = moment

Vue.filter('timeformat', function(){
	return moment().format('MMMM Do YYYY h:mm:ss a')
})