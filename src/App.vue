<template>
    <div id="app">
        <h1>TODO</h1>
        <tuto-list :tasks="tasks"/>
    </div>
</template>

<script>
  import TutoList from './components/TutoList.vue';
  import axios from 'axios';

  export default {
    name: 'app',

    components: {TutoList},

    data() {
      return {
        tasks: []
      };
    },
    methods: {
      //GET TASKS AND SHOW THEM
      fetchTasks() {
        axios.get('http://localhost:3000/todo')
          .then((response) => {
            this.tasks = response.data;
          })
          .catch(function (error) {
            console.error(error);
          })
      }
    },

    mounted(){
      this.fetchTasks();
    }
  }
</script>

<style lang="sass">
    body
        background-color: #f0f0f0

        #app
            font-family: 'Avenir', Helvetica, Arial, sans-serif
            -webkit-font-smoothing: antialiased
            -moz-osx-font-smoothing: grayscale
            color: #2c3e50
            margin-top: 60px

        h1
            text-align: center
            color: #e0e0e0
            font-size: 80px
</style>
