<template>
  <div :class="classes">
    <div v-if="label">
      <label class="form-label">{{ label }}</label>
    </div>
    <slot></slot>
    <input :placeholder="inputText"/>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',

  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String
    },
  },

  computed:{
    classes(){
      if (this.inline){
        return "form-group form-group_inline";
      }
      return "form-group";
    },
    inputText(){
      if(this.label){
        return "With label";
      }
      else if(this.inline){
        return "Inline";
      }
      return "No label";
    }
  }
};
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
  display: block;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>
