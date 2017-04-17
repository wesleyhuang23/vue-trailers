<template>
    <section>
        <div >
            <div class="search-results" v-for="movie in movies">
                <router-link :to="{name: 'Trailer', params: {id: movie.id}}">
                <img v-show="movie.poster_path" :src="movie.poster_path"/>
                <p v-show="movie.poster_path">{{movie.title}}</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:['movies'],
    data () {
        return {
            results: this.$store.state.search
        }
    },
    created: function(){
        console.log(this.$store.state.search);
    }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: white;
}
.search-results{
    display: inline-block;
    width: 200px;
    padding-bottom: 30px;
    padding-left: 2px;
    padding-right: 2px;
}
img{
    width: 200px;
}
</style>