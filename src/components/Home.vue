<template>
  <div class="home">
    <h1>{{ msg | uppercase }}</h1>
    <br>
    <ul>
      <li v-for="poster in posters[0]">
        <router-link :to="{name: 'Trailer', params: {id: poster.id} }">
        <img v-bind:src="poster.poster_path"/>
        <p>{{poster.title}}</p>
        </router-link>
      </li>
    </ul>

    <Search msg="This is props and I come from Home Component, who is my parent" ></Search>

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
          for(let i = 0; i < res.data.results.length; i++){
            res.data.results[i].poster_path = 'https://image.tmdb.org/t/p/original' + res.data.results[i].poster_path;
          }
          console.log(res.data.results);
          this.posters.push(res.data.results);
        })
      },
  },
  filters: {
      uppercase: function (value){
        return value.toUpperCase();
      }
  },
  created: function(){
    this.fetchNowPlaying();
    console.log(this.$store.state.users);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
  a{
    text-decoration: none;
    color: white;
  }
  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    overflow-x: scroll;

    li{
      padding-left: 3px;
      padding-right: 3px;
    }
  }
  
  img{
    width:200px;
  }
  p{
    font-size: 15px;
    text-align: center;
  }
</style>
