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
      <div v-for="item in agenda">
        <meetup-agenda-item :agendaItem="item"/>
      </div>
    </div>`,
};

export default MeetupAgenda;
