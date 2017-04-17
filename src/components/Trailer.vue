<template>
<section class="trailer">
    <div class="trailer-wrapper">
        <div v-for="movie in movies[0]">
            <iframe :src="movie.key" allowfullscreen frameborder="0"></iframe>
        </div>
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
.trailer{
    display: flex;
    justify-content: center;
    align-content: center;
}
.trailer-wrapper{
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
}
iframe{
    width: 1280px;
    height: 720px;
}
div{
    width: 1280px;
    height: 750px;
}
</style>