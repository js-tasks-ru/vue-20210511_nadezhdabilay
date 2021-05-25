const CounterButton = {
  name: 'CounterButton',

  model: {
    prop: 'count',
    event: 'increment',
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    increment() {
      this.$emit('increment', this.count + 1);
    },
  },

  template: `<button type="button" @click="increment">{{ count }}</button>`,
};

export default CounterButton;
