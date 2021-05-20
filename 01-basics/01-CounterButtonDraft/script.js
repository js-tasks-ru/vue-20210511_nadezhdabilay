import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data(){
    return {
      counter: 0
    }
  },
  methods: {
      plus() {
      return this.counter++;
    }
  }
});

app.$mount('app');

