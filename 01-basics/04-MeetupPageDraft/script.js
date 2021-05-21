import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 1;

const iconPath = `/assets/icons/icon-`;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

const fetchMeetup = () => fetch(`${API_URL}/meetups/${MEETUP_ID}`).then(response => response.json());

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

// Требуется создать Vue приложение

const app = new Vue({
  el: '#app',
  data(){
    return {
      meetup: {},
      rawMeetup: null
    }
  },
  methods:{
    setAgendaTitle(agendaItem){
        for (let key of Object.keys(agendaItemDefaultTitles)) {
          if(agendaItem.type == key){
            return agendaItemDefaultTitles[key];
          }
        }
    },
    setAgendaIcon(agendaItem){
      for (let key of Object.keys(agendaItemIcons)) {
        if(agendaItem.type == key){
          return `${iconPath}${agendaItemIcons[key]}.svg`;
        }
      }
    },
    makeData(date){
      return new Date(date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    setBackgroundImg(imgId){
      return getImageUrlByImageId(imgId);
    }
  },
  computed:{
  },
  async mounted(){
    await fetchMeetup().then(meetup => {
      this.rawMeetup = meetup;
    })
  }
});

app.$mount('app');
