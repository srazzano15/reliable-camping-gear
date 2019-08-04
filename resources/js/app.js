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
Vue.component('home-carousel', require('./components/layout/HomeCarousel.vue').default)
Vue.component('testimonials', require('./components/layout/Testimonials.vue').default)
Vue.component('products', require('./components/layout/Products.vue').default)
Vue.component('rcg-team', require('./components/layout/RcgTeam.vue').default)
Vue.component('contact-us', require('./components/layout/ContactUs.vue').default)

/**
 * Product Modals
 */
Vue.component('mat-weight-modal', require('./components/layout/product_modals/MatWeightModal.vue').default)

/**
 * Page Views
 */
Vue.component('home-page', require('./components/pages/HomePage.vue').default)
Vue.component('testimonial-page', require('./components/pages/TestimonialPage.vue').default)
Vue.component('about-us', require('./components/pages/AboutUs.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
