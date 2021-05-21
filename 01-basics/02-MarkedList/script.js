import Vue from './vendor/vue.esm.browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];
<<<<<<< HEAD

const app = new Vue({
  el: '#app',
  data(){
    return {
      emails,
      searchedEmail: null,
    }
  },
  computed: {
    markedEmails(){
        emails.filter((item, index) => {
          if(this.searchedEmail != null && item.includes(this.searchedEmail)){
            console.log(item);
            return item;
          }
          return false;
        })
      }
  }
});

app.$mount('app');
=======
>>>>>>> 2296fb6cd3d5c0d33240f2815247077dbfe7d1ef

new Vue({
  data() {
    return {
      marker: '',
      emails,
    };
  },

  computed: {
    markedEmails() {
      return this.emails.map((email) => ({
        email,
        marked: Boolean(this.marker) && email.includes(this.marker),
      }));
    },
  },
}).$mount('#app');
