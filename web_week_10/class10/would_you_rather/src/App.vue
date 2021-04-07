<template>
  <div id="app">
    <h1>Would you Rather...</h1>

    <would-you-rather 
    v-bind:question="wyrQuestion"
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-changed="answerChanged"
    ></would-you-rather>
    <p>{{userSelectionMessage}}</p>
  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data() {
    return {
      wyrQuestion: 'Would you rather become five years older or two years younger?',
      wyrAnswer1: 'Five Years Older',
      wyrAnswer2: 'Two Years Younger',
      userSelectionMessage: ''
    }
  },
  methods: {
    answerChanged(choice) {
      this.userSelectionMessage = `Thanks, you chose: ${choice}`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
