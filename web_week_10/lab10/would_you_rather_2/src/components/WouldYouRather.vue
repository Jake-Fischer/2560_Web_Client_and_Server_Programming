<template>
  <div class="wyr">
    
    <h2>Please make your Choice!</h2>
    <h3>{{question}}</h3>
    <!-- <h3>{{questionID}}</h3> -->
    <br>
    <input type='radio' v-model='choice' v-bind:value='answer1' v-on:change='choiceMade'><label>{{answer1}}</label>

    <input type='radio' v-model='choice' v-bind:value='answer2' v-on:change='choiceMade'><label>{{answer2}}</label>

  </div>
</template>

<script>
export default {
  name: 'WouldYouRather',
  props: {
    questionID: Number,
    question: String,
    answer1: String,
    answer2: String
  },
  data() {
    return {
      choice:'',
    }
  },
  methods: {
    choiceMade() {
      //emits the choice and the question id to the parent
      this.$emit('answer-changed', this.choice, this.questionID )
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
  background-color: grey;
}
</style>
