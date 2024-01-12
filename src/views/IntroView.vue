<template>
    <div>
        <h1>This is the intro page hvyggvgvgggcvgvvvc</h1>
        <p>{{ $store.state.intro }}</p>
        <!-- <p>{{ $store.state.tasks }}</p>
        <p>{{ $store.state.review }}</p> -->
    </div>
</template>
<script>
export default {
    computed: {
        getData(){
            this.$store.dispatch('getData')
        }
    },
    mounted() {
        this.getData
    },
}
</script>
<style>
    
</style>