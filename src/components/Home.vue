<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="poster in posters[0]">
        <p>{{poster.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Vue Trailers',
      posters: []
    }
  },
  methods: {
    fetchNowPlaying(){
      this.$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US&page=undefined')
        .then(function(res) {
          console.log(res.data.results);
          this.posters.push(res.data.results);
        })
    }
  },
  created: function(){
    this.fetchNowPlaying();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
