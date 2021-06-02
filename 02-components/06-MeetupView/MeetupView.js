import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',
  props:{
    meetup: {
      type: Object,
      required: true
    },
  },
  components: {
    MeetupInfo,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda
  },

  computed:{
    meetupLink(){
      if (this.meetup.imageId){
        return getImageUrlByImageId(this.meetup.imageId);
      }
    },
    locDate(){
      return new Date(this.meetup.date);
    }
  },

  template: `
    <div>
      <meetup-cover :title="this.meetup.title" :link="meetupLink"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"/>
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"/>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="this.meetup.place" :date="locDate"/>
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
