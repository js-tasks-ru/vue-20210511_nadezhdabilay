import { agendaItemIcons, agendaItemDefaultTitles } from './data.js';

const iconPath = `/assets/icons/icon-`;

const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  agendaItemIcons,
  agendaItemDefaultTitles,
  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },
  methods:{
    makeAgendaTitle(item){
      if(item.title === null){
        return agendaItemDefaultTitles[item.type];
      }
      return item.title;
    },
    makeAgendaIcon(item){
      return `${iconPath}${agendaItemIcons[item.type]}.svg`;
    }
  },
  computed: {
    agendaItemModified() {
      const newItem = {
        ...this.agendaItem,
        agendaTitle: this.makeAgendaTitle(this.agendaItem),
        agendaIcon: this.makeAgendaIcon(this.agendaItem)
      }
      return newItem;
    }
  },

  template: `
    <div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItemModified.agendaIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItemModified.agendaTitle }}</h5>
        <p>
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot" v-if="agendaItem.type === 'talk'"></span>
          <span class="meetup-agenda__lang" v-if="agendaItem.type === 'talk'">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description != null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
};

export default MeetupAgendaItem;
