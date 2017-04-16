<template>
    <div>
        This is trailer for movie {{$route.params.id}}
    </div>
</template>

<script>
export default {
    name: 'Trailer',
    data () {
        return {
            movie:{}
        }
    },
}
</script>

<style>
</style>