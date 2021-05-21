const MeetupDescription = {
  name: 'MeetupDescription',
  props: {
    description: {
      type: String,
      default: null
    }
  },

  // Входные параметры

  template: `<p class="meetup-description">{{ description }}</p>`,
};

export default MeetupDescription;
