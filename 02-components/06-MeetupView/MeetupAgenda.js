import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',
  props: {
    agenda: {
      type: Array
    }
  },
  MeetupAgendaItem,
  agenda: null,
  components: {
    MeetupAgendaItem
  },
  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="item in agenda" :agendaItem="item"/>
    </div>`,
};

export default MeetupAgenda;
