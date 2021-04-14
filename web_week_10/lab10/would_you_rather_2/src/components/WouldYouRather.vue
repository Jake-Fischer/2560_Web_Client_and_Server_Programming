<template>
  <div class="wyr">
    
    <h2>Please make your Choice!</h2>
    <h3>{{question}}</h3>
    <br>
    <input type='radio' v-model='choice' v-bind:value='answer1' v-on:change='choiceMade'><label>{{answer1}}</label>

    <input type='radio' v-model='choice' v-bind:value='answer2' v-on:change='choiceMade'><label>{{answer2}}</label>

  </div>
</template>

<script>
export default {
  name: 'WouldYouRather',
  props: {
    id: Number,
    question: String,
    answer1: String,
    answer2: String
  },
  data() {
    return {
      choice:''
    }
  },
  methods: {
    choiceMade() {
      this.$emit('answer-changed', this.choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.wyr{
  border:2px black solid;
}
</style>
