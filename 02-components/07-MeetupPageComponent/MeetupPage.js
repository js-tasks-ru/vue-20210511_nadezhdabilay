import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',
  data(){
    return {
      rawMeetup: null
    }
  },
  components:{
    MeetupView
  },

  async mounted(){
    await fetchMeetup(MEETUP_ID).then(meetup => {
      this.rawMeetup = meetup;
    })
  },

  template: `<div>
      <meetup-view v-if="rawMeetup !== null" :meetup="rawMeetup"/>
    </div>`,
};

export default MeetupPage;
