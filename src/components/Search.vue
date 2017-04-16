<template>
    <div class="Search">
        <h1>{{msg}}</h1>
        <input type="text" placeholder="search...">
        <p>{{title.title}}</p>
    </div>
</template>

<script>
export default {
    props: ['msg', 'title'],
    name: 'Search',
    data () {
        return {
            search: {}
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