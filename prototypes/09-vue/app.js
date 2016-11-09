// app
var app = new Vue({
	el: '#app',
		data: {
    		message: 'Hello Vue!'
  		}
});


// app-7
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo/thing.
  props: ['thing'],
  template: '<li>{{ thing.text }}</li>'
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    test: 'awesome sauce'
  }
});

Vue.component('module', {
	props: ['msg', 'title'],
	template: '#module'
});

Vue.component('module-title', {
	props: ['title'],
	template: '#module-title'
});

var sidebar = new Vue({
	el: '#sidebar',
	data: {
		title: 'module title',
		content: 'this goes inside module'
	}
});