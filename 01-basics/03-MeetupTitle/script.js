import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data(){
    return {
      meetup: {}
    }
  },
  methods:{
    async onChecked(){
      let title = await fetch(`https://course-vue.javascript.ru/api/meetups/${this.meetup.id}`).then(response => response.json()).then(data => { return data.title });
      this.meetup.title = title;
    }
  }
});

app.$mount('app');

// Требуется создать Vue приложение
