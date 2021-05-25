import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data(){
    return {
      meetup: null,
      meetupTitle: ''
    }
  },
  watch: {
    meetup: async function (id) {
      let title = await fetch(`https://course-vue.javascript.ru/api/meetups/${id}`).then(response => response.json()).then(data => { return data.title });
      this.meetupTitle = title;
    }
  }
});

app.$mount('app');
