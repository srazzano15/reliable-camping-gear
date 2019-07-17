/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue)


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/**
 * Layout Components
 */
Vue.component('vue-footer', require('./components/layout/VueFooter.vue').default)
Vue.component('jumbotron', require('./components/layout/Jumbotron.vue').default)
Vue.component('navigation-bar', require('./components/layout/Navbar.vue').default)
Vue.component('partners', require('./components/layout/Partners.vue').default)
Vue.component('news-events', require('./components/layout/NewsEvents.vue').default)


/**
 * Page Views
 */
Vue.component('home-page', require('./components/pages/HomePage.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
