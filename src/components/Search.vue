<template>
    <div class="Search">
        <h1>{{msg}}</h1>
        <input placeholder="search..." v-on:keyup="search(term)" v-model="term"  />
    </div>
</template>

<script>

export default {
    props: ['msg'],
    name: 'Search',
    data () {
        return {
            term: '',
            results:[] ,
        }
    },
    methods: {
        search(term){
            console.log(term)
            this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US&query=' + term).then(function(res){
                console.log(res.data.results);
                this.results = res.data.results
            });
        }
    },
}
</script>

<style lang="scss" scoped>
input{
    color: white;
}
p{
    color: white;
}
</style>