<template>
    <div class="Search">
        <h1>{{msg}}</h1>
        <input placeholder="search..." v-on:keyup="search(term)" v-model="term"  />
        <SearchResults v-if="show" :movies="this.results"></SearchResults>
    </div>
    
</template>

<script>
import SearchResults from './SearchResults.vue';

export default {
    components: {
        'SearchResults': SearchResults
    },
    props: ['msg'],
    name: 'Search',
    data () {
        return {
            term: '',
            results:[],
            show: true,
        }
    },
    methods: {
        search(term){
            if(term.length > 0){
                console.log(term)
                this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US&query=' + term).then(function(res){
                    console.log(res.data.results);
                    for(let i = 0; i < res.data.results.length; i++){
                        res.data.results[i].poster_path = 'https://image.tmdb.org/t/p/original' + res.data.results[i].poster_path;
                    }
                    this.results = res.data.results
                    this.$store.state.search = res.data.results
                });
            } else {
                this.show = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
input{
    color: white;
    font-size: 20px;
    border: 1px solid white;
    margin: auto;
}
p{
    color: white;
}
</style>