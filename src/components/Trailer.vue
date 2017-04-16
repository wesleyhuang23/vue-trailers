<template>
<section class="trailer">
    <div v-for="movie in movies[0]">
        <iframe :src="movie.key" allowfullscreen frameborder="0"></iframe>
    </div>
    </section>
</template>

<script>
export default {
    name: 'Trailer',
    data () {
        return {
            movies: []
        }
    },
    methods: {
        fetchTrailers(){
            this.$http.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/videos?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US').then( res => {
                for(let i = 0; i < res.data.results.length; i++){
                    res.data.results[i].key = 'https://www.youtube.com/embed/' + res.data.results[i].key;
                }
                this.movies.push(res.data.results.filter(function(movie){
                    return movie.type === 'Trailer'
                }));
                console.log(this.movies)
            })
        }
    },
    created: function () {
        this.fetchTrailers();
        console.log(this.$store.state.users);
    }
}
</script>

<style lang="scss" scoped>
iframe{
    width: 1280px;
    height: 720px;
}
div{
    margin-top: 150px;
    margin-bottom: 150px;
}
</style>