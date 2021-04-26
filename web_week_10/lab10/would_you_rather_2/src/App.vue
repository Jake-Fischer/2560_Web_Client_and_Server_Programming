<template>
  <div id="app">
    <h1>Would you Rather...</h1>

    <would-you-rather 
      v-for="question in questions"
      v-bind:key="question.id"
      v-bind:questionID="question.id"
      v-bind:question="question.question"
      v-bind:answer1="question.answer1"
      v-bind:answer2="question.answer2"
      v-on:answer-changed="answerChanged"
    ></would-you-rather>
    <h1>I would rather...</h1>
    <li v-for='answer in answers'
    v-bind:key='answer'
    >{{answer}}</li>
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
      // answers: [] //Answers array to store user answers. 
    }
  },
  methods: {
    //When WouldYouRather emits answer-changed, this method is called with id and choice being passed to it
    answerChanged(choice, id) {
      // test logging
      // console.log(id)
      // console.log(choice)
      // console.log(this.questions[0])
      // console.log(this.questions[id])
      this.questions[id].userAnswer = choice
      // this.answers[id] = choice // change the user choice based on the id
    }
  },
  computed: {
    answers(){
      let answers = [] // empty current answers array
      this.questions.forEach(function(q){ //for each question do this 
        if (q.userAnswer.length > 0){ // if the user answer is there. there could be a 1-letter answer - so check > 0
          answers.push(q.userAnswer) //push it to the answers array
        }
      })
      return answers
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
