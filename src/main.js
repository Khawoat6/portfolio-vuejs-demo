import Vue from 'vue'
import App from './App.vue'
import BlogPosts from './BlogPosts.vue';
import Header from './Header.vue';
import Banner from './Banner.vue';
import Projects from './Projects.vue';
import ContactMe from './ContactMe.vue';
import Footer from './Footer.vue';

Vue.component('blog-posts', BlogPosts);
Vue.component('header-section', Header);
Vue.component('banner-section', Banner);
Vue.component('projects-section', Projects);
Vue.component('contact-me-section', ContactMe);
Vue.component('footer-section', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
