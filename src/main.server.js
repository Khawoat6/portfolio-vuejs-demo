import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Header from './Header.vue';
import Banner from './Banner.vue';
import Projects from './Projects.vue';
import ContactMe from './ContactMe.vue';
import Footer from './Footer.vue';

Vue.use(VueResource);

Vue.component('header-section', Header);
Vue.component('banner-section', Banner);
Vue.component('projects-section', Projects);
Vue.component('contact-me-section', ContactMe);
Vue.component('footer-section', Footer);

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
  return Promise.resolve(
    new Vue({
      render: h => h(App)
    })
  );
}