<template>
  <div id="app">
    <h1>Would you Rather...</h1>

    <would-you-rather 
      v-for="question in questions"
      v-bind:key="question"
      v:bind:questionID="question.id"
      v-bind:question="question.question"
      v-bind:answer1="question.answer1"
      v-bind:answer2="question.answer2"
      v-on:answer-changed="answerChanged"
    ></would-you-rather>
    <li v-for='question in questions'
    v-bind:key='question'>{{userAnswer}}</li>
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
      //Array of questions, their ids, answers, and userAnswers
      questions:[
        {
          id: 0,
          question: 'Would you rather become five years older or two years younger?',
          answer1: 'Five Years Older',
          answer2: 'Two Years Younger',
          userAnswer:''
        },
        {
          id: 1,
          question: 'Would you rather be a wizard or a superhero?',
          answer1: 'Wizard',
          answer2: 'Superhero',
          userAnswer: ''
        },
        {
          id: 2,
          question: 'Would you rather be able to create a new holiday or create a new sport?',
          answer1: 'New Holiday',
          answer2: 'New Sport',
          userAnswer:''
        }
      ],
      answers:[

      ]
    }
  },
  methods: {
    //When WouldYouRather emits answer-changed, this method is called with id and choice being passed to it
    answerChanged(id, choice) {
      console.log(id)
      console.log(choice)
      // this.questions[id].userAnswer = choice
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
